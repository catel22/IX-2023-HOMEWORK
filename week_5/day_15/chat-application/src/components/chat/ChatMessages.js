import React from "react";
import { useState, useEffect } from "react";
// need to import messageservice
import MessageService from "../../services/messageservice.js";
import Button from "../common/Button";
import { Message } from "../../models/Message.js";

export default function ChatMessages({ user, chat }) {
  const [messages, setMessages] = useState([]);
  // initialize as empty array
  const [message, setMessage] = useState("");
  // initialize as empty string
  const [sending, setSending] = useState(false);
  // initialize as false

  // listen to chat being passed through
  // if we have chat available, listen to MessageService and subscribe to chats
  useEffect(() => {
    let unsubscribe = null;

    if (chat) {
      unsubscribe = MessageService.subscribeToChatMessages(chat, (messages) => {
        // handle messages
        setMessages(messages);
      });
    }

    // unmount from component
    // if subscription available, unsubscribe
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [chat]);

  // asynchronous because creates a message on firebase
  async function onMessageFormSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await MessageService.createMessage(
        new Message({
          // call the get time js function
          id: new Date().getTime() + "",
          message: message,
          chatId: chat.id,
          // uid means unique identifier
          fromId: user.uid,
        })
      );
      setMessage("");
    } catch (err) {
      console.log(err);
    }
    setSending(false);
  }

  // return a div for each message
  // if my message, on right
  // else, put on left
  return (
    <div className="messages-card">
      <div className="messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.fromId !== user.uid ? "message-right" : "message-left"
            }
          >
            <div className="single-message">{message.message}</div>
          </div>
        ))}
      </div>

      <form className="message-form" onSubmit={onMessageFormSubmit}>
        <div className="input-group mb-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="form-control"
          />
          <Button
            loading={sending}
            variant=""
            className="btn-outline-secondary"
            type="submit"
          >
            +
          </Button>
        </div>
      </form>
    </div>
  );
}
