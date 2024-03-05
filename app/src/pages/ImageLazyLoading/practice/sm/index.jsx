import LazyImage from "./LazyImage";
import { images } from "./imageLinks";
import S from "./index.module.scss";

const ImageLazyLoading = () => {
  return (
    <>
      <div className={S.imageContainer}>
        {images.map(({ src, alt, height }) => (
          <LazyImage
            className={S.image}
            src={src}
            alt={alt}
            key={src}
            height={height}
          />
        ))}
      </div>
    </>
  );
};

export default ImageLazyLoading;
