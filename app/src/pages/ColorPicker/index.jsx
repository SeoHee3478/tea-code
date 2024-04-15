import { useState } from "react";
import S from "./index.module.scss";

const ColorPicker = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [colorCode, setColorCode] = useState("");

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

  const handleColorPickerInput = (e) => {
    const inputValue = e.target.value;
    setColorCode(inputValue);
  };

  const handleColorPicker = async () => {
    // eslint-disable-next-line no-undef
    const eyeDropper = new EyeDropper();

    try {
      const result = await eyeDropper.open();
      const colorHexValue = result.sRGBHex;
      setColorCode(colorHexValue);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert(`${code} 복사 성공!`);
    } catch (error) {
      console.error(error);
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
            <div className={S.inputWrapper}>
              <label htmlFor="colorPick" className={S.openPickerInputLabel}>
                Open ColorPicker(input)
              </label>
              <input
                type="color"
                id="colorPick"
                className={S.openPickerInput}
                onChange={handleColorPickerInput}
              />
            </div>
            <div>
              <button
                className={S.openPickerButton}
                onClick={handleColorPicker}
              >
                Open ColorPicker(EyeDropper API)
              </button>
            </div>
          </div>

          <div className={S.formSection}>
            <p>3. 선택한 컬러</p>
            {colorCode ? (
              <>
                <button
                  className={S.selectedColor}
                  style={{ backgroundColor: `${colorCode}` }}
                  onClick={() => handleCopyCode(colorCode)}
                >
                  <span>{colorCode}</span>
                </button>
              </>
            ) : (
              <p className={S.noticeText}>이미지와 컬러를 선택해주세요!</p>
            )}
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
