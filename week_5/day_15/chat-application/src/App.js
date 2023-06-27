import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

// import the bootstrap items
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import components
import Navbar from './components/common/Navbar';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import Spinner from './components/common/Spinner';
import RequireAuth from './components/common/RequireAuth';
import ChatsPage from './components/chat/ChatsPage';

function App() {
  const [user, setUser] = useState(null);
  const [isUserSet, setIsUserSet] = useState(false);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const usub = onAuthStateChanged(
      auth,
      // takes in a callback when the user changes
      // gives you the user state
      // ie: call this function when the user changes
      (user) => {
        setUser(user);
        setIsUserSet(true);
      }
    );

    // unsubscribe on componentDidUnmount
    return () => usub();
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserSet ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <ChatsPage user={user}></ChatsPage>
              </RequireAuth>
            }
          ></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      ) : (
        <div className="text-center m-5">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;