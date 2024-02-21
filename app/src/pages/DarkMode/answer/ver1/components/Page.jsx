import PropTypes from "prop-types";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import S from "../DarkMode.module.scss";

const Page = ({ theme, setTheme }) => {
  return (
    <div className={S.page}>
      <Header theme={theme} />
      <Content theme={theme} setTheme={setTheme} />
      <Footer theme={theme} />
    </div>
  );
};

Page.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Page;
