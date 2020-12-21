import React from "react";

import { Panel } from "components/molecules";
import panelContentJson from "constants/panelContent.json";

const PanelContainer: React.FC = () => {
  const renderContent = () => {
    return panelContentJson.map((item) => <Panel {...item} />);
  };
  return <div style={{ background: "#000000" }}>{renderContent()}</div>;
};

export default PanelContainer;
