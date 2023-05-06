import * as React from "react";
import CustomInput from "../../../../components/CustomInput";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#f6f8fa",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type TemporaryDrawerProps = {
  state: boolean,
  setState: any,
};

export default function TemporaryDrawer({ state, setState }: TemporaryDrawerProps) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [open, setOpen] = React.useState(false);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = (anchor: any, open?: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const styles = {
    according: {
      width: "100%",
      margin: ".5rem 0",
    },
    accordingSummary: {
      backgroundColor: "white",
      border: "0px solid lightgray",
    },

    arrow: {
      color: "red",
    },
    button: {
      backgroundColor: "#f93e6c",
      color: "white",
      borderRadius: "10px",
      fontWeight: "bold",
    },
    presentationBox: {
      width: 500,
      overflowX: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column",
      margin: "2rem",
      minHeight: "85vh",
    },
    input: {
      width: "100%",
      margin: "1rem",
    },
    inputProps: {
      sx:{
        borderRadius: "10px",
      }
      
    },
    buttonSave: {
      backgroundColor: "#2ccfbc",
      color: "white",
      fontWeight: "bold",
      borderRadius: "10px",
      "&:hover": { backgroundColor: "#2ccfbc" },
    },
    buttonCancel: {
      color: "#04385a",
      fontWeight: "bold",
      border: "2px solid",
      borderRadius: "10px",
      "&:hover": { border: "2px solid" },
    },
    typography: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      gap: ".5rem",
    },
    flexBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      margin: "2rem"
    },
    arrowIcon: {
      fontSize: "2rem",
      color: "gray"
    },
    typographyTim: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: ".5rem"
    }


  };
  const customInputLabels = ["Contract numbers", "Contract number", "Email", "Contract Type", "Phone Provider"]
  const accordingLabels = ["Email", "Contract type", "Email", "Discount"]
  return (
    <div>
      <Button onClick={() => setState(true)} variant="contained" sx={styles.button}>
        <AddCircleOutlineIcon /> Add
      </Button>
      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
        <Box
          sx={styles.presentationBox}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <Box sx={styles.container}>
            {
              customInputLabels.map((label, index) => {
                return (
                  <CustomInput
                    key={index}
                    sx={styles.input}
                    type="text"
                    id=""
                    label={label}
                    inputProps={styles.inputProps}
                  />
                )
              })
            }
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} sx={styles.according}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={styles.accordingSummary}>
                <Typography variant="h6" sx={styles.typography}>
                  <LocalMallOutlinedIcon sx={styles.arrow} /> Tim</Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} sx={styles.according}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={styles.accordingSummary}>
                <Typography variant="h6" style={styles.typographyTim}>
                  <LocalMallOutlinedIcon sx={styles.arrow} /> Tim </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column" spacing={2}>
                  {
                    accordingLabels.map((label, index) => {
                      return (
                        <CustomInput
                          key={index}
                          sx={{ margin: ".5rem 0 " }}
                          type="text"
                          id=""
                          label={label}
                          inputProps={styles.inputProps}
                        />
                      )
                    })
                  }
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={styles.flexBetween}>
            <Box>
              <KeyboardArrowLeftRoundedIcon sx={styles.arrowIcon} />
              <KeyboardArrowRightRoundedIcon sx={styles.arrowIcon} />
            </Box>
            <Box display="flex" gap="1rem" flexDirection="row-reverse">
              <Button variant="contained" sx={styles.buttonSave} >Save</Button>
              <Button onClick={() => setState(false)} variant="outlined" sx={styles.buttonCancel} >Cancel</Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
