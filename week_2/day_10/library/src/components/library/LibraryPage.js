import React from "react";

import { useState, useEffect } from "react";

// default export
import { Book } from "../../models/Book";
import LibraryService from "../../services/library-services";

// import page components
import BookForm from "./BookForm";
import BookTable from "./BookTable";

export default function LibraryPage(props) {
  //Define state
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  // initially starts as not loading
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    //set books to those from bookservice (stored on firestore)
    try {
      const books = await LibraryService.fetchBooks(); // fetching from internet, returns function
      // filter each book that comes through, all books must be equal to user id
      setBooks(books.filter((book) => book.userId === props.user.uid));
    } catch (err) {
      console.log(err);
    }

    //setLoading to false once library is loaded
    setLoading(false);
  }

  // must by asynchronous function because interacting with database
  async function onBookCreate(title, author, isbn) {
    // create book
    const book = await LibraryService.createBook(
      new Book(null, title, author, isbn, props.user.uid)
    );

    // add to books state
    //setBookToEdit(null);
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
            loading={loading}
            onBookRemoved={onBookRemoved}
            onBookEdit={onBookEdit}
          ></BookTable>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/98/7a/33/987a3311c90132aa67276a700f38190f.jpg"
        className="img-fluid mx-auto d-block text-center mt-5"
        alt="Library Books"
      ></img>
    </div>
  );
}
