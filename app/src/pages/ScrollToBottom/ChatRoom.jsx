import PropTypes from "prop-types";
import S from "./ChatRoom.module.scss";
import { useEffect, useRef, useState } from "react";

const ChatRoom = ({ title, handleChatList, chatList }) => {
  const [inputContent, setInputContent] = useState("");
  const chatContentRef = useRef();

  useEffect(() => {
    const scrollHeight = chatContentRef.current.scrollHeight;
    const clientHeight = chatContentRef.current.clientHeight;
    const maxScroll = scrollHeight - clientHeight;

    chatContentRef.current.scrollTop = maxScroll > 0 ? maxScroll : 0;
  }, [chatList]);

  const onClickSend = (e) => {
    e.preventDefault();
    if (inputContent) {
      handleChatList({ chatRoomName: title, content: inputContent });
      setInputContent("");
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
                ref={chatContentRef}
              >
                <div className={S.content}>
                  {chatList?.map((chat, i) => (
                    <div
                      className={
                        chat.chatRoomName === title
                          ? `${S.chatMessageGroup} ${S.writerUser}`
                          : `${S.chatMessageGroup}`
                      }
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
                    className={S.chatTextarea}
                    placeholder="대화 내용을 입력해주세요."
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                  ></input>
                </div>
                <div
                  className={`${S.hasTextCentered}`}
                  style={{ width: "37%" }}
                >
                  <div className={S.chatSendBtn} onClick={onClickSend}>
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
  handleChatList: PropTypes.func.isRequired,
  chatList: PropTypes.array.isRequired,
};

export default ChatRoom;
