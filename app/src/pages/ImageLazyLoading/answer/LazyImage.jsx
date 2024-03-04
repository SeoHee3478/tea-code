import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            imgRef.current.onload = () => {
              setIsLoaded(true);
              observer.disconnect();
            };
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef?.current) {
      observer.observe(imgRef.current);
    }

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
      style={{
        height: `${height}px`,
        backgroundColor: "#b9d79c",
      }}
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
