import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  styled,
  keyframes,
  useMediaQuery,
} from "@mui/material";

import webdesign from "../images/webdesign.png";
import thumbnail from "../images/uiux.png";
import mobileapp from "../images/mobileapp.png";
import logo from "../images/logo.png";

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

const largeScreenPositions = [
  { top: "115px", left: "-70px" },
  { top: "-68px", left: "75px" },
  { top: "115px", left: "225px" },
  { top: "330px", left: "90px" },
];
const smallScreenPositions = [
  { top: "-20px", left: "-70px" },
  { top: "-68px", left: "75px" },
  { top: "-20px", left: "225px" },
  { top: "30px", left: "90px" },
];

const initialWorks = [
  {
    name: "Website Design",
    description:
      " Creating user-friendly, visually captivating websites that emphasize both functionality and user experience.Designing websites that seamlessly blend aesthetics with optimal performance, prioritizing user satisfaction",
    image: webdesign,
  },
  {
    name: "Mobile App Design",
    description:
      "Creating engaging mobile app interfaces that captivate users.Focusing on seamless navigation and enhanced interaction for a better experience.Ensuring every touchpoint is intuitive, functional, and enjoyable for the user.",
    image: mobileapp,
  },
  {
    name: "Logo Design",
    description:
      "Designing impactful logos that reflect a brand's unique identity.Focusing on simplicity and recognition for lasting impressions.Crafting visuals that communicate the essence and values of the brand.",
    image: logo,
  },
  {
    name: "Thumbnail Design",
    description:
      "Creating visually striking thumbnails that grab attention.Focusing on clarity and creativity to boost engagement.Crafting designs that encourage clicks and enhance user interaction.",
    image: thumbnail,
  },
];

const AnimatedBox = styled(Box)(({ animation, duration = "1s" }) => ({
  animation: `${animation} ${duration} ease-out`,
}));

const Projects = () => {
  const [works, setWorks] = useState(initialWorks);
  const [selectedWork, setSelectedWork] = useState(initialWorks[0]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleClick = (index) => {
    if (index === 1 || index === 3) {
      const updatedWorks = [...works];
      if (index === 1) {
        updatedWorks[0] = works[1];
        updatedWorks[1] = works[2];
        updatedWorks[2] = works[3];
        updatedWorks[3] = works[0];
      } else {
        updatedWorks[0] = works[3];
        updatedWorks[3] = works[2];
        updatedWorks[2] = works[1];
        updatedWorks[1] = works[0];
      }
      setWorks(updatedWorks);
    }
    setSelectedWork(works[index]);
    setAnimationKey(animationKey + 1); // Re-trigger animation
  };

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        padding: "20px",
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
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        key={animationKey}
        sx={{ justifyContent: "space-around" }}
      >
        <Grid item xs={12} md={3}>
          <AnimatedBox animation={slideInOutLeft}>
            <img
              src={selectedWork.image}
              style={{
                width: "100%",
                height: "350px",
                padding: "10px",
                objectFit: "cover",
              }}
              alt=""
            />
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnimatedBox animation={zoomIn}>
            <Typography
              sx={{
                fontSize: "26px",
                color: "#333",
                padding: "10px",
              }}
            >
              {selectedWork.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#666",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {selectedWork.description}
            </Typography>
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnimatedBox
            animation={slideInOutRight}
            sx={{
              border: "30px solid #FF9200",
              borderRadius: "50%",
              margin: "0 auto",
              height: "100%",
              position: "relative",
            }}
          >
            {works.map((work, index) => (
              <img
                key={index}
                src={work.image}
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  top: `${
                    isSmallScreen
                      ? smallScreenPositions[index].top
                      : largeScreenPositions[index].top
                  }`,
                  left: `${
                    isSmallScreen
                      ? smallScreenPositions[index].left
                      : largeScreenPositions[index].left
                  }`,
                  cursor: "pointer",
                }}
                alt={work.name}
                onClick={() => handleClick(index)}
              />
            ))}
          </AnimatedBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
