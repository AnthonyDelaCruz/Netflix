import React from "react";
import { HomeBanner, PanelContainer, Faq } from "components/organisms";
import CustomThemeProvider from "theme";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <HomeBanner />
        <PanelContainer />
        <Faq />
      </CustomThemeProvider>
    </div>
  );
}

export default App;
