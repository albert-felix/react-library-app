import React, { useState, useEffect, Fragment } from "react";
import Book from "../components/books";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://upo24.sse.codesandbox.io/books")
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(console.error);
  }, []);

  return (
    <Fragment>
      <h2>Books List</h2>
      {books.map((book, bookIndex) => {
        return (
          <Fragment key={bookIndex}>
            <div className="container">
              <Book
                title={book.title}
                author={book.author}
                copies={book.copies}
                description={book.description}
                ISBN={book.ISBN}
              />
            </div>
          </Fragment>
        );
      })}
      </Fragment>
    )
};

export default Home;
