import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Cart = () => {
  const currentUser = window.localStorage.getItem("email");
  const data = { currentUser };

  const [books, setBooks] = useState([]);

  const config = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify(data)
  };

  useEffect(() => {
    fetch("https://upo24.sse.codesandbox.io/user/cart", config)
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(console.error);
  }, []);


  return (
    <Fragment>
      <div className="container">
        <h2>Books in Cart</h2>
        <br />
        {books.map((book, bookIndex) => {
          return (
            <Fragment key={bookIndex}>
              <p>
                {bookIndex + 1}. {book}{" "}
                <Button onClick = {null} variant="link" size="sm">
                  Remove
                </Button>
              </p>
              <br />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Cart;
