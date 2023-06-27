export class Message{
    // is he passing into constructor as object?
    constructor({id, message, chatId, fromId}){
        this.id = id;
        this.message = message;
        // identification of chat
        this.chatId = chatId;

        // user who sent message
        this.fromId = fromId;
    }

    // create a Json object
    // custom for this class
    toJson(){
        return {
            message: this.message,
            chatId: this.chatId,
            fromId: this.fromId,
        };
    }

    static fromFirebase(docSnap) {
        const data = docSnap.data();
    
        return new Message({
          // correctly return from firebase
          id: docSnap.id,
          message: data.message,
          chatId: data.chatId,
          fromId: data.fromId,
        });
      }
}

// static method available on class itself