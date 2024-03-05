import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRef } from "react";

const LazyImage = ({ src, alt, className, height }) => {

  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          imgRef.current.onload = () => {
            setIsLoaded(true);
            observer.disconnect();
          };
        }
      })
    });

    if (imgRef?.current) {
      observer.observe(imgRef.current)
    }

    return () => { observer.disconnect(); }
  }, [src])

  console.log(height)
  return (
    isLoaded ? (<img className={className} alt={alt} id={src} src={src} />) : (<img className={className} id={src} ref={imgRef} style={{ height: `500px`, backgroundColor: 'red' }} />)

  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default LazyImage;
