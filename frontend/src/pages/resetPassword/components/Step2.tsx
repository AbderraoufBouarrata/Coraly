import React, { Dispatch, SetStateAction } from "react";
import { Typography } from "@mui/material";
//@ts-ignore
import Verified from "../../../assets/images/verified.png";

type Step2Props = {
    setStep: Dispatch<SetStateAction<string>>;
  };
export default function Step2({setStep}: Step2Props) {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" color="#464356">
        Email was sent
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" width="24rem">
        check your email inbox.
        <br />
        We sent you an email to edit your password. if you didn't recieve the
        email please check your SPAM inbox.{" "}
      </Typography>
      <img
        src={Verified}
        height="25%"
        width="25%"
        style={{ margin: "4rem 0 0 2rem" }}
      />
    </>
  );
}
