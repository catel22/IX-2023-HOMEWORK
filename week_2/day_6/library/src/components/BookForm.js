import React, { useState, useEffect } from "react";
import { Book } from "../models/books.js";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  // React hook that runs function when variable/object changes
  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onBookFormSubmit(event) {
    event.preventDefault();

    if (!isValid()) {
      return;
    }

    let book = new Book(title, author, isbn);
    props.onBookCreated(book);
    clearInputs();
  }

  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  function clearInputs() {
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div>
      <h1 className='text-decoration-underline'>Library</h1>
      

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(event) => setIsbn(event.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
// if props contains a book to edit, say update book, otherwise say add book
