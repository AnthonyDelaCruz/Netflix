import React from "react";
import { HomeBanner } from "components/organisms";
import CustomThemeProvider from "theme";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <HomeBanner />
      </CustomThemeProvider>
    </div>
  );
}

export default App;
