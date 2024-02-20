import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import S from "../../DarkMode/DarkMode.module.scss";

const Page = () => {
  return (
    <div className={S.page}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
