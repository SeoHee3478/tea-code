import PropTypes from "prop-types";
import S from "./ChatRoom.module.scss";
import { useEffect, useRef, useState } from "react";

const ChatRoom = ({ title, chatList, handleChatData }) => {
  const [inputContent, setInputContent] = useState("");
  const chatContentRef = useRef();

  const onClickSend = (e) => {
    e.preventDefault();

    if (inputContent) {
      handleChatData({ chatRoomName: title, content: inputContent });
      setInputContent("");
    }
  };

  useEffect(() => {
    const scrollHeight = chatContentRef.current.scrollHeight;
    const clientHeight = chatContentRef.current.clientHeight;

    chatContentRef.current.scrollTop =
      scrollHeight - clientHeight > 0 ? scrollHeight - clientHeight : 0;
  }, [chatList]);

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
                  {chatList.map((list, i) => (
                    <div
                      key={i}
                      className={
                        list.chatRoomName === title
                          ? `${S.chatMessageGroup} ${S.writerUser}`
                          : `${S.chatMessageGroup} `
                      }
                    >
                      <div className={S.chatMessages}>
                        <div className={S.message}>{list.content}</div>
                        <div className={S.from}>{list.chatRoomName}</div>
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
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                    placeholder="대화 내용을 입력해주세요."
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
  handleChatData: PropTypes.func.isRequired,
  chatList: PropTypes.array.isRequired,
};

export default ChatRoom;
