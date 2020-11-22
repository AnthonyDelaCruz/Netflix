import React from "react";
import Grid from "@material-ui/core/Grid";

import { AppInput, AppText, AppButton } from "components/atoms";

const Banner: React.FC = () => {
  return (
    <div
      style={{
        background: 'url("images/home-bg.jpg")',
        minHeight: "100vh",
      }}
    >
      <Grid direction="column">
        <Grid item xs={12}>
          <AppText variant="h1">Thousands of TV shoes & movies.</AppText>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ padding: "75px 0", maxWidth: "950px", margin: "0 auto" }}
          >
            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              <AppText
                variant="h1"
                style={{ maxWidth: "640px", margin: "0 auto" }}
              >
                Thousands of TV shows & movies.
              </AppText>
              <AppText
                variant="h1"
                style={{ maxWidth: "640px", margin: "0 auto" }}
              >
                Entertainment guaranteed.
              </AppText>
              <div style={{ maxWidth: "640px", margin: "0 auto" }}>
                <AppText variant="h2">
                  You'll love Netflix! If you don't, cancel within 21 days for a
                  refund.
                </AppText>
              </div>
              <AppText>
                Ready to watch? Enter your email to create or restart your
                membership.
              </AppText>
              <AppInput label="Email address" />
              <AppButton>GET STARTED</AppButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
