// import PropTypes from "prop-types";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import S from "../DarkMode.module.scss";

// @ver1.
// 3. 받아온 prop을 선언해주고, Header 컴포넌트와 Footer에는 theme만, Content에는 전달받은 state를 모두 prop으로 보내줍니다.

// @ver2.
// 5. 기존에 전달받은 prop을 모두 지워줍니다.
const Page = () => {
  return (
    <div className={S.page}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

// ver1의 PropTypes
// Page.propTypes = {
//   theme: PropTypes.bool.isRequired,
//   setTheme: PropTypes.func.isRequired,
// };

export default Page;
