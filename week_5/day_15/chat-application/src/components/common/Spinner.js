import React from 'react';
import './Spinner.css';

export default function Spinner({ variant = 'dark', extraClass }) {
  // note that the span item is for visually assistive technology users
  return (
    <div
      className={'spinner-border text-' + variant + ' ' + extraClass}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}