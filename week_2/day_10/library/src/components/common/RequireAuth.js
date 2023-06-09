import React from 'react';
import { Navigate } from 'react-router-dom';

// We only want the user to see the page if they are logged in
// User curly bracket to pass through named props

// Look for user, if true then render children (Library Page)
// Otherwise navigate to login page

export default function RequireAuth({user, children}) {
  return user ? children : <Navigate to='/login' replace />;
}
