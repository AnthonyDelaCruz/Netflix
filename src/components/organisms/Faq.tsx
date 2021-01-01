import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppText } from "components/atoms";
import { GettingStartedForm } from "components/molecules";
import Accordion from "./Accordion";

const useStyles = makeStyles({
  faqContainer: {
    padding: "70px 45px",
    backgroundColor: "black",
    textAlign: "center",
    borderBottom: "8px solid #222",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Faq: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.faqContainer}>
      <AppText variant="h1">Frequently Asked Questions</AppText>
      <Accordion />
      <GettingStartedForm />
    </div>
  );
};

export default Faq;
