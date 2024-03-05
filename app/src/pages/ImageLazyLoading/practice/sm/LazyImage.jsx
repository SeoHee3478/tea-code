import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, height }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log("ref", entry);
      if (entry.isIntersecting) {
        imgRef.current.src = src;
        imgRef.current.onload = () => {
          setIsLoaded(true);
          observer.disconnect();
        };
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (imgRef?.current) {
      observer.observe(imgRef.current);
    }

    // observer 해지
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return isLoaded ? (
    <img className={className} alt={alt} id={src} src={src} />
  ) : (
    <img
      className={className}
      ref={imgRef}
      id={src}
      style={{ height: `${height}px`, background: "#b9d79c" }}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default LazyImage;
