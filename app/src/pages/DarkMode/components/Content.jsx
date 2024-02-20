import PropTypes from "prop-types";
import S from "../DarkMode.module.scss";

// @ver1.
// 5. 받아온 prop을 선언해주고, header와 동일하게 css를 동적으로 설정해줍니다.
// 5-1. input의 checkbox의 선택 유무에 따라 테마가 변경되도록 이벤트를 걸어줍니다.

// @ver2.
// 8. Header와 마찬가지로 기존에 받아온 prop을 지워줍니다.
// 9. context로 전달된 state를 사용하기 위해 useContext Hook을 import 해줍니다.
// 10. null값을 방지하고자 구조분해할당으로 ThemeContext를 불러옵니다.

// @bonus
// 1-1. localStorage 추가 로직을 완료했다면 다시 index.jsx 파일로 이동합니다.
// 4. (css) checkbox의 값이 localStorage에 저장되있던 값과 일치하게 처리해줘야 합니다.
//    (input의 checkbox 속성을 조정해주세요.)
// 고생하셨습니다🙌
const Content = () => {
  return (
    <div className={`${S.content}`}>
      <h1 className={S.title}>Just Do It! 🏃‍♀️</h1>
      <div className={S.switch}>
        <input type="checkbox" id="checkbox1" className={S.themeInput} />
        <label className={S.themeLabel} htmlFor="checkbox1"></label>
      </div>
    </div>
  );
};

// ver1의 PropTypes
Content.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Content;
