import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    // width: "100%",
    "& fieldset": {
      borderColor: "red", // Border color for the input field
    },
    "&:hover fieldset": {
      borderColor: "#FF1414", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF1414", // Border color when focused
    },
  },
  "& .MuiInputBase-input": {
    color: "black", // Text color
  },
  "& .MuiInputBase-input": {
    color: "white", // Text color (white)
  },
  width: "100%",
  paddingBottom: "15px",
}));

const Contact = () => {
  return (
    <>
      <Box
        marginTop={40}
        marginBottom={20}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <Typography
          variant="h1"
          color="white"
          fontWeight={600}
          fontSize={{ xs: "35px", lg: "70px" }}>
          CONTACT US
        </Typography>
        <br />
        <br />
        <Box width={{ xs: "90%", sm: "70%", md: "60%", lg: "50%", xl: "40%" }}>
          <form>
            <CustomTextField
              label={
                <span
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "#FF1414",
                  }}>
                  Name
                </span>
              }
              required
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}

              InputLabelProps={{
                style: {
                  color: "#FF1414",
                  fontWeight: 700,
                  letterSpacing: "2px",
                },
              }}
            />

            <CustomTextField
              label={
                <span
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "#FF1414",
                  }}>
                  Email
                </span>
              }
              required
              InputLabelProps={{
                style: {
                  color: "#FF1414",
                  fontWeight: 700,
                  letterSpacing: "2px",
                },
              }}
            />
            <CustomTextField
              label={
                <span
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "#FF1414",
                  }}>
                  Message
                </span>
              }
              required
              multiline
              rows={5}
              InputLabelProps={{
                // shrink: false,
                style: {
                  color: "#FF1414",
                  fontWeight: 700,
                  letterSpacing: "2px",

                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                },
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "#FF1414",
                fontSize: "18px",
                float: "right",
                borderColor: "#FF1414",
                p: { xs: "8px 20px 8px 20px", xl: "10px 30px 10px 30px" },
                "&:hover": {
                  border: 0,
                  bgcolor: "#FF1414",
                  color: "white",
                },
              }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
