import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    margin: "auto 0",
    "&:hover": {
      border: "none",
    },
    "& label.Mui-focused": {
      color: "#8c8c8c",
    },
  },
});

const AppInput: React.FC<TextFieldProps> = ({ ...props }) => {
  const styles = useStyles();
  return (
    <TextField variant="outlined" className={cn(styles.root)} {...props} />
  );
};

export default AppInput;
