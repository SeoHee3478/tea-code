import PropTypes from "prop-types";
import S from "../../DarkMode/DarkMode.module.scss";

const Header = ({ theme }) => {
  return (
    <header className={`${S.header} ${theme ? S.dark : S.light}`}>
      <h1 className={S.headerTitle}>⛰️ tea-code study</h1>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Header;
