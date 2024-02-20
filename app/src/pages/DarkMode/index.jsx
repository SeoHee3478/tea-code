import { useState } from "react";
import { ThemeContext } from "./context/themeContext";
import PropTypes from "prop-types";
import Page from "./components/Page";

// ver2. context API 적용
const DarkMode = () => {
  const [theme, setTheme] = useState(false);

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
