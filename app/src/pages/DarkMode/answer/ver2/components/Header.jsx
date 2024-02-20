import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import S from "../DarkMode.module.scss";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${S.header} ${theme ? S.dark : S.light}`}>
      <h1 className={S.headerTitle}>⛰️ tea-code study</h1>
    </header>
  );
};

export default Header;
