// import bootstrap

// Homework: try to rebuild by passing to parent and passing down to render
// Understand components and react
// Follow variables that are going through

import "./App.css";
import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";

function App() {

  // Declare a new state variable
  // React hook used managing component state
  const [books, setBooks] = useState([]); // default state in brackets, start as empty array
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]); // take previous books array, add new book to this array
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));// filter array of books to only return books without target isbn
  }

  function onBookEdit(book) {
    setBookToEdit(book);// set value of book to edit
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="patterns pt1">
      <div className="canvas">
        <div className="face">
          <div className="left-eye">
          </div>
          <div className="right-eye">
          </div>
          
          <div className="mouth">
          </div>
          <div className="mouth-cover">
          </div>
        </div>
      </div>
      <div className="text-center m-5">
        <div className="card p-4 bg-dark text-white">
          <BookForm bookToEdit={bookToEdit} onBookCreated={onBookCreated}></BookForm>
          <BookTable books={books} onBookEdit={onBookEdit} onBookDelete={onBookDelete}></BookTable>
        </div>
      </div>
    </div>
  );
} // when form is submitted, send book up to function
// Send books down into table component to render in table

export default App;
