import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Chat } from "../models/Chat";

class ChatService {
  constructor() {
    this.collection = "chats";
  }

  // CREATE
  async createChat(chat) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, chat.toJson());
    chat.id = docRef.id;
    return chat;
  }

  // Update in realtime
  subscribeToUserChats(user, onChatsUpdate) {
    // get reference to collection
    const collectionRef = collection(db, this.collection);
    // fetch all items in collection where chats associated with appropriate user
    const q = new query(
      collectionRef,
      where("users", "array-contains", user.uid)
    );

    // shut off connection to data
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        chats.push(Chat.fromFirebase(doc)); // pass in doc
      });
      onChatsUpdate(chats);
    });
    return unsubscribe;
  }
}

const service = new ChatService();
export default service;
