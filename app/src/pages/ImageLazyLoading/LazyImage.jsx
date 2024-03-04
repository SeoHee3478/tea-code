import PropTypes from "prop-types";

const LazyImage = ({ src, alt, className }) => {
  return <img className={className} alt={alt} id={src} src={src} />;
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default LazyImage;
