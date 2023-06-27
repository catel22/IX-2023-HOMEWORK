export class Chat {
    constructor({ id, users }) {
      this.id = id;
      // users is an array of users involved in the Chat
      this.users = users;
    }
    
    // render as JSON object
    toJson() {
      return {
        users: this.users,
      };
    }
  
    // accessible by class as a whole
    // not accessible by instances of class
    // cannot access specific properties of class
    static fromFirebase(docSnap) {
      const data = docSnap.data();
  
      return new Chat({
        id: docSnap.id,
        users: data.users,
      });
    }
  }