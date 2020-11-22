import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const AppText: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

export default AppText;
