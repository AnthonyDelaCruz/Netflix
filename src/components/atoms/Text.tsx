import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  color?: string;
};

const useStyles = makeStyles({
  root: {
    color: (props: any) => props.color || "#ffffff",
  },
});

const AppText: React.FC<TypographyProps> = ({ children, ...props }) => {
  const styles = useStyles(props);
  return (
    <Typography className={styles.root} {...props}>
      {children}
    </Typography>
  );
};

export default AppText;
