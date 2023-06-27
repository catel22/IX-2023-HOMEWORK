import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ user, children }) {
    // if user is truthy, then child elements will be rendered
    // otherwise, navigate component to login is rendered
  return user ? children : <Navigate to="/login" replace />;
}