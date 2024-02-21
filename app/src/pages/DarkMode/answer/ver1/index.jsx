import { useState } from "react";

import Page from "./ver1/components/Page";

const DarkMode = () => {
  const [theme, setTheme] = useState(false);

  return <Page theme={theme} setTheme={setTheme} />;
};

export default DarkMode;
