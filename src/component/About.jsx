import { Box, Button, Typography } from "@mui/material";
import React from "react";
import about from "../images/about.png";

const About = () => {
  return (
    <>
      <Box
        id="about"
        marginTop={25}
        marginBottom={25}
        width="100%"
        height="100%"
        paddingLeft={{ xs: "3%", sm: "8%", lg: "20%" }}
        paddingRight={{ xs: "3%", sm: "8%", lg: "2%" }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={7}
        justifyContent="center"
        alignItems="center">
        <Box
          maxWidth={{ xs: "250px", md: "500px", lg: "100%" }}
          maxHeight={{ xs: "260px", md: "550px", lg: "100%" }}>
          <img src={about} alt="about" width="100%" height="100%" />
        </Box>
        <Box>
          <Typography
            variant="h1"
            color="#FF1414"
            fontWeight={500}
            textAlign={{ xs: "center", lg: "left" }}
            fontSize={{
              xs: "20px",
              sm: "30px",
              md: "40px",
              lg: "50px",
              xl: "60px",
            }}
            letterSpacing={2}>
            LEARN MORE ABOUT <br /> US
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="lightgray"
            textAlign={{ xs: "center", lg: "left" }}
            width={{ xs: "95%", xl: "80%" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat
            dolorum doloribus vitae animi quidem accusantium, natus voluptatibus
            perferendis? Autem optio, perferendis vitae at eos culpa dignissimos
            consectetur numquam rem. perferendis? Autem optio, perferendis vitae
            at eos culpa dignissimos consectetur numquam rem.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF1414",
              fontFamily: "Montserrat",
              padding: "10px 40px 10px 40px",
              fontSize: "15px",
              fontWeight: "500",
              marginLeft: { xs: "15%", sm: "35%", md: "20%%", lg: "0" },
              letterSpacing: "1",
              "&:hover": {
                bgcolor: "transparent",
                border: "2px solid #FF1414",
                color: "#FF1414",
              },
            }}>
            Read More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default About;
