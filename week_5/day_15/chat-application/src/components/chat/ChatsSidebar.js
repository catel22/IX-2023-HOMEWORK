// take in profiles, user, chats, chat

import React from "react";

export default function ChatsSidebar({
  chats,
  user,
  profiles,
  onChatSelected,
  chat: selectedChat,
}) {
  // function that returns user profile
  function getOtherUserProfile(chat) {
    const otherProfileId = chat.users.find((userId) => userId !== user.uid);
    return (profiles.find((profile) => otherProfileId === profile.id));
  }

  return (
    <div className="chats-sidebar">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="profile-row"
          onClick={() => onChatSelected(chat)}
          style={{
            cursor: "pointer",
            // if selected chat is current ID, ensure user is bold, otherwise no class
            fontWeight: selectedChat?.id === chat.id ? "bold" : "",
          }}
        >
          <div className="profile-holder">
            <img src={getOtherUserProfile(chat).imageUrl}alt='profile-icon'></img>
            <div>
              {getOtherUserProfile(chat).name} {getOtherUserProfile(chat).surname}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
