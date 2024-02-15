import PropTypes from "prop-types";
import S from "./ChatRoom.module.scss";

const ChatRoom = () => {
  return (
    <>
      <div id="chatApp">
        <div className={S.chatBox} id="chatBox">
          <div className={S.card}>
            <header className={`${S.cardHeader} ${S.headerTitle}`}>
              <p className={S.cardHeaderTitle}>&nbsp;{"채팅방 명"}</p>
            </header>
            <div id="chatbox-area">
              <div className={`${S.cardContent} ${S.chatContent}`}>
                <div className={S.content}>
                  <div className={S.chatMessageGroup}>
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
                  </div>
                </div>
              </div>
              <footer className={S.cardFooter} id="chatBox-textbox">
                <div style={{ width: "70%" }}>
                  <input
                    id="chatTextarea"
                    className={S.chatTextarea}
                    placeholder="대화 내용을 입력해주세요."
                  ></input>
                </div>
                <div
                  className={`${S.hasTextCentered}`}
                  style={{ width: "37%" }}
                >
                  <div className={S.chatSendBtn}>send</div>
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
