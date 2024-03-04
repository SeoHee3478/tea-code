import { images } from "./imageLinks";
import S from "./index.module.scss";

const ImageLazyLoading = () => {
  return (
    <>
      <p>ImageLazyLoading</p>
      <div className={S.imageContainer}>
        {images.map(({ src, alt }) => (
          <img className={S.image} src={src} alt={alt} key={src} />
        ))}
      </div>
    </>
  );
};

export default ImageLazyLoading;
