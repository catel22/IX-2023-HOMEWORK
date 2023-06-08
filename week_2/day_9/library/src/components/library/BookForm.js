import React, { useState, useEffect } from "react";

export default function BookForm(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

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

    props.onBookCreate(title, author, isbn); // send book through
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  return (
    <div>

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