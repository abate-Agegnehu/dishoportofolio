import React, { useEffect, useState } from "react";
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

const About = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "space-between",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          width: { sx: "100%", md: "50%" },
          animation: startAnimation ? `${slideInOutLeft} 1s ease-out` : "none",
        }}
      >
        <Typography
          sx={{
            color: "#FF9200",
            fontWeight: 600,
            fontSize: "56px",
            width: "100%",
            padding: "10px 40px",
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontSize: "26px",
            color: "#333",
            padding: "10px 40px",
            textAlign: "left",
          }}
        >
          Hello! I’m Disho Agegnehu, a passionate designer with expertise in
          creating visually appealing and user-centric designs for both web and
          mobile platforms. I specialize in crafting engaging video content,
          from editing to thumbnail design, ensuring every project is both
          functional and aesthetically pleasing. With a keen eye for detail and
          a focus on delivering exceptional results, I strive to make every
          design and video content creation impactful and aligned with the
          client’s vision. I am driven by creativity and am always excited to
          take on new challenges that allow me to showcase my skills and make a
          positive difference through design.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { sx: "100%", md: "50%" },
          animation: startAnimation ? `${slideInOutRight} 1s ease-out` : "none",
        }}
      >
        <img src={disho1} alt="Disho Agegnehu" />
      </Box>
    </Box>
  );
};

export default About;
