import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";

// Do not need brackets for export default in book.js
// Import react hooks
import { Book } from "./models/Book";
import { useState, useEffect } from "react";

// default export
import LibraryService from "./services/library-services";

function App() {
  //Define state
  const [books, setBooks] = useState({});

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
    const book = LibraryService.createBook(new Book(title, author, isbn));

    // add to books state
    setBooks([...books, book]);
  }

  //Use isbn as identifier
  async function onBookRemoved(isbn) {
    // simple
    await LibraryService.deleteBook(isbn);

    // reset
    setBooks(books.filter((book) => book.isbn !== isbn));
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Library</h1>

        <hr></hr>

        <BookForm onBookCreate={onBookCreate}></BookForm>
        <BookTable
          books={books}
          onBookRemoved={onBookRemoved}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
