import React from "react";
import { AppButton } from "components/atoms";
import { HomeBanner } from "components/organisms";
import CustomThemeProvider from "theme";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <HomeBanner />
        <AppButton>123</AppButton>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
