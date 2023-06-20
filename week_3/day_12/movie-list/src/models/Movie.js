class Movie {
  constructor(id, title, downloadUrl) {
    this.id = id;
    this.title = title;
    this.downloadUrl = downloadUrl;
  }

  toJson() {
    return {
      title: this.title,
      downloadUrl: this.downloadUrl,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Movie({
      id: doc.id,
      title: data.title,
      downloadUrl: data.downloadUrl,
    });
  }
}
