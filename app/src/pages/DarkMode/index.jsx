import { useState } from "react";
import Page from "./components/Page";

// 최상위 main.jsx 컴포넌트라고 가정합니다.
// 먼저 props state와 props로 구현하고
// 이후 contextAPI를 사용해서 props drilling를 해결해봅니다.
const DarkMode = () => {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <Page theme={theme} setTheme={setTheme} />
    </>
  );
};

export default DarkMode;
