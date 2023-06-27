export class Profile {
    // 4 separate parameters
    // constructor(id, name,  surname, imageUrl){}
    // vs 1 parameter as an object
    constructor({ id, name, surname, imageUrl }) {
      this.id = id; // this is the userId
      this.name = name;
      this.surname = surname;
      this.imageUrl = imageUrl;
    }
  
    // render as Json object
    toJson() {
      return {
        name: this.name,
        surname: this.surname,
        imageUrl: this.imageUrl,
      };
    }
  
    static fromFirebase(docSnap) {
      const data = docSnap.data();
  
      return new Profile({
        id: docSnap.id,
        name: data.name,
        surname: data.surname,
        imageUrl: data.imageUrl,
      });
  
      // return new Profile(docSnap.id, data.name, data.surname, data.imageUrl);
    }
  }