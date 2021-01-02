import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cn from "classnames";

import { AppText } from "components/atoms";

const FOOTER_TEXT_COLOR = "#757575";

const useStyles = makeStyles({
  container: {
    background: "#000000",
  },
  footerContent: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "70px 45px",
  },
  text: {
    color: FOOTER_TEXT_COLOR,
    fontSize: "1em",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  textSmall: {
    fontSize: "13px",
    marginBottom: "16px",
  },
  mainFooterText: {
    marginBottom: "30px",
  },
  footerCountry: {
    marginTop: "30px",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <AppText customClassName={cn(styles.text, styles.mainFooterText)}>
          Questions? Contact us.
        </AppText>
        <Grid container justify="space-between">
          <Grid item>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              FAQ
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Investor Relations
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Ways to Watch
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Corporate Information
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Netflix Orignials
            </AppText>
          </Grid>
          <Grid item>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Help Center
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Jobs
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Terms of Use
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Contact Us
            </AppText>
          </Grid>
          <Grid item>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Account
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Redeem Gift Cards
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Privacy
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Speed Test
            </AppText>
          </Grid>
          <Grid item>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Media Center
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Bug Gift Cards
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Cookie Preferences
            </AppText>
            <AppText customClassName={cn(styles.text, styles.textSmall)}>
              Legal Notices
            </AppText>
          </Grid>
        </Grid>
        <AppText
          customClassName={cn(
            styles.text,
            styles.textSmall,
            styles.footerCountry
          )}
        >
          Netflix Philippines
        </AppText>
      </div>
    </div>
  );
};

export default Footer;
