import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

type Props = {
  customClassName?: string;
};

const useStyles = makeStyles({
  root: {
    color: (props: any) => props.color || "#ffffff",
  },
});

const AppText: React.FC<TypographyProps & Props> = ({ children, ...props }) => {
  const styles = useStyles(props);
  const { customClassName, ...restProps } = props;
  return (
    <Typography
      className={cn(styles.root, props.customClassName)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export default AppText;
