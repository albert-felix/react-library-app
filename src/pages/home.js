import React, { useState, useEffect, Fragment } from "react";
import Book from "../components/books";
import { Container, Row, Col, Button } from "react-bootstrap";

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
      <br/>
      <h2 align="center">Books List</h2>
          {books.map((book, bookIndex) => {

            const addToCart = () => {

            };

            return (
              <Fragment key={bookIndex}>
                <div>
                  <Container>
                  <Row>
                  <Col>
                    <Book
                      title={book.title}
                      author={book.author}
                      copies={book.copies}
                      description={book.description}
                      ISBN={book.ISBN}
                    />
                  </Col>
                  <Col xs lg="2">
                    <Button onClick={addToCart} variant="dark" size="sm" >Add To Cart</Button>
                  </Col>
                  </Row>
                  </Container>
                </div>
              </Fragment>
            );
          })}
    </Fragment>
  );
};

export default Home;
