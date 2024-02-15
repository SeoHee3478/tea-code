import { useState } from "react";
import ChatRoom from "./ChatRoom";

const ScrollToBottom = () => {
  const [chatList, setChatList] = useState([]);

  const handleChatData = (chatData) => {
    setChatList((state) => [...state, chatData]);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <ChatRoom
        title={"채팅방 1"}
        handleChatData={handleChatData}
        chatList={chatList}
      />
      <ChatRoom
        title={"채팅방 2"}
        handleChatData={handleChatData}
        chatList={chatList}
      />
    </div>
  );
};

export default ScrollToBottom;
