import React from "react";
import { useRef, useState } from "react";

export default function ImageSelector({ title, onFileChange }) {
  // persists values between renders
  // selecting file does not re-render page like a useState/useEffect
  // updating something in UI without complete rebuild
  const inputRef = useRef(null);
  // How useRef stores value: { current: <value> }
  // Same as doc.querySelector for input field

  // Var for file
  const [fileContent, setFileContent] = useState[""];

  function onFileSelected(event) {
    let file = null;
    //check whether user has selected a file
    if (event.target.files.length) {
      file = event.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (res) => {
        setFileContent(res.target.result);
      };
      fileReader.readAsDataURL(file);
    }

    onFileChange(file);
  }

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={onFileSelected}
      ></input>
      {
        // if there is file content, show div
        fileContent ? (
          <div className="text-center mb-3">
            <img
              alt="Movie Image"
              style={{ width: "200px", height: "250px", objectFit: "cover" }}
              src={fileContent}
            ></img>
          </div>
        ) : (
          <></>
        )
      }
      <div className="text-center">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            console.log(inputRef.current);
            // As if we are clicking choose file input
            // Do something when input changes
            inputRef.current.click();
          }}
        >
          Select Image
        </button>
      </div>
    </div>
  );
}
