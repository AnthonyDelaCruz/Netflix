import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import { AppButton, AppImage } from "components/atoms";

import "styles/molecules/Navbar.scss";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px 3rem 0px",
    boxShadow: "none",
  },
  logo: {
    height: "32px",
    width: "100px",
  },
});

const Navbar: React.FC = () => {
  const styles = useStyles();
  return (
    <AppBar className={styles.root} position="static">
      <AppImage
        src="/images/logo.png"
        alt="netflix logo"
        className={styles.logo}
      />
      <AppButton>Sign In</AppButton>
    </AppBar>
  );
};

export default Navbar;
