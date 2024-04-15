import S from "./index.module.scss";

const ColorPicker = () => {
  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>Color Picker!</h1>
      <div className={S.pickerWrapper}>
        <div className={S.leftColumn}>
          <div className={S.formSection}>
            <p>1. 이미지를 선택</p>
            <label htmlFor="image"></label>
            <input type="file" id="image" accept="image/*" />
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

        <div className={S.rightColumn}></div>
      </div>
    </div>
  );
};

export default ColorPicker;
