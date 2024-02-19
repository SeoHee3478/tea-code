import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
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
