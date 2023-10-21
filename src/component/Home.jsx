import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import banner from "../images/banner.png";
import logo from "../images/logo.png";
// import { Link } from "react-router-dom";
import Features from "./Features";
import Offer from "./Offer";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Menu, Close, Clear, Block } from "@mui/icons-material";

const Home = () => {
  const [backColor, setBackColor] = useState("transparent");
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setBackColor("transparent");
      } else {
        setBackColor("black");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // Handle removal if needed
      });
    };
  }, []);

  const navLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "FEATURES",
      path: "#features",
    },
    {
      name: "OFFER",
      path: "#offer",
    },
    {
      name: "ABOUT",
      path: "#about",
    },
    {
      name: "CONTACT",
      path: "#contact",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: { xs: "450px", sm: "550px", lg: "585px", xl: "920px" },
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
            height: { xs: "450px", sm: "550px", lg: "585px", xl: "920px" },
          },
        }}>
        <Box
          paddingLeft={"10%"}
          paddingRight={"10%"}
          display="flex"
          flexDirection="column">
          <Box
            position="fixed"
            top={0}
            left={0}
            zIndex={999}
            bgcolor={backColor}
            sx={{
              transition: "0.3s ease-out",
              "&:hover": {
                boxShadow: `${
                  backColor === "black" ? "0px 4px 4px -3px red" : "none"
                }`,
              },
            }}
            width={"100%"}
            height={"80px"}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            gap={{ md: "10%", xl: "30%" }}
            alignItems="center">
            <Box maxWidth={"90px"} zIndex={1}>
              <Button disableRipple component={Link} href={"#"}>
                <img src={logo} alt="logo" width={"100%"} height={"100%"} />
              </Button>
            </Box>
            <Box display="flex" gap={{ md: 1, xl: 3 }}>
              {navLinks.map((item, index) => {
                return (
                  <Button
                    component={Link}
                    variant="text"
                    key={index}
                    href={item.path}
                    sx={{
                      padding: "10px 30px 10px 30px",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      color: "white",
                      borderRadius: 1,
                      "&:hover": {
                        bgcolor: "#FF1414",
                      },
                    }}>
                    {item.name}
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            justifyContent="space-between"
            alignItems="center"
            bgcolor="transparent"
            pt={{ xs: 1 }}>
            <img
              src={logo}
              alt="my_logo_image"
              height="35px"
              style={{ zIndex: 1 }}
            />
            <Drawer
              width="100vw"
              height="100vh"
              sx={{
                color: "#142033",
              }}
              variant="temporary"
              anchor="right"
              open={open}>
              <Box
                display="flex"
                // justifyContent={"center"}
                alignItems={"center"}
                flexDirection="column"
                bgcolor="black"
                width="100vw"
                height="100vh">
                <IconButton onClick={() => setOpen(false)}>
                  <Clear sx={{ width: "60px", color: "#FF1414" }}></Clear>
                </IconButton>
                {/* <Box width={"100vw"} height={"100vh"}> */}
                {navLinks.map((item, index) => {
                  return (
                    <>
                      <Button
                        key={index}
                        component={Link}
                        underline="none"
                        disableRipple
                        width="95%"
                        onClick={() => setOpen(false)}
                        href={item.path}
                        sx={{
                          color: "#FF1414",
                          marginTop: "8px",
                          padding: "20px 20px 20px 20px",
                          fontWeight: "bolder",
                          border: "1px solid #FF1414",
                          transition: "0.5s ease-in",
                          "&:hover": {
                            bgcolor: "#FF1414",
                            color: "white",
                          },
                        }}>
                        {item.name}
                      </Button>
                    </>
                  );
                })}
                {/* </Box> */}
              </Box>
            </Drawer>
            <IconButton onClick={() => setOpen(true)}>
              <Menu sx={{ width: "60px", color: "white" }}></Menu>
            </IconButton>

            {/* </Box> */}
          </Box>

          {/* ////////////////////Header Finished */}
          <Box
            zIndex={1}
            display={"flex"}
            alignItems={"center"}
            flexDirection="column"
            justifyContent={"center"}
            position="absolute"
            top={{ xs: "25%", md: "30%", xl: "40%" }}
            left={{ xs: "50%", xl: "50%" }}
            sx={{
              transform: {
                xs: "translate(-50%, -50%)",
                xl: "translateX(-50%)",
              },
            }}>
            <Typography
              variant="h5"
              color="white"
              fontFamily={"Montserrat"}
              fontWeight={600}
              letterSpacing={1}
              fontSize={{
                xs: "15px",
                sm: "25px",
                md: "30px",
                lg: "40",
                xl: "50px",
              }}>
              STEP UP YOUR
            </Typography>

            <Typography
              width={"100%"}
              variant="body1"
              color="white"
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={700}
              letterSpacing={1}
              fontSize={{
                xs: "25px",
                sm: "35px",
                md: "45px",
                lg: "60px",
                xl: "75px",
              }}>
              <Typography
                component="span"
                variant="body1"
                color="#FF1414"
                fontFamily={"Montserrat"}
                fontWeight={700}
                paddingRight={{ xs: 1, xl: 3 }}
                letterSpacing={1}
                fontSize={{
                  xs: "27px",
                  sm: "40px",
                  md: "50px",
                  lg: "65px",
                  xl: "80px",
                }}>
                FITNESS
              </Typography>
              WITH US
            </Typography>
            <Typography
              variant="body1"
              color="whitesmoke"
              fontFamily={"Montserrat"}
              fontWeight={300}
              paddingRight={{ xs: 0, xl: 3 }}
              textAlign={"center"}
              letterSpacing={2}
              width={"100%"}
              fontSize={{ xs: "15px", md: "20px" }}>
              Build Your Body And Fitness With Professional Touch
            </Typography>
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
      </Box>
      <Features></Features>
      <Offer></Offer>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
