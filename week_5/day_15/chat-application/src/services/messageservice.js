import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Message } from "../models/Message";

class MessageService {
  constructor() {
    this.collection = "messages";
  }

  // Create a message
  async createMessage(message) {
    const docRef = doc(db, this.collection, message.id);
    // toJson is static function
    await setDoc(docRef, message.toJson());
  }

  // Read the message
  subscribeToChatMessages(chat, onMessageUpdate) {
    const collectionRef = collection(db, this.collection);
    // subscribe to query
    const q = query(
      collectionRef,
      // query where chat Id is equal to the chat sent through
      where("chatId", "==", chat.id)
    );

    // create array of messages
    // listen to query snapshot
    // if something changes, update array
    // fire callback function to send messages back to user
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(Message.fromFirebase(doc));
      });

      // pass array through to callback function
      onMessageUpdate(messages);
    });

    return unsubscribe;
  }
}

// example use:
// MessageService.subscribeToChatMessages(chat, (message) => {
//     console.log(message);
// })

const service = new MessageService();
export default service;
