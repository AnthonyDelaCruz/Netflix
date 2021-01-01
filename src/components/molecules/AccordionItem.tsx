import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

import { AppText } from "components/atoms";

type Props = {
  title: string;
  content: string;
  ariaControl: string;
  id: string;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#303030",
    marginBottom: "8px",
    "&.Mui-expanded": {
      margin: "8px 0",
    },
  },
  icon: {
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: 400,
  },
  accordionText: {
    fontSize: "1.625rem",
  },
  accordionContent: {
    textAlign: "left",
  },
  expanded: (props: { isOpen: boolean }) => ({
    padding: ".8em 2.2em",
    "& div:nth-child(2)": {
      transform: props.isOpen ? "rotate(45deg)" : "rotate(0deg)",
    },
  }),
  detailsContainer: {
    border: "1px solid red",
  },
  divider: {
    border: "1px solid #000000",
    margin: 0,
  },
});

const useAccordionDetailsStyles = makeStyles({
  root: {
    padding: ".8em 2.2em",
    margin: "20px 0",
  },
});

const AccordionItem: React.FC<Props> = ({
  title,
  content,
  ariaControl,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles({ isOpen });
  const accordionDetailsStyles = useAccordionDetailsStyles();

  const toggleAccordion = (e: React.ChangeEvent<{}>, expanded: boolean): void =>
    setIsOpen(expanded);

  const hasNewLine = content.match(/\/n/);

  const multipleParagraph = () => (
    <AppText
      customClassName={cn(styles.accordionText, styles.accordionContent, {
        marginBottom: "10px",
      })}
    >
      {content.split("/n").map((text) => (
        <>
          {text}
          <br />
          <br />
        </>
      ))}
    </AppText>
  );

  let contentText = hasNewLine ? (
    multipleParagraph()
  ) : (
    <AppText
      customClassName={cn(styles.accordionText, styles.accordionContent)}
    >
      {content}
    </AppText>
  );

  return (
    <Accordion square className={cn(styles.root)} onChange={toggleAccordion}>
      <AccordionSummary
        className={styles.expanded}
        expandIcon={<AddIcon className={styles.icon} />}
        aria-controls={ariaControl}
        id={id}
      >
        <AppText customClassName={styles.accordionText}>{title}</AppText>
      </AccordionSummary>
      {isOpen && <hr className={styles.divider} />}
      <AccordionDetails className={accordionDetailsStyles.root}>
        {contentText}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
