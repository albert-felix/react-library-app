import React from "react";

const Book = ({ title, author, description, copies,ISBN }) => {

  return(
    <div >
      <p align="left"><b>Title : </b> {title}</p>
      <p align="left"><b>Author : </b>{author}</p>
      <p align="left"><b>Copies : </b>{copies}</p>
      <p align="left"><b>Description : </b>{description}</p>
      <p align="left"><b>ISBN : </b>{ISBN}</p>
      <p>--------------------</p>
    </div>
  )
};

export default Book;