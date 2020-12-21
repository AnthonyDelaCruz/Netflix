import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { AppText, AppImage } from "components/atoms";

import "styles/molecules/Panel.scss";

type Props = {
  title: string;
  subTitle: string;
  imageUrl?: string;
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
  },
  panelImage: {
    height: "auto",
    maxWidth: "100%",
  },
});

const Panel: React.FC<Props> = ({ title, subTitle, imageUrl }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container className={styles.panel}>
        <Grid
          className={styles.contentLeft}
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
        <Grid container justify="center" item xs={12} md={6}>
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
