import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BooksSection = ({ title, books, onChangeShelf }) => {
  return (
    <section style={{ padding: "0 16px 24px" }}>
      <h2 className="bookshelf-title">{title}</h2>
      <ol className="contact-list">
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onChangeShelf={onChangeShelf}
          />
        ))}
      </ol>
    </section>
  );
};

BooksSection.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BooksSection;
