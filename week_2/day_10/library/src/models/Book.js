// Constructor takes arguments we want to define our task

export class Book {
  constructor(id, title, author, isbn, userId) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.userId = userId;
  }

  // to firebase helper
  // return what we want to save to firebase
  toJson() {
    return {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      userId: this.userId,
    };
  }

  // from firebase helper
  // static function: accept doc we loop through and pull out data
  // return individual book when we call from firebase
  static fromFirebase(doc) {
    const data = doc.data();
    return new Book(
        doc.id,
        data.title,
        data.author,
        data.isbn,
        data.userId
    );
  }
}
