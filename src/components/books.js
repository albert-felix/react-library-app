import React from "react";

const Book = ({ title, author, description, copies,ISBN }) => {

  return(
    <div className="margin">
      <p><b>Title : </b> {title}</p>
      <p><b>Author : </b>{author}</p>
      <p><b>Copies : </b>{copies}</p>
      <p align="justify"><b>Description : </b>{description}</p>
      <p><b>ISBN : </b>{ISBN}</p>
      <br/>
    </div>
  )
};

export default Book;