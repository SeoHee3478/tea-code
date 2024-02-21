import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import S from "../../DarkMode/DarkMode.module.scss";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${S.footer} ${theme ? S.dark : S.light}`}>
      <span className={S.name}>티코드는 민경, 승미, 서희가 함께합니다.</span>
    </footer>
  );
};

export default Footer;
