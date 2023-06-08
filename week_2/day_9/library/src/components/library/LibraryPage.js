import React from "react";

import { useState, useEffect } from 'react';

// default export
import { Book } from "../../models/Book";
import LibraryService from "../../services/library-services";

// import page components
import BookForm from "./BookForm";
import BookTable from "./BookTable";

export default function LibraryPage() {

//Define state
const [books, setBooks] = useState([]);
const [bookToEdit, setBookToEdit] = useState(null);

// If we put var reference and value changes, error function fires
// We only want it to fire once
useEffect(
  () => {
    //if book has no length
    if (!books.length) {
      onInitialLoad();
    }
  },

  // If array is empty, function only executes on first initialization
  // Local storage has no information so we fetch books from firestore
  []
);

async function onInitialLoad() {
  // Add try-catch here if there is error so we can show to user
  // if we do try-catch in book-service then user will not see

  //set books to those from bookservice (stored on firestore)
  try {
    const books = await LibraryService.fetchBooks(); // fetching from internet, returns function
    setBooks(books);
  } catch (err) {
    // still need to properly handle the error
    console.log(err);
  }
}

// must by asynchronous function because interacting with database
async function onBookCreate(title, author, isbn) {
  // create book
  const book = await LibraryService.createBook(
    new Book(null, title, author, isbn)
  );

  // add to books state
  setBookToEdit(null);
  setBooks([...books, book]);
}

//Use isbn as identifier
async function onBookRemoved(book) {
  // simple
  await LibraryService.deleteBook(book.id);

  // reset
  setBooks(books.filter((x) => x.id !== book.id));
}

async function onBookEdit(book) {
  setBookToEdit(book);
  await LibraryService.deleteBook(book.id);

  // reset
  setBooks(books.filter((x) => x.id !== book.id));
  // delete from list
  //setbooks
  // update the tasks state with the filtered tasks
  //setTasks(books.filter((task) => task.id !== taskId));
}

return (
  <div>
    <div className="container mt-5">
      <div className="card card-body text-center bg-black text-white">
        <h1 className="fw-bold">Library</h1>

        <hr></hr>

        <BookForm
          onBookCreate={onBookCreate}
          bookToEdit={bookToEdit}
        ></BookForm>
        <BookTable
          books={books}
          onBookRemoved={onBookRemoved}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>
    </div>
    <img
      src="https://i.pinimg.com/736x/98/7a/33/987a3311c90132aa67276a700f38190f.jpg"
      class="img-fluid mx-auto d-block text-center mt-5"
      alt="Library Books"
    ></img>
  </div>
);
}
