import React from "react";
import { AppInput, AppText } from "components/atoms";

const Banner: React.FC = () => {
  return (
    <div>
      <AppText variant="h1">Thousands of TV shoes & movies.</AppText>
      <AppText variant="h1">Entertainment guaranteed.</AppText>
      <AppText variant="h2">
        You'll love Netflix! If you don't, cancel within 21 days for a refund.
      </AppText>
      <AppText variant="h2">
        Ready to watch? Enter your email to create or restart your membership.
      </AppText>
      <AppInput placeholder="Email address" />
    </div>
  );
};

export default Banner;
