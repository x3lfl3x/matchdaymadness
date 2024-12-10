import { Box, Button, TextField, Typography, ThemeProvider, createTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import image1 from "./image-1.png";
import image3 from "./image-1.png";
import image4 from "./image-1.png";
import layer1 from "./image-1.png";
import line6 from "./image-1.png";
import vector1 from "./image-1.png";

// Create a theme with typography and pxToRem function
const theme = createTheme({
  typography: {
    fontFamily: "Instrument_Sans-Regular, Helvetica",
    pxToRem: (size) => `${size / 16}rem`, // Custom pxToRem function
  },
  shape: {
    borderRadius: 10, // Adjust to your requirements
  },
});

// Styled components
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  fontFamily: "Instrument_Sans-Regular, Helvetica",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(14),
  letterSpacing: "1.4px",
}));

const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e7747f",
  color: "#fff",
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  fontFamily: "Instrument_Sans-Bold, Helvetica",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(18),
  letterSpacing: "1.8px",
  "&:hover": {
    backgroundColor: "#d0636b",
  },
}));

const Desktop = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
        <Box position="relative" width="1440px" height="1024px" overflow="hidden">
          <Box
            position="absolute"
            width="1440px"
            height="807px"
            top="217px"
            left="0"
          >
            <img
              style={{
                position: "absolute",
                width: "3px",
                height: "46px",
                top: "465px",
                left: "719px",
              }}
              alt="Line"
              src={line6}
            />
            <img
              style={{
                position: "absolute",
                width: "1440px",
                height: "487px",
                top: "80px",
                left: "0",
              }}
              alt="Vector"
              src={vector1}
            />
            <img
              style={{
                position: "absolute",
                width: "287px",
                height: "284px",
                top: "220px",
                left: "0",
                objectFit: "cover",
              }}
              alt="Image"
              src={image3}
            />
            <img
              style={{
                position: "absolute",
                width: "290px",
                height: "284px",
                top: "215px",
                left: "1150px",
                objectFit: "cover",
              }}
              alt="Image"
              src={image4}
            />
            <img
              style={{
                position: "absolute",
                width: "64px",
                height: "64px",
                top: "401px",
                left: "688px",
              }}
              alt="Layer"
              src={layer1}
            />
            <Box
              position="absolute"
              width="552px"
              height="337px"
              top="0"
              left="444px"
              bgcolor="#eaeaea"
              borderRadius="20px"
              boxShadow="0px 1px 6.2px 1px rgba(0, 0, 0, 0.25)"
            />
            <Typography
              position="absolute"
              width="112px"
              top="214px"
              left="528px"
              fontFamily="Instrument_Sans-Regular, Helvetica"
              fontWeight="normal"
              color="#dc3545"
              fontSize="12px"
              letterSpacing="1.2px"
            >
              Forgot Password
            </Typography>
            <Box
              position="absolute"
              width="444px"
              height="93px"
              top="109px"
              left="500px"
            >
              <TextField
                variant="filled"
                fullWidth
                placeholder="Email or Phone number"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "#d9d9d9",
                    borderRadius: "20px",
                    paddingLeft: "16px",
                    fontFamily: "Instrument_Sans-Regular, Helvetica",
                    fontWeight: "normal",
                    color: "#6c6c6c",
                    fontSize: "14px",
                    letterSpacing: "1.4px",
                  },
                }}
              />
              <TextField
                variant="filled"
                fullWidth
                placeholder="Password"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "#d9d9d9",
                    borderRadius: "20px",
                    paddingLeft: "16px",
                    fontFamily: "Instrument_Sans-Regular, Helvetica",
                    fontWeight: "normal",
                    color: "#6c6c6c",
                    fontSize: "14px",
                    letterSpacing: "1.4px",
                  },
                }}
                style={{ marginTop: "16px" }}
              />
            </Box>
            <Typography
              position="absolute"
              width="93px"
              top="33px"
              left="674px"
              fontFamily="Instrument_Sans-Bold, Helvetica"
              fontWeight="bold"
              color="black"
              fontSize="24px"
              letterSpacing="2.4px"
            >
              Sign in
            </Typography>
            <SignInButton
              variant="contained"
              position="absolute"
              width="139px"
              height="33px"
              top="246px"
              left="651px"
            >
              Sign in
            </SignInButton>
            <Typography
              position="absolute"
              width="206px"
              top="302px"
              left="617px"
              fontFamily="Instrument_Sans-Bold, Helvetica"
              fontWeight="bold"
              color="#464646"
              fontSize="10px"
              letterSpacing="1px"
            >
              <span style={{ letterSpacing: "0.1px" }}>
                You don't have an account? Register
              </span>
            </Typography>
          </Box>
          <img
            style={{
              position: "absolute",
              width: "215px",
              height: "68px",
              top: "21px",
              left: "612px",
              objectFit: "cover",
            }}
            alt="Image"
            src={image1}
          />
          <Box
            position="absolute"
            width="185px"
            height="185px"
            top="-65px"
            left="-59px"
            bgcolor="#e7747f"
            borderRadius="50%"
          />
          <Box
            position="absolute"
            width="90px"
            height="33px"
            top="38px"
            left="1212px"
          >
            <StyledButton
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#dc3545", color: "#fff" }}
            >
              Sign in
            </StyledButton>
          </Box>
          <Box
            position="absolute"
            width="90px"
            height="33px"
            top="38px"
            left="1317px"
          >
            <StyledButton
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#ececec", color: "#e88790" }}
            >
              Register
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Desktop;
