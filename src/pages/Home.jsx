import React from "react";
import disho1 from "../images/disho1.png";
import { Box, Typography, keyframes } from "@mui/material";

const slideInOutLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-8%);
  }
`;
const slideInOutRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  60% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(8%);
  }
`;
const zoomIn = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const Home = () => {
  return (
    <Box
      sx={{
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        p={2}
        sx={{
          width: { xs: "100%", md: "35%" },
          display: "block",
          gap: "10px",
          textAlign: "center",
          animation: `${slideInOutLeft} 1s ease-out`,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Italianno",
            fontWeight: 400,
            color: "#000000",
            fontSize: { xs: "36px", md: "76px" },
          }}
        >
          Hi
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poltawski Nowy",
            fontWeight: 700,
            color: "#000000",
            fontSize: { xs: "36px", md: "76px" },
          }}
        >
          I am
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poltawski Nowy",
            fontWeight: 700,
            color: "#EB8900",
            fontSize: { xs: "28px", md: "56px" },
          }}
        >
          Disho Agegnehu
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            color: "#1A1A1A",
            fontSize: { xs: "16px", md: "26px" },
          }}
        >
          Pursuing a degree in Information Technology at Wolkite University.
        </Typography>
        <Typography
          sx={{
            width: { xs: "80%", md: "314.33px" },
            borderRadius: "12.15px",
            color: "#000000",
            backgroundColor: "#FF9200",
            fontSize: { xs: "18px", md: "36px" },
            margin: { xs: "10px auto", md: "0 0 0 56px" },
            padding: "8px 16px",
            textAlign: "center",
          }}
        >
          View My Work
        </Typography>
      </Box>
      <Box
        sx={{
          top: "20px",
          left: "35%",
          display: { xs: "none", md: "block" },
          position: "absolute",
          zIndex: -1,
          animation: `${zoomIn} 1s ease-out`,
        }}
      >
        <img
          src={disho1}
          alt="Disho Agegnehu"
          style={{
            width: "100%",
            zIndex: "-1",
          }}
        />
      </Box>
      <Box
        p={2}
        sx={{
          width: { xs: "100%", md: "35%" },
          display: "block",
          textAlign: "center",
          fontWeight: 600,
          color: "#333",
          mt: { xs: 2, md: 0 },
          animation: `${slideInOutRight} 1s ease-out`,
        }}
      >
        <Typography sx={{ fontSize: { xs: "28px", md: "56.23px" } }}>
          I am
        </Typography>
        <Typography sx={{ fontSize: { xs: "28px", md: "56.23px" } }}>
          a UI/UX Designer
        </Typography>
        <Typography sx={{ fontSize: { xs: "28px", md: "56.23px" } }}>
          and Video Editor
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
