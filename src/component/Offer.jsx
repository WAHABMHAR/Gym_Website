import React from "react";
import offer from "../images/offer.png";
import { Box, Button, Typography } from "@mui/material";

const Offer = () => {
  return (
    <>
      <Box
        id="offer"
        marginTop={10}
        sx={{
          width: "100%",
          background: `url(${offer})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: { xs: "450px", sm: "550px", lg: "585px", xl: "900px" },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            background:
              "radial-gradient(ellipse at center, rgba(181, 8, 8, 0.38) 0%, rgba(0, 0, 0, 0.6) 100%)",
            filter:
              'progid:DXImageTransform.Microsoft.gradient( startColorstr="#61b50808", endColorstr="#99000000",GradientType=1 )',
            top: 0,
            left: 0,
            width: "100%",
            height: { xs: "450px", sm: "550px", lg: "585px", xl: "900px" },
            // zIndex: -1,
          },
        }}>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}>
          <Typography
            zIndex={1}
            variant="h1"
            color="White"
            letterSpacing={4}
            textAlign="center"
            lineHeight={1.3}
            fontSize={{
              xs: "25px",
              sm: "38px",
              md: "48px",
              lg: "63px",
              xl: "78px",
            }}
            fontWeight={700}>
            A BIG
            <Typography
              component="span"
              variant="h1"
              px={{ xs: "2px", sm: 1, lg: 3 }}
              color="#FF1414"
              letterSpacing={4}
              fontSize={{
                xs: "27px",
                sm: "40px",
                md: "50px",
                lg: "65px",
                xl: "80px",
              }}
              fontWeight={700}>
              {" "}
              OFFER
            </Typography>
            FOR <br /> THIS SUMMER
          </Typography>
          <Typography
            variant="body1"
            color="lightgrey"
            fontSize={{ xs: "15px", md: "20px" }}
            zIndex={1}
            textAlign="center"
            letterSpacing={5}
            fontWeight={400}>
            Here You Find Eciting Offers Grow Yourself
          </Typography>
          <br />
          <br />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF1414",
              fontFamily: "Montserrat",
              padding: {
                xs: "5px 20px 5px 20px",
                sm: "8px 30px 8px 30px",
                lg: "10px 40px 10px 40px",
                xl: "10px 50px 10px 50px",
              },
              fontSize: { xs: "14px", sm: "18", xl: "20px" },
              fontWeight: "600",
              letterSpacing: "1",
              "&:hover": {
                bgcolor: "transparent",
                border: "2px solid #FF1414",
                color: "#FF1414",
              },
            }}>
            JOIN US
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Offer;
