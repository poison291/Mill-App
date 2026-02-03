import React from 'react';
import { useState } from 'react';

function ChatWindow() {
  const [chats, setChats] = useState([])
  const [activeChatId, setActiveChatId] = useState(null)
  const [input, setInput] = useState("")
  
  const activeChat = chats.find(chat => chat.id === activeChatId)
  console.log(activeChat);
  
  // New Chat creating Function
  function handleNewChat(){
    const newChat = { id: Date.now(), message: [] } // Generate chat id using timestamp 
    setChats(prev => [...prev, newChat]);
    setActiveChatId(newChat.id)
  }
  
  return (
    <div>
      Test
    </div>
  );
}

export default ChatWindow;

