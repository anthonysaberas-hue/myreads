import { useEffect, useMemo, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from "./pages/Search";          // ← add this
import * as BooksAPI from "./BooksAPI";

const SHELVES = ["currentlyReading", "wantToRead", "read"];
const DISCOVERY_QUERIES = [
  "a", "e", "i", "o", "u",
  "the", "and", "har", "art", "data", "design", "life", "science"
];
const MAX_BOOTSTRAP = 12;

const App = () => {
  const [books, setBooks] = useState([]);
  const [bootstrapping, setBootstrapping] = useState(false);

  // Fetch all books currently on shelves for this token
  const fetchAll = async () => {
    const all = await BooksAPI.getAll();
    setBooks(all || []);
    return all || [];
  };

  // Dynamically discover books via /search and assign shelves (first run only)
  const dynamicBootstrap = async () => {
    if (localStorage.__myreads_initialized === "1") return;

    setBootstrapping(true);
    try {
      const seen = new Set();
      const picked = [];

      for (const q of DISCOVERY_QUERIES) {
        if (picked.length >= MAX_BOOTSTRAP) break;
        const res = await BooksAPI.search(q, 20).catch(() => []);
        const arr = Array.isArray(res) ? res : [];
        for (const b of arr) {
          if (!b?.id || seen.has(b.id)) continue;
          seen.add(b.id);
          picked.push(b);
          if (picked.length >= MAX_BOOTSTRAP) break;
        }
      }

      for (let i = 0; i < picked.length; i++) {
        const shelf = SHELVES[i % SHELVES.length];
        const book = picked[i];
        try {
          await BooksAPI.update(book, shelf);
        } catch {
          /* ignore single failure and continue */
        }
      }

      localStorage.__myreads_initialized = "1";
    } finally {
      setBootstrapping(false);
    }
  };

  // On mount: load existing shelves; if empty and not initialized → bootstrap → reload
  useEffect(() => {
    (async () => {
      const current = await fetchAll();
      if (current.length === 0 && localStorage.__myreads_initialized !== "1") {
        await dynamicBootstrap();
        await fetchAll();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optimistic shelf change (persists to API)
  const updateBookShelf = async (book, shelf) => {
    const prevShelf = book.shelf || "none";

    setBooks((prev) => {
      const exists = prev.some((b) => b.id === book.id);
      if (shelf === "none") {
         return prev.filter((b) => b.id !== book.id);
      }
      if (exists) return prev.map((b) => (b.id === book.id ? { ...b, shelf } : b));
      return [...prev, { ...book, shelf }];
    });

    try {
      await BooksAPI.update(book, shelf);
      // Optional truth refresh:
      // const fresh = await BooksAPI.getAll();
      // setBooks(fresh || []);
    } catch (e) {
      // rollback on failure
      setBooks((prev) =>
        prev.map((b) => (b.id === book.id ? { ...b, shelf: prevShelf } : b))
      );
      // eslint-disable-next-line no-console
      console.error("Failed to persist shelf:", e);
    }
  };

  // Group books by shelf for main page
  const booksByShelf = useMemo(() => {
    const map = { currentlyReading: [], wantToRead: [], read: [], none: [] };
    for (const b of books) {
      const s = b.shelf || "none";
      (map[s] || map.none).push(b);
    }
    return map;
  }, [books]);

  // Lookup map for Search page so it shows the correct current shelf per book
  const shelfById = useMemo(
    () => new Map(books.map((b) => [b.id, b.shelf || "none"])),
    [books]
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
              {bootstrapping && (
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  initializing your shelves…
                </div>
              )}
            </div>

            <div className="list-books-content">
              <ListBooks
                booksByShelf={booksByShelf}
                onChangeShelf={updateBookShelf}
              />
            </div>

            {/* Required by rubric: link to the search page */}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        }
      />

      {/* Search route (read-only lookup + shelf change sync) */}
      <Route
        path="/search"
        element={
          <Search
            onMove={updateBookShelf}   // Search component expects onMove(book, shelf)
            shelfById={shelfById}      // so results reflect current shelf
          />
        }
      />
    </Routes>
  );
};

export default App;
