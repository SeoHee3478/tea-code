import PropTypes from "prop-types";
import S from "./ChatRoom.module.scss";
import { useEffect, useRef, useState } from "react";

const ChatRoom = ({ title, handleChatData, chatList }) => {
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const scrollHeight = chatContainerRef.current.scrollHeight;
    const height = chatContainerRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;

    chatContainerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }, [chatList]);

  const onClickSendBtn = () => {
    if (inputValue !== "") {
      const data = { chatRoomName: title, content: inputValue };
      handleChatData(data);
      setInputValue("");
    }
  };

  return (
    <>
      <div id="chatApp">
        <div className={S.chatBox} id="chatBox">
          <div className={S.card}>
            <header className={`${S.cardHeader} ${S.headerTitle}`}>
              <p className={S.cardHeaderTitle}>&nbsp;{title}</p>
            </header>

            <div id="chatbox-area">
              <div
                className={`${S.cardContent} ${S.chatContent}`}
                ref={chatContainerRef}
              >
                <div className={S.content}>
                  {chatList?.map((chat, i) => (
                    <div
                      className={`${S.chatMessageGroup} ${
                        title === chat.chatRoomName ? S.writerUser : ""
                      }`}
                      key={i}
                    >
                      <div className={S.chatMessages}>
                        <div className={S.message}>{chat.content}</div>
                        <div className={S.from}>{chat.chatRoomName}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <footer className={S.cardFooter} id="chatBox-textbox">
                <div style={{ width: "70%" }}>
                  <input
                    id="chatTextarea"
                    value={inputValue}
                    className={S.chatTextarea}
                    placeholder="대화 내용을 입력해주세요."
                    onChange={(e) => setInputValue(e.target.value)}
                  ></input>
                </div>
                <div
                  className={`${S.hasTextCentered}`}
                  style={{ width: "37%" }}
                >
                  <div className={S.chatSendBtn} onClick={onClickSendBtn}>
                    send
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatRoom.propTypes = {
  title: PropTypes.string.isRequired,
  handleChatData: PropTypes.func.isRequired,
  chatList: PropTypes.array.isRequired,
};

export default ChatRoom;
