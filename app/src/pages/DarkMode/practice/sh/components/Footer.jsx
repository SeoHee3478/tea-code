import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import S from "../DarkMode.module.scss";

// @ver1.
// 6. 받아온 prop을 선언해주고, content와 동일하게 css를 동적으로 설정해줍니다.

// @ver2.
// 11. content에서 했던 순서를 그대로 진행해줍니다.
const Footer = () => {
  const { theme } = useContext(ThemeModeContext);
  return (
    <footer className={`${S.footer} ${theme ? S.dark : S.light} `}>
      <span className={S.name}>티코드는 민경, 승미, 서희가 함께합니다.</span>
    </footer>
  );
};

// ver1의 PropTypes
Footer.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Footer;
