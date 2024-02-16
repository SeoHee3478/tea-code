import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import S from "./ChatRoom.module.scss";

const ChatRoom = ({ title, chatList, handleChatList }) => {
  const [chatInput, setChatInput] = useState("");

  const handleChatData = () => {
    if (chatInput) {
      handleChatList({ chatRoomName: title, content: chatInput })
      setChatInput("")
    }
  }
  const scroll = useRef();
  useEffect(() => {
    const scrollHeight = scroll.current.scrollHeight;
    const clientHeight = scroll.current.clientHeight;
    console.log(scrollHeight, clientHeight)

    const maxHeight = scrollHeight - clientHeight;
    scroll.current.scrollTop = maxHeight > 0 ? maxHeight : 0
  }, [chatList])



  return (
    <>
      <div id="chatApp">
        <div className={S.chatBox} id="chatBox">
          <div className={S.card}>
            <header className={`${S.cardHeader} ${S.headerTitle}`}>
              <p className={S.cardHeaderTitle}>&nbsp;{title}</p>
            </header>
            <div id="chatbox-area">
              <div className={`${S.cardContent} ${S.chatContent}`} ref={scroll}>
                <div className={S.content}>
                  {/* <div className={S.chatMessageGroup}>
                    <div className={S.chatMessages}>
                      <div className={S.message}>Olá meu nome é Camila</div>
                      <div className={S.from}>Hoje</div>
                    </div>
                  </div>
                  <div className={`${S.chatMessageGroup} ${S.writerUser}`}>
                    <div className={S.chatMessages}>
                      <div className={S.message}>Olá meu nome é Marinho</div>
                      <div className={S.from}>Hoje</div>
                    </div>
                  </div> */}
                  {chatList.map((chat, i) => (
                    <div className={chat.chatRoomName === title ? `${S.chatMessageGroup} ${S.writerUser}` : `${S.chatMessageGroup} `}>
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
                    value={chatInput}
                    onChange={(e) => {
                      setChatInput(e.target.value)
                    }}
                  ></input>
                </div>
                <div
                  className={`${S.hasTextCentered}`}
                  style={{ width: "37%" }}
                >
                  <div className={S.chatSendBtn} onClick={handleChatData}>send</div>
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
