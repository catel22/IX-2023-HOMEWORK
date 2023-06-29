import React, { useState, useEffect } from "react";

import "./Chats.css";

// import services
import ProfileService from "../../services/profileservice";
import ChatService from "../../services/chatservice";

// import components
import AvailableChats from "./AvailableChats";
import ChatMessages from "./ChatMessages";
import ChatsSidebar from "./ChatsSidebar";

export default function ChatsPage({ user }) {
  // component state
  const [profiles, setProfiles] = useState([]);
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // fetchProfiles
    fetchProfiles();

    // subscribe to chats
    const unsubscribe = ChatService.subscribeToUserChats(user, (chats) => {
      // get my chats here when they are updated or changed
      setChats(chats);
    });

    // unsubscribe
    // componentWillUnmount
    return () => unsubscribe();
  }, []);

  async function fetchProfiles() {
    const profiles = await ProfileService.fetchProfiles();
    setProfiles(profiles);
  }

  return (
    <div className="container my-4">
      <h3 className="chat-header">
        <div className="profile-holder">
          {user.email}
        </div>
      </h3>
      <div className="profile-holder"></div>

      <div>
        <AvailableChats profiles={profiles} user={user} chats={chats} />
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <ChatsSidebar
            profiles={profiles}
            user={user}
            chats={chats}
            chat={chat}
            onChatSelected={(chat) => setChat(chat)}
          />
        </div>
        <div className="col-8">
          <ChatMessages user={user} chat={chat} />
        </div>
      </div>
    </div>
  );
}
