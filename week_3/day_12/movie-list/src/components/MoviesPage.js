import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FileService from "../services/file-service";
import MovieService from "../services/movie-service";
import MovieTable from "./MovieTable";

import { Movie } from '../models/Movie';

export default function MoviesPage(props) {
  //Define state
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      if (!movies.length) {
        onInitialLoad();
      }
    },

    // If array is empty, function only executes on first initialization
    // Local storage has no information so we fetch books from firestore
    []
  );

  async function onInitialLoad() {
    try {
      const movies = await MovieService.fetchMovies(props.user); // fetching from internet, returns function
      // filter each book that comes through, all books must be equal to user id
      //setBooks(books.filter((book) => book.userId === props.user.uid));
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-end'>
        <Link to='/add-movie'>Add Movie</Link>
      </div>
      <div className='justify-content-center'>
      <MovieTable movies={movies}></MovieTable>
      </div>
    </div>
  )
}
