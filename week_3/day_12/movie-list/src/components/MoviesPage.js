import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FileService from "../services/file-service";
import MovieService from "../services/movie-service";
import MovieTable from "./MovieTable";
import './MoviesPage.css';

import { Modal } from "react-bootstrap";

import { Movie } from "../models/Movie";

export default function MoviesPage(props) {
  //Define state
  const [movies, setMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null);

  // start modal off as hidden
  const [showModal, setShowModal] = useState(false);

  useEffect(
    () => {
      fetchMovies();
    },

    // If array is empty, function only executes on first initialization
    // Local storage has no information so we fetch books from firestore
    []
  );

  async function fetchMovies() {
    try {
      const mvoies = await MovieService.fetchMovies();
      setMovies(movies);
    } catch (err) {
      // need to correctly handle error
      console.log(err);
    }
  }

  async function onInitialLoad() {
    // try {
    //   const movies = await MovieService.fetchMovies(props.user); // fetching from internet, returns function
    //   // filter each book that comes through, all books must be equal to user id
    //   //setBooks(books.filter((book) => book.userId === props.user.uid));
    //   setMovies(movies);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  function hideModal() {
    setMovieToRemove(null);
    // set showModal back to false
    setShowModal(false);
  }

  async function removeMovie() {
    try {
      await MovieService.deleteMovie(movieToRemove.id);
      await FileService.deleteFile(movieToRemove.downloadUrl);
      setMovies(movies.filter((movie) => movie.id !== movieToRemove.id ));
      hideModal();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-movie">Add Movie</Link>
      </div>
      <div className="d-flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <img
                src={movie.downloadUrl}
                alt="movie cover"
                className="card-img-top movie-image"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>

              <div
                className="remove-button btn btn-secondary"
                onClick={() => {
                  setMovieToRemove(movie);
                  setShowModal(true);
                }}
              >
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
        <div className="justify-content-center">
          <MovieTable movies={movies}></MovieTable>
        </div>
      </div>
      
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete: {movieToRemove?.title}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={()=> hideModal()}>Close</button>
          <button className='btn btn-danger'>Yes, Delete</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
