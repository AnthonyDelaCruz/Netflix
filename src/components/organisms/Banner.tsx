import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { AppText } from "components/atoms";
import { GettingStartedForm, Navbar } from "components/molecules";

import "styles/organisms/Banner.scss";

const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    [theme.breakpoints.down("md")]: {
      margin: "0 5%",
    },
  },
}));

const Banner: React.FC = () => {
  const styles = useStyles();
  return (
    <div
      className="banner"
      style={{
        background: 'url("images/home-bg.jpg")',
      }}
    >
      <Grid container>
        <Grid item xs={12} className={styles.navBarContainer}>
          <Navbar />
        </Grid>
        <Grid className="banner-content" item xs={12}>
          <div className="banner-content-container">
            <>
              <div className="banner-content-spacing">
                <AppText variant="h1">Thousands of TV shoes & movies.</AppText>
                <AppText variant="h1">Entertainment guaranteed.</AppText>
                <div className="banner-content-spacing--md-text">
                  <AppText variant="h2">
                    You'll love Netflix! If you don't, cancel within 21 days for
                    a refund.
                  </AppText>
                </div>
              </div>
              <GettingStartedForm />
            </>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
