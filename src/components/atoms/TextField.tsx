import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const AppInput: React.FC<TextFieldProps> = ({ ...props }) => (
  <TextField variant="outlined" {...props} />
);

export default AppInput;
