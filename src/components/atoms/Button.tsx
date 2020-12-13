import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  children: any;
  endIcon?: React.ReactNode;
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

const AppButton: React.FC<Props> = ({ children, endIcon = null }) => {
  const buttonStyles = useStyles();
  return (
    <Button variant="contained" className={buttonStyles.root} endIcon={endIcon}>
      <span className={buttonStyles.text}>{children}</span>
    </Button>
  );
};

export default AppButton;
