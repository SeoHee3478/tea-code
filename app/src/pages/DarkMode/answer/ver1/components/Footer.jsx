import PropTypes from "prop-types";
import S from "../DarkMode.module.scss";

const Footer = ({ theme }) => {
  return (
    <footer className={`${S.footer} ${theme ? S.dark : S.light}`}>
      <span className={S.name}>티코드는 민경, 승미, 서희가 함께합니다.</span>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Footer;
