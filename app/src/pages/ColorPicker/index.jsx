import { useState } from "react";
import S from "./index.module.scss";

const ColorPicker = () => {
  // 1-1. 미리보기 이미지 정보를 저장할 상태값 추가(previewImage)
  const [previewImage, setPreviewImage] = useState("");

  // 2-1. 선택한 컬러 코드를 저장할 상태값 추가(colorCode)
  const [colorCode, setColorCode] = useState("");

  // 1. 이미지를 저장하는 함수 추가
  const handleInputImage = () => {
    // 선택한 이미지 정보 저장
    // 메모리 누수 방지를 위해 파일을 선택할 때마다 이전 URL 해제
  };

  // 2. ColorPicker 기능을 구현하는 함수 추가
  // <input type = "color">
  const handleColorPickerInput = () => {
    // 선택한 컬러 정보 저장
  };

  // EyeDropper()
  // 객체 생성 : new EyeDropper()
  // open() 메서드로 sRGBHex 형식의 컬러값 가져오기
  const handleColorPicker = async () => {
    // eslint-disable-next-line no-undef

    // EyeDropper() 객체 생성

    try {
      // 컬러값 받아와서 저장
    } catch (error) {
      console.error(error);
    }
  };

  // 3. 저장된 컬러값을 복사하는 함수 추가
  // navigator.clipboard.writeText(색상코드)
  const handleCopyCode = async () => {
    try {
      // 복사 기능 추가
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
              onChange={}
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
              />
            </div>
            <div>
              <button
                className={S.openPickerButton}
                onClick={}
              >
                Open ColorPicker(EyeDropper API)
              </button>
            </div>
          </div>

          <div className={S.formSection}>
            <p>3. 선택한 컬러</p>
            {/** 렌더링 조건 */ ? (
              <>
                <button
                  className={S.selectedColor}
                  style={{ backgroundColor: `${}` }}
                  onClick={}
                >
                  <span>{}</span>
                </button>
              </>
            ) : (
              <p className={S.noticeText}>이미지와 컬러를 선택해주세요!</p>
            )}
          </div>
        </div>

        <div className={S.rightColumn}>
          {/** 렌더링 조건 */ ? (
            <>
              <img src={} alt="image" />
              <div style={{ backgroundImage: `url(${})` }}></div>
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
