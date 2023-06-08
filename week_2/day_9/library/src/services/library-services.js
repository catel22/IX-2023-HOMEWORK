// need to import database reference from firebase file
import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../firebase/firebase";
  import { Book } from "../models/Book";
  
  class LibraryService {
    constructor() {
      this.collection = "books";
    }
  
    // send information across internet and returning a promise to execute
    // asynchronous js with await functions
    // accept book from app component
  
    async fetchBooks() {
      // step 1: reference to collection
      const collectionRef = collection(db, this.collection);
  
      // create a query with a reference to the collection
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
  
      // for each document, get the data and create a book
      querySnapshot.forEach((doc) => {
        const data = doc.data();
  
        // create new book
        const book = new Book(doc.id, data.title, data.author, data.isbn);
  
        //empty array to push books to
        books.push(book);
      });
  
      return books;
    }
  
    async createBook(book) {
      // see firebase docs for addDoc function
      // create a collection
      const collectionRef = collection(db, this.collection);
  
      // add document to this collection
      const docRef = addDoc(collectionRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
      });
  
      book.id = docRef.id;
      return book;
    }
  
    // search for updateDoc in Firebase
    // we need reference to document we want to update
    // then call function with values to update
    async updateBook(book) {
      const docRef = doc(db, this.collection, book.id);
  
      await updateDoc(docRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
      }); // await because returns promise
  
      //return to app component to update UI
      return book;
    }
  
    async deleteBook(bookId) {
      try{
      const docRef = doc(db, this.collection, bookId);
  
      await deleteDoc(docRef);
      }
      catch(err) {
        alert(err);
      }
    }
  }
  
  const service = new LibraryService();
  export default service;