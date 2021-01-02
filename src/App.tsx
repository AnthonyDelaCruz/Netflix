import React from "react";
import { Footer } from "components/molecules";
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
        <Footer />
      </CustomThemeProvider>
    </div>
  );
}

export default App;
