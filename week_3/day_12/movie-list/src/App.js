import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// no brackets becuase default export
import MoviesPage from "./components/MoviesPage";
import AddMoviePage from "./components/AddMoviePage";

// unlock storage on Firebase

// installations: bootstrap, react-router-dom, firebase

// folders: components, firebase, models, services

// pages: MoviesPage, AddMoviesPage
// add routing

// file service and movie service

// bootstrap-icons and react-bootstrap for modals

// delete movie and delete file capabilities
// update fetchmovies and movie grid
// add remove movie and react-bootstrap Modal

// add an image selector

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/add-movie" element={<AddMoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
