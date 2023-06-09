import React from "react";
import Spinner from "./Spinner";

// Custom button component to display when there is ongoing login attempt
export default function Button({
  className,
  // React prop that brings all the children elements through
  children,
  // Prop to describe function executed on click
  onClick,
  // We can change this to a different color
  variant = "primary",
  loading = false,
  disabled = false,
  // Bring through all other props as well
  ...other
}) {
  return (
    <button
      // pass through unamed props that exist on component
      // adds unamed prop to components
      {...other}
      style={{ position: "relative" }}
      onClick={onClick}
      disabled={ disabled || loading}
      className={'btn btn-' + variant + ' ' + className}
    >
      {children}

      {loading ? (
        <div
          style={{
            position: "absolute",
            right: "2px",
            top: "2px",
            
          }}
        >
          <Spinner></Spinner>
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
