import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Do not need brackets for export default in book.js
// Import react hooks
// Use debugger in chrome
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";

// Page imports
import LibraryPage from "./components/library/LibraryPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Navbar from "./components/common/Navbar";
import RequireAuth from "./components/common/RequireAuth";
import Spinner from "./components/common/Spinner";

function App() {
  // set user
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      //user has been set
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <LibraryPage user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      ) : (
        <div className='mt-5 text-center'>
          <Spinner></Spinner>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
