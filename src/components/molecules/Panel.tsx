import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

import { AppText, AppImage } from "components/atoms";

import "styles/molecules/Panel.scss";

type Props = {
  title: string;
  subTitle: string;
  imageUrl?: string;
  reverse?: boolean;
};

const useStyles = makeStyles({
  root: {
    borderBottom: "8px solid #222",
    "&:first-of-type": {
      borderTop: "8px solid #222",
    },
  },
  panel: {
    margin: "0 auto",
    padding: "70px 45px",
    maxWidth: "1100px",
  },
  contentLeft: {
    paddingRight: "3rem",
    justifyContent: "center",
  },
  contentRight: {
    paddingLeft: "3rem",
  },
  imageLeft: {
    justifyContent: "unset",
  },
  imageRight: {
    justifyContent: "center",
  },
  panelImage: {
    height: "auto",
    maxWidth: "100%",
  },
  reverseContent: {
    flexDirection: "row-reverse",
  },
});

const Panel: React.FC<Props> = ({
  title,
  subTitle,
  imageUrl,
  reverse = false,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid
        container
        className={cn(styles.panel, { [styles.reverseContent]: reverse })}
      >
        <Grid
          className={cn({
            [styles.contentLeft]: !reverse,
            [styles.contentRight]: reverse,
          })}
          container
          direction="column"
          justify="center"
          item
          xs={12}
          md={6}
        >
          <AppText variant="h1" customClassName="panel-text--title">
            {title}
          </AppText>
          <AppText customClassName="panel-text--subtitle">{subTitle}</AppText>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          className={cn({
            [styles.imageLeft]: reverse,
            [styles.imageRight]: !reverse,
          })}
        >
          <AppImage
            className={styles.panelImage}
            src={`${imageUrl}`}
            alt={title}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Panel;
