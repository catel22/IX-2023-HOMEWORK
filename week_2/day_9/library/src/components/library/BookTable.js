import React from 'react'

export default function BookTable(props) {
  return (
    <div>
        <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.books.map((book) => {
            return (
              <tr key={book.id}>
                <td className="fst-italic">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    className="btn btn-outline-danger bn-sm me-1"
                    onClick={() => props.onBookRemoved(book)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-warning bn-sm ms-1"
                    onClick={() => props.onBookEdit(book)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}