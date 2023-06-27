// accepting user, profiles, and chats
// remove available chat from state

import React from "react";

import ChatService from "../../services/chatservice";
import { Chat } from "../../models/Chat";
import Button from "../common/Button";

// QUESTION: why passed in with curly braces?
export default function AvailableChats({ user, profiles, chats }) {
  // inside component, prepare functions:

  // get available profiles
  function getAvailableProfiles() {
    return profiles
      .filter((profile) => {
        return profile.id !== user.uid; // get ride of user logged in
      })
      .filter((profile) => {
        return !chats.find((chat) => chat.users.includes(profile.id));
      }); // filter out profiles that have chat created
    // if no chats already created, two available chats
    // if one already created, thebn one available chat
  }

  // create new chat with desired user
  // async function becuase chatService communicates with firebase
  // accept profile as argument
  async function createChatWith(profile) {
    // must be await
    // create new chat with curly braces
    // id automatically assigned by Firebase
    // only need to pass through profile
    await ChatService.createChat(
      new Chat({
        // chat between person is logged in
        // and person we clicked on for available chats
        users: [user.uid, profile.id],
      })
    );
  }

  return (
    <div>
      {getAvailableProfiles().map((profile) => (
        <div key={profile.id} className='profile-row'>
          <div className='profile-holder'>
            <img src={profile.imageUrl} alt="profile"></img>

            <div className="ms-3">
              {profile.name} {profile.surname}
            </div>
          </div>

          <div>
            <Button onClick={() => createChatWith(profile)}>+</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
