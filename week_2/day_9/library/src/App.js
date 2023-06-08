import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// Do not need brackets for export default in book.js
// Import react hooks
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";

// Page imports
import LibraryPage from "./components/library/LibraryPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Navbar from "./components/common/Navbar";

function App() {
  // set user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<LibraryPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
