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
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "20px", md: "40px" },
        xs: "12",
        md: "4",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          animation: startAnimation ? `${slideInOutLeft} 1s ease-out` : "none",
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <Typography
          sx={{
            color: "#FF9200",
            fontWeight: 600,
            fontSize: { xs: "36px", md: "56px" },
            width: "100%",
            padding: { xs: "10px 0", md: "10px 40px" },
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "26px" },
            color: "#333",
            padding: { xs: "0 10px", md: "10px 40px" },
            textAlign: { xs: "center", md: "left" },
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
          width: { xs: "100%", md: "50%" },
          animation: startAnimation ? `${slideInOutRight} 1s ease-out` : "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={disho1}
          alt="Disho Agegnehu"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "12px",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
