import React, { useState } from "react";

import webdesign from "../images/webdesign.png";
import thumbnail from "../images/uiux.png";
import mobileapp from "../images/mobileapp.png";
import logo from "../images/logo.png";

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
const postions = [
  {
    left: "-100px",
    top: "115px",
  },
  {
    top: "-78px",
    left: "0px",
  },

  {
    top: "115px",
    left: "100px",
  },
  {
    top: "230px",
    left: "0px",
  },
];
const initialWorks = [
  {
    name: "Website Design",
    description:
      "Crafting intuitive and visually appealing websites that prioritize user experience and functionality. From responsive layouts to seamless navigation, I design websites tailored to meet client objectives and user needs.",
    image: webdesign,
  },
  {
    name: "Mobile App Design ",
    description:
      " Developing engaging mobile app interfaces that enhance user interaction. My designs ensure accessibility, simplicity, and an attractive aesthetic to elevate the mobile experience.",
    image: mobileapp,
  },

  {
    name: "Logo Design",
    description:
      "Creating impactful and memorable logos that encapsulate brand identity. Each design is tailored to resonate with the target audience and leave a lasting impression.",
    image: logo,
  },
  {
    name: "Thumbnail Design",
    description:
      "Designing eye-catching thumbnails that drive engagement and clicks. By focusing on bold visuals and compelling typography, I help content creators maximize their reach.",
    image: thumbnail,
  },
];

const Projects = () => {
  const [works, setWorks] = useState(initialWorks);

  const [selectedWork, setSelectedWork] = useState(initialWorks[0]);

  const handleClick = (index) => {
    if (index === 1) {
      const updatedWorks = [...works];
      updatedWorks[1] = works[2];
      updatedWorks[2] = works[3];
      updatedWorks[3] = works[0];
      updatedWorks[0] = works[1];
      setWorks(updatedWorks);
    } else if (index === 3) {
      const updatedWorks = [...works];
      updatedWorks[3] = works[2];
      updatedWorks[2] = works[1];
      updatedWorks[1] = works[0];
      updatedWorks[0] = works[3];
      setWorks(updatedWorks);
    }
    setSelectedWork(works[index]);
  };
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Typography
        sx={{
          color: "#FF9200",
          fontWeight: 600,
          fontSize: "56px",
          width: "100%",
          padding: "15px 40px",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            width: {
              sx: "100%",
              md: "30%",
              animation: `${slideInOutLeft} 1s ease-out`,
            },
          }}
        >
          <img
            src={selectedWork.image}
            style={{ width: "100%", height: "350px", padding: "10px 40px" }}
            alt=""
          />
        </Box>
        <Box
          sx={{
            width: {
              sx: "100%",
              md: "35%",
              animation: `${zoomIn} 1s ease-out`,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "26px",
              color: "#333",
              padding: "10px 40px",
            }}
          >
            {selectedWork.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "#333",
              padding: "10px 40px",
              textAlign: "left",
            }}
          >
            {selectedWork.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sx: "100%", md: "30%" },
            border: "30px solid #FF9200",
            borderRadius: "50%",
            marginRight: "-15%",
            height: "400px",
            animation: `${slideInOutRight} 1s ease-out`,
          }}
        >
          {works.map((work, index) => (
            <img
              key={index}
              src={work.image}
              style={{
                position: "relative",
                width: "100px",
                height: "100px",
                padding: "10px",
                top: `${postions[index].top}`,
                left: `${postions[index].left}`,
                cursor: "pointer",
              }}
              alt={work.name}
              onClick={() => handleClick(index)} // Pass index here instead of work
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
