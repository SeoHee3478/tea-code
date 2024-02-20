import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import S from "../DarkMode.module.scss";

const Content = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`${S.content} ${theme ? S.dark : S.light}`}>
      <h1 className={S.title}>Just Do It! 🏃‍♀️</h1>
      <div className={S.switch}>
        <input
          type="checkbox"
          id="checkbox1"
          checked={theme}
          className={S.themeInput}
          onChange={handleToggleTheme}
        />
        <label className={S.themeLabel} htmlFor="checkbox1"></label>
      </div>
    </div>
  );
};

export default Content;
