import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookItem from "../components/BookItem";

export default function Search({ onMove, shelfById }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Normalize shelf lookup map
  const shelfLookup = useMemo(() => {
    if (shelfById instanceof Map) return shelfById;
    if (shelfById && typeof shelfById === "object") {
      return new Map(Object.entries(shelfById));
    }
    return new Map();
  }, [shelfById]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const q = query.trim();
      if (!q) {
        setResults([]);
        setError("");
        return;
      }
      setBusy(true);
      setError("");
      try {
        const found = await BooksAPI.search(q, 20);
        if (cancelled) return;

        if (!Array.isArray(found)) {
          // API may return { error: 'empty query' }
          setResults([]);
          return;
        }

        // de-dupe + reflect current shelf
        const seen = new Set();
        const merged = [];
        for (const b of found) {
          if (!b || !b.id || seen.has(b.id)) continue;
          seen.add(b.id);
          merged.push({ ...b, shelf: shelfLookup.get(b.id) ?? b.shelf ?? "none" });
        }
        setResults(merged);
      } catch {
        if (!cancelled) {
          setResults([]);
          setError("Search failed. Please try again.");
        }
      } finally {
        if (!cancelled) setBusy(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [query, shelfLookup]);

  return (
    <div className="search-books">
      <div className="search-books-bar search-bar-flex">
        {/* Upper-left brand link back to home */}
        <Link className="brand-link" to="/">📚 MyReads</Link>

        <div className="search-books-input-wrapper search-input-grow">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search books"
          />
        </div>
      </div>

      <div className="search-books-results">
        {busy && <div className="loading" style={{ padding: 12 }}>Searching…</div>}
        {!busy && !!error && <div className="error" style={{ padding: 12 }}>{error}</div>}
        {!busy && !error && query.trim() !== "" && results.length === 0 && (
          <div style={{ padding: 12 }}>No results.</div>
        )}

        {/* Render as a neat vertical list */}
        <ol className="contact-list search-list">
          {results.map((b) => (
            <li key={b.id} className="contact-list-item">
              {/* BookItem expects onChangeShelf; wire to onMove */}
              <BookItem book={b} onChangeShelf={onMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Search.propTypes = {
  onMove: PropTypes.func.isRequired, // (book, shelf) => void
  shelfById: PropTypes.oneOfType([
    PropTypes.instanceOf(Map),
    PropTypes.object, // { [id]: shelf }
  ]).isRequired,
};
