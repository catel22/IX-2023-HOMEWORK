import React from "react";

export default function BookTable(props) {
  return (
    <div>
      <table class="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {
            props.books.map((book) => {
              return (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <button
                      className="btn btn-danger bn-sm me-1"
                      onClick={() => props.onBookDelete(book)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning bn-sm mb-1"
                      onClick={() => props.onBookEdit(book)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            }) // use higher order map function on array, loop through array of books
          }
        </tbody>
      </table>
    </div>
  );
}
