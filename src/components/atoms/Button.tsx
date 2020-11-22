import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  children: any;
};

const useStyles = makeStyles({
  root: {
    background: "#e50914",
    "&:hover": {
      background: "#e50914",
    },
  },
  text: {
    color: "#ffffff",
    fontWeight: 400,
  },
});

const AppButton: React.FC<Props> = ({ children }) => {
  const buttonStyles = useStyles();
  return (
    <Button variant="contained" className={buttonStyles.root}>
      <span className={buttonStyles.text}>{children}</span>
    </Button>
  );
};

export default AppButton;
