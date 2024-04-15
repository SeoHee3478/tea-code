import { useState } from "react";
import S from "./index.module.scss";

const ColorPicker = () => {
  const [previewImage, setPreviewImage] = useState("");

  const handleInputImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }

    // 메모리 누수 방지를 위해 파일을 선택할 때마다 이전 URL 해제
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
  };

  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>Color Picker!</h1>
      <div className={S.pickerWrapper}>
        <div className={S.leftColumn}>
          <div className={S.formSection}>
            <p>1. 이미지를 선택</p>
            <label htmlFor="image"></label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleInputImage}
            />
          </div>

          <div className={S.formSection}>
            <p>2. 컬러를 선택</p>
            <button className={S.openPickerButton}>Open ColorPicker</button>
          </div>

          <div className={S.formSection}>
            <p>3. 선택한 컬러</p>
            <button className={S.selectedColor}>
              <span>colorCode</span>
            </button>
          </div>
        </div>

        <div className={S.rightColumn}>
          {previewImage ? (
            <>
              <img src={previewImage} alt="image" />
              <div style={{ backgroundImage: `url(${previewImage})` }}></div>
            </>
          ) : (
            <p>No Image</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
