import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppText } from "components/atoms";
import { GettingStartedForm } from "components/molecules";
import Accordion from "./Accordion";

const useStyles = makeStyles((theme) => {
  const isSmallDevices = theme.breakpoints.down("md");
  return {
    faqContainer: {
      padding: "70px 45px",
      backgroundColor: "black",
      textAlign: "center",
      borderBottom: "8px solid #222",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      [isSmallDevices]: {
        padding: "50px 0",
      },
    },
    headerText: {
      [isSmallDevices]: {
        fontSize: "1.625rem",
        padding: "0 5%",
        marginBottom: ".5rem",
      },
    },
    formContainer: {
      [isSmallDevices]: {
        padding: "0 5%",
      },
    },
  };
});

const Faq: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.faqContainer}>
      <AppText customClassName={styles.headerText} variant="h1">
        Frequently Asked Questions
      </AppText>
      <Accordion />
      <div className={styles.formContainer}>
        <GettingStartedForm />
      </div>
    </div>
  );
};

export default Faq;
