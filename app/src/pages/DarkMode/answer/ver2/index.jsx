import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import PropTypes from "prop-types";
import Page from "./components/Page";

function initStoreTheme() {
  const isThemeDark = JSON.parse(localStorage.getItem("theme"));
  return isThemeDark ? isThemeDark : false;
}

// ver2. context API 적용
const DarkMode = () => {
  const [theme, setTheme] = useState(initStoreTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
};

DarkMode.propTypes = {
  theme: PropTypes.bool.isRequired,
};

DarkMode.defaultProps = {
  theme: false,
};

export default DarkMode;
