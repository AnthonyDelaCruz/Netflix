import React, { FC } from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";

import { AppInput, AppButton, AppText } from "components/atoms";

import "styles/molecules/GettingStartedForm.scss";

const GettingStartedForm: FC = () => {
  return (
    <div className="getting-started-form">
      <div className="text--sm">
        <AppText>
          Ready to watch? Enter your email to create or restart your membership.
        </AppText>
      </div>
      <div className="form-container">
        <AppInput placeholder="Email address" />
        <AppButton endIcon={<ChevronRight />}>GET STARTED</AppButton>
      </div>
    </div>
  );
};

export default GettingStartedForm;
