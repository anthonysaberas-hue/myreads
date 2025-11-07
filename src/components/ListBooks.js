import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import BooksSection from "./BooksSection";

const ListBooks = ({ booksByShelf, onChangeShelf }) => {
  // text search (local)
  const [query, setQuery] = useState("");
  // shelf filter: all | currentlyReading | wantToRead | read | none
  const [shelfFilter, setShelfFilter] = useState("all");

  // reset filters on mount so you don't get stuck after a previous search
  useEffect(() => {
    setQuery("");
    setShelfFilter("all");
  }, []);

  const updateQuery = (q) => setQuery(q.trim());
  const clearAllFilters = () => {
    setQuery("");
    setShelfFilter("all");
  };

  // flatten all shelves first
  const allBooks = useMemo(
    () => [
      ...booksByShelf.currentlyReading,
      ...booksByShelf.wantToRead,
      ...booksByShelf.read,
    ],
    [booksByShelf]
  );

  // apply text filter
  const textFiltered = useMemo(() => {
    if (!query) return allBooks;
    const q = query.toLowerCase();
    return allBooks.filter((b) => b.title?.toLowerCase().includes(q));
  }, [query, allBooks]);

  // apply shelf filter
  const filtered = useMemo(() => {
    if (shelfFilter === "all") return textFiltered;
    return textFiltered.filter((b) => (b.shelf || "none") === shelfFilter);
  }, [textFiltered, shelfFilter]);

  // regroup into shelves after filters
  const grouped = useMemo(() => {
    const map = { currentlyReading: [], wantToRead: [], read: [], none: [] };
    for (const b of filtered) {
      const s = b.shelf || "none";
      (map[s] || map.none).push(b);
    }
    return map;
  }, [filtered]);

  const total = allBooks.length;
  const showing = filtered.length;

  return (
    <div className="list-contacts">
      <div className="list-contacts-top" style={{ gap: 8, display: "flex", alignItems: "center" }}>
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Books"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          style={{ flex: 1 }}
        />

        {/* Shelf filter control */}
        <select
          aria-label="Filter by shelf"
          value={shelfFilter}
          onChange={(e) => setShelfFilter(e.target.value)}
          style={{ height: 34 }}
        >
          <option value="all">All Shelves</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>

      {(showing !== total || shelfFilter !== "all") && (
        <div className="showing-contacts">
          <span>
            Now showing {showing} of {total}
            {shelfFilter !== "all" ? ` (filtered by "${shelfFilter}")` : ""}
          </span>
          <button onClick={clearAllFilters}>Show all</button>
        </div>
      )}

      <BooksSection
        title="Currently Reading"
        books={grouped.currentlyReading}
        onChangeShelf={onChangeShelf}
      />
      <BooksSection
        title="Want to Read"
        books={grouped.wantToRead}
        onChangeShelf={onChangeShelf}
      />
      <BooksSection
        title="Read"
        books={grouped.read}
        onChangeShelf={onChangeShelf}
      />
      {/* <BooksSection
        title="None"
        books={grouped.none}
        onChangeShelf={onChangeShelf}
      /> */}
    </div>
  );
};

ListBooks.propTypes = {
  booksByShelf: PropTypes.shape({
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    none: PropTypes.array.isRequired,
  }).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ListBooks;
