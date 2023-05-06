import React, { Dispatch, SetStateAction } from "react";
import { Typography, FormControl, Button } from "@mui/material";
import CustomInput from "../../../components/CustomInput";

type Step3Props = {
  setStep: Dispatch<SetStateAction<string>>;
};
export default function Step3({ setStep }: Step3Props) {
  const styles = {
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
    input: {
        margin: "1rem 0 1rem 0",
    },
    inputProps: {
        sx: {
            borderRadius: "10px"
        }
    }
  };
  return (
    <>
      <Typography variant="h5" fontWeight="bold" color="#464356">
        Insert new password
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" width="24rem">
        insert all your info to proceed with your workspace
      </Typography>
      <FormControl sx={{ marginTop: "2rem" }}>
        <CustomInput
          sx={styles.input}
          type="password"
          required
          id=""
          label="New Password"
          inputProps={styles.inputProps}
        />
        <CustomInput
          sx={styles.input}
          type="password"
          required
          id=""
          label="Confirm new password"
          inputProps={styles.inputProps}
        />
      </FormControl>
      <Button
        variant="contained"
        sx={styles.button}
      >
        Confirm new Password
      </Button>
    </>
  );
}
