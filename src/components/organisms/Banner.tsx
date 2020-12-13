import React from "react";
import Grid from "@material-ui/core/Grid";

import { AppText } from "components/atoms";
import { GettingStartedForm, Navbar } from "components/molecules";

import "styles/organisms/Banner.scss";

const Banner: React.FC = () => {
  return (
    <div
      className="banner"
      style={{
        background: 'url("images/home-bg.jpg")',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
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
              <div className="banner-content-spacing--sm-text">
                <AppText>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </AppText>
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
