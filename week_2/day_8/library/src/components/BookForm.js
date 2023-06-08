import React, { useState } from "react";

export default function BookForm(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
  
  function onBookFormSubmit(event) {
    event.preventDefault();

    props.onBookCreate(title, author, isbn); // send book through
    //setBook(null);
  }

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
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
