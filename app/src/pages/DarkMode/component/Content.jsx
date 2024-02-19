import PropTypes from "prop-types";
import S from "../../DarkMode/DarkMode.module.scss";

const Content = ({ theme, setTheme }) => {
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

Content.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Content;
