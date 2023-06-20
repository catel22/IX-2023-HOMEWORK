import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FileService from "../services/file-service";
import MovieService from "../services/movie-service";

import { Movie } from '../models/Movie';

export default function AddMoviePage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // needs to be asynchronous
  async function onFormSubmit(event) {
    event.preventDefault();

    try {
      // upload the file and then save to firestore
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Progress: ", progress);
      });

      // save to firestore
      await MovieService.createMovie(new Movie(null, title, downloadUrl));
      // back to home
      navigate('/');
    } catch (err) {
      // exception
      console.log(err);
    }
  }

  // if no file selected, set back to null
  function onFileSelect(event) {
    if (event.target.files.length) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/">Movie List</Link>
      </div>

      <div className="container my-5">
        <div className="card card-body">
          <h1>Add Movie</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Movie Cover Image</label>
              <input
                onChange={onFileSelect}
                type="file"
                className="form-control"
                mutiple
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Movie Title</label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter movie title"
              ></input>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
