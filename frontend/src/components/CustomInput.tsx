import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#04385a",
    fontWeight: "bold",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#04385a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid lightgray",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid #04385a",
    },
  },
});

type CustomInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  sx?: React.CSSProperties | any;
  inputRef?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  id?: string;
  inputProps?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput(props: CustomInputProps) {
    const { label, type, placeholder, sx, inputRef, value, required, id, inputProps, onChange } = props;
  return (
    <CssTextField
      inputRef={inputRef}
      sx={sx}
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      label={label}
      InputProps={inputProps || { sx: { borderRadius: '10px' } }}
      onChange={onChange}
    />
  );
}
