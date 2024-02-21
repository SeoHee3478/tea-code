import PropTypes from "prop-types";
import S from "../DarkMode.module.scss";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";

// @ver1.
// 4. Page와 마찬가지로 받아온 prop를 선언해줍니다.
// 4-1. (css) 컬러 모드가 변경될 때마다 헤더에서도 이를 인식할 수 있도록 css를 동적으로 변경해줍니다.
// theme가 true이면 S.dark, false이면 S.light

// @ver2.
// 5. Page와 마찬가지로 기존에 받아온 prop을 지워줍니다.
// 6. context로 전달된 state를 사용하기 위해 useContext Hook을 import 해줍니다.
// 7. null값을 방지하고자 구조분해할당으로 ThemeContext를 불러옵니다.
const Header = () => {
  const { theme } = useContext(ThemeModeContext);

  return (
    <header className={`${S.header} ${theme ? S.dark : S.light}`}>
      <h1 className={S.headerTitle}>⛰️ tea-code study</h1>
    </header>
  );
};

// ver1의 PropTypes
Header.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Header;
