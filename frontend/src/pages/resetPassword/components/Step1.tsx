import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button, FormControl, Typography, Box } from "@mui/material";
import CustomInput from "../../../components/CustomInput";

type Step1Props = {
  setStep: Dispatch<SetStateAction<string>>;
};

export default function Step1({ setStep }: Step1Props) {
  const styles = {
    input: {
      margin: "1rem 0 1rem 0",
    },
    button: {
      "&:hover": { backgroundColor: "#f93e6c" },
      borderRadius: "10px",
      backgroundColor: "#f93e6c",
      color: "white",
      margin: "1rem 0 1rem 0",
      height: "3rem",
      width: "100%",
      fontWeight: "bold",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
  return (
    <>
      <Typography variant="h5" fontWeight="bold" color="#464356">
        Do you forget your password?
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" width="24rem">
        Insert your email and we will send you a link in your email box to
        resest your password
      </Typography>
      <FormControl sx={{ marginTop: "2rem" }}>
        <CustomInput
          sx={styles.input}
          type="email"
          required
          id=""
          label="Email"
          inputProps={{ sx: { borderRadius: "10px" } }}
        />
      </FormControl>
      <Button variant="contained" sx={styles.button}>
        Reset Password
      </Button>
      <Box sx={styles.flexRow}>
        <Typography variant="subtitle1" color="textSecondary">
          Go back to{" "}
        </Typography>
        <Typography fontWeight="bold" variant="subtitle1" color="#2ccfbc">
          <Link to="/" style={styles.link}>
            Login
          </Link>
        </Typography>
      </Box>
    </>
  );
}
