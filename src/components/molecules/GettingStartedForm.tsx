import React, { FC } from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

import { AppInput, AppButton, AppText } from "components/atoms";

import "styles/molecules/GettingStartedForm.scss";

const useStyles = makeStyles((theme) => {
  const isSmallDevices = theme.breakpoints.down("md");
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    formContainer: {
      display: "flex",
      width: "100%",
      [isSmallDevices]: {
        flexDirection: "column",
      },
    },
    input: {
      minWidth: "450px",
      [isSmallDevices]: {
        width: "100%",
        minWidth: "unset",
        margin: "10px auto",
      },
      // border: "1px solid green",
    },
    button: {
      height: "60px",
      fontSize: "1.3rem",
      borderRadius: 0,
      [isSmallDevices]: {
        height: "40px",
        fontSize: "1rem",
        alignSelf: "center",
      },
    },
    text: {
      margin: "20px 0 10px",
      [isSmallDevices]: {
        margin: "0 0 10px",
      },
    },
    icon: {
      fontSize: "1.625rem",
      color: "#ffffff",
    },
  };
});

const GettingStartedForm: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <AppText>
          Ready to watch? Enter your email to create or restart your membership.
        </AppText>
      </div>
      <div className={styles.formContainer}>
        <AppInput customStyle={styles.input} placeholder="Email address" />
        <AppButton
          customStyle={styles.button}
          endIcon={<ChevronRight className={styles.icon} />}
        >
          GET STARTED
        </AppButton>
      </div>
    </div>
  );
};

export default GettingStartedForm;
