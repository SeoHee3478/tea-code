import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import S from "../../DarkMode/DarkMode.module.scss";

const Content = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`${S.content} ${theme ? S.dark : S.light}`}>
      <h1 className={S.title}>Just Do It! 🏃‍♀️</h1>
      <div className={S.switch}>
        <input
          type="checkbox"
          id="checkbox1"
          className={S.themeInput}
          onChange={handleToggleTheme}
        />
        <label className={S.themeLabel} htmlFor="checkbox1"></label>
      </div>
    </div>
  );
};

export default Content;
