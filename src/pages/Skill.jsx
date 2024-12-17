import React from "react";
import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
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
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          color: "#FF9200",
          fontWeight: 600,
          fontSize: { xs: "32px", md: "56px" },
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Skill
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: `${slideInOutLeft} 1s ease-out`,
          }}
        >
          <Button
            sx={{
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 20px 0px 0px",
              backgroundColor: "#F8b862",
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
                width: "50px",
                height: "50px",
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
              width: "100%",
              maxWidth: "300px",
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
                width: "50px",
                height: "50px",
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
              width: "100%",
              maxWidth: "300px",
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
                width: "50px",
                height: "50px",
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
          <Typography sx={{ textAlign: "start" }}>
            I craft responsive, user-centric websites that seamlessly blend
            functionality with aesthetic excellence. My designs prioritize
            engagement and deliver intuitive, visually appealing experiences
            tailored to meet user needs.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: `${zoomIn} 1s ease-out`,
          }}
        >
          <Typography sx={{ textAlign: "start" }}>
            I specialize in transforming raw footage into engaging, high-quality
            video content. Using expert editing, sound refinement, and creative
            transitions, I produce videos that captivate and resonate with
            audiences.
          </Typography>
          <Button
            sx={{
              width: "100%",
              maxWidth: "300px",
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
                width: "50px",
                height: "50px",
                backgroundColor: "#F8B862",
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
              Video Editing
            </Typography>
          </Button>
          <Button
            sx={{
              width: "100%",
              maxWidth: "300px",
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
                width: "50px",
                height: "50px",
                backgroundColor: "#FF9200",
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
              Youtube Intro
            </Typography>
          </Button>
          <Button
            sx={{
              width: "100%",
              maxWidth: "300px",
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
                width: "50px",
                height: "50px",
                backgroundColor: "#FF9200",
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
              Thumbnail
            </Typography>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            animation: `${slideInOutRight} 1s ease-out`,
          }}
        >
          <img
            src={webdesign}
            alt="Web Design"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skill;
