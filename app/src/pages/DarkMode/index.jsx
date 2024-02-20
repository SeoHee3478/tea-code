import { useState } from "react";

import Page from "./components/Page";

// ver2. context API 적용
const DarkMode = () => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <Page theme={theme} setTheme={setTheme} />
    </>
  );
};

export default DarkMode;
