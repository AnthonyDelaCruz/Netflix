import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AccordionItem } from "components/molecules";

import faqs from "constants/faqs.json";

const useStyles = makeStyles({
  container: {
    width: "75%",
    margin: "2em auto",
  },
});

const AccordionContainer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      {faqs.map((faq) => (
        <AccordionItem key={faq.title} {...faq} />
      ))}
    </div>
  );
};

export default AccordionContainer;
