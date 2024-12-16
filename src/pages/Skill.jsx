

import { Box, Button, Typography,keyframes } from "@mui/material";
import React from "react";
import webdesign from "../images/webdesign.png";
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
const Skill = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          color: "#FF9200",
          fontWeight: 600,
          fontSize: "56px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Skill
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          sx={{
            padding: "10px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: `${slideInOutLeft} 1s ease-out`,
          }}
        >
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#F8B862",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#FF9200",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              1
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Web Design
            </Typography>
          </Button>
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#FF9200",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#F8B862",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              2
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Mobile App Design
            </Typography>
          </Button>
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#FF9200",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#F8B862",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              3
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Logo Design
            </Typography>
          </Button>
          <Typography
            sx={{
              textAlign: "start",
            }}
          >
            I craft responsive, user-centric websites that seamlessly blend
            functionality with aesthetic excellence. My designs prioritize
            engagement and deliver intuitive, visually appealing experiences
            tailored to meet user needs.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "10px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: `${zoomIn} 1s ease-out`,
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
            }}
          >
            I specialize in transforming raw footage into engaging, high-quality
            video content. Using expert editing, sound refinement, and creative
            transitions, I produce videos that captivate and resonate with
            audiences.
          </Typography>
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#F8B862",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#FF9200",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              4
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Web Design
            </Typography>
          </Button>
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#FF9200",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#F8B862",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              5
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Mobile App Design
            </Typography>
          </Button>
          <Button
            sx={{
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#FF9200",
              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ff6d00",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#F8B862",
                color: "#000",
                fontWeight: "bold",
                border: "1px solid white",
                borderRadius: "50%",
              }}
            >
              6
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Logo Design
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            padding: "10px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: `${slideInOutRight} 1s ease-out`,
          }}
        >
          <img
            src={webdesign}
            alt="Image description"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
