// 1. 채팅 내용을 저장할 state를 선언합니다. 데이터타입은 아래와 같습니다.

import { useState } from "react";
import ChatRoom from "./ChatRoom";

// ```js
// type chatList = {
//   chatRoomName: string,
//   content: string,
// }[];
// ```

// 2. 채팅 전송 시 chatList에 입력한 값을 저장하는 함수를 작성합니다.

// 3. ChatRoom 컴포넌트에 채팅방 제목과, 채팅 데이터, 채팅 전송시 동작할 함수 3개를 props로 넘겨줍니다.

// 4. ChatRoom 컴포넌트에서 채팅방 제목 데이터와, 채팅데이터의 chatRoomName 데이터를 사용하여, 채팅방 주인일때와 아닐때 보여질 스타일을 구분합니다.

// 5. 채팅내용을 작성하고 전송 버튼을 누를 시 동작할 기능을 구현해주세요.
//    5-1. input에 있는 값을 저장할 state를 작성해주세요.
//    5-2. handelChatData 함수를 사용해 채팅 내용을 저장해주세요.

// 6. 최신 글에 스크롤되도록 기능을 구현해주세요.
//    6-1. 최신 댓글이 무엇인지 Ref를 사용해 저장해주세요.
//    6-2. ref와 useEffect를 사용하여 chatList가 새로 업데이트될때 스크롤을 최하단으로 이동하도록 구현해주세요.

const ScrollToBottom = () => {
  const [chatList, setChatList] = useState([]);

  const handleChatData = (chatData) => {
    setChatList((state) => [...state, chatData]); // 궁금했다.
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <ChatRoom
        title={"빌게이츠"}
        chatList={chatList}
        handleChatData={handleChatData}
      />
      <ChatRoom
        title={"승미"}
        chatList={chatList}
        handleChatData={handleChatData}
      />
    </div>
  );
};

export default ScrollToBottom;
