import { Box, Typography } from "@mui/material";
import React from "react";
import feature1 from "../images/1.svg";
import feature2 from "../images/2.svg";
import feature3 from "../images/3.svg";
import feature4 from "../images/4.svg";

const Features = () => {
  return (
    <>
      <Box
        id="features"
        width="100%"
        marginTop={{ xs: 15, xl: 30 }}
        marginBottom={30}
        paddingLeft={{ xs: "5%", md: "2%", lg: "5%", xl: "15%" }}
        paddingRight={{ xs: "5%", md: "2%", lg: "5%", xl: "15%" }}
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={15}>
        <Typography
          variant="h1"
          color="white"
          fontWeight={600}
          fontSize={{ xs: "25px", sm: "35px", md: "50px" }}
          letterSpacing={2}>
          FEATURES
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row", xl: "row" }}
          // flexWrap={{ md: "wrap" }}
          alignItems="center"
          gap={4}
          justifyContent="center"
          color={"white"}>
          <Box
            display="flex"
            justifyContent="center"
            gap={5}
            alignItems="center"
            flexDirection={"column"}>
            <Box maxWidth="100px" marginBottom={{ xs: "45px", xl: "70px" }}>
              <img src={feature1} alt="feature1" width="100%" height="100%" />
            </Box>
            <Typography
              variant="h3"
              color="white"
              fontWeight={500}
              fontSize={{ xs: "24px", lg: "30px" }}>
              WeightLifting
            </Typography>
            <Typography
              variant="body1"
              color="GrayText"
              fontWeight={300}
              textAlign="center"
              //   width={"25%"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              rem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              orem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap={5}
            alignItems="center"
            flexDirection={"column"}>
            <Box maxWidth="100px" marginBottom={{ xs: "45px", xl: "70px" }}>
              <img src={feature2} alt="feature1" width="100%" height="100%" />
            </Box>
            <Typography
              variant="h3"
              color="white"
              fontWeight={500}
              fontSize={{ xs: "24px", lg: "30px" }}>
              Specific Muscles
            </Typography>
            <Typography
              variant="body1"
              color="GrayText"
              fontWeight={300}
              textAlign="center"
              //   width={"25%"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              rem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              orem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap={5}
            alignItems="center"
            flexDirection={"column"}>
            <Box maxWidth="100px" marginBottom={{ xs: "45px", xl: "70px" }}>
              <img src={feature3} alt="feature1" width="100%" height="100%" />
            </Box>
            <Typography
              variant="h3"
              color="white"
              fontWeight={500}
              fontSize={{ xs: "24px", lg: "30px" }}>
              Flex Your Muscles
            </Typography>
            <Typography
              variant="body1"
              color="GrayText"
              fontWeight={300}
              textAlign="center"
              //   width={"25%"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              rem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              orem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap={5}
            alignItems="center"
            flexDirection={"column"}>
            <Box maxWidth="100px" marginBottom={{ xs: "45px", xl: "70px" }}>
              <img src={feature4} alt="feature1" width="100%" height="100%" />
            </Box>
            <Typography
              variant="h3"
              color="white"
              fontWeight={500}
              fontSize={{ xs: "24px", lg: "30px" }}>
              Cardio Exercise
            </Typography>
            <Typography
              variant="body1"
              color="GrayText"
              fontWeight={300}
              textAlign="center"
              //   width={"25%"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              rem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              orem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Features;
