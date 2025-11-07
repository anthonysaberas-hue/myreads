import PropTypes from "prop-types";

const BookItem = ({ book, onChangeShelf }) => {
  const thumbnail =
    book.imageLinks?.thumbnail || book.imageLinks?.smallThumbnail || "";
  const title = book.title || "Untitled";
  const authors = Array.isArray(book.authors)
    ? book.authors.join(", ")
    : book.authors || "Unknown author";
  const currentShelf = book.shelf || "none";

  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{
          backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
          backgroundColor: thumbnail ? "transparent" : "#eee",
        }}
      />
      <div className="contact-details" style={{ width: "100%" }}>
        <div
          className="title-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <p
            className="book-title-inline"
            style={{ fontWeight: "bold", marginRight: "10px" }}
          >
            {title}
          </p>
          <select
            aria-label="Move book to shelf"
            value={currentShelf}
            onChange={(e) => onChangeShelf(book, e.target.value)}
            className="inline-shelf-select"
            style={{ padding: "4px 6px", borderRadius: "4px" }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <p style={{ marginTop: 6 }}>{authors}</p>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookItem;
