import React from "react";
import { styled } from "@mui/material/styles";
import disho1 from "../images/disho1.png";

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(to left, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
  height: "100vh",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
  },
}));

const Left = styled("div")(({ theme }) => ({
  flex: 1,
  margin: "5% 3%",
  maxWidth: "50%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
    margin: "10% 0",
  },
}));

const Right = styled("div")(({ theme }) => ({
  flex: 1,
  margin: "5% 3%",
  maxWidth: "50%",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
    margin: "10% 0",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
});

const Title = styled("h1")({
  color: "#007F87",
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "10px 0",
  textAlign: "center",
});

const Paragraph = styled("p")({
  fontSize: "1.25rem",
  fontWeight: "300",
  lineHeight: "1.6",
  textAlign: "justify",
});

const Divider = styled("hr")({
  height: "1px",
  background: "#000000",
  width: "40%",
  margin: "10px auto",
});

const About = () => {
  return (
    <Root>
      <Left>
        <Title>About Me</Title>
        <Divider />
        <Paragraph>
          Hello! I’m Abate Agegnehu, a dedicated Software Engineer specializing
          in full-stack development. I have a strong foundation in JavaScript,
          React, Node.js, Java, Spring Boot, MongoDB, and MySQL, with skills
          spanning both frontend and backend. I’m passionate about building
          seamless, user-friendly applications that showcase technical
          excellence. I thrive in collaborative environments, where I learn from
          others and contribute my knowledge. My goal is to create impactful
          solutions that address real-world challenges. Driven to keep growing,
          I’m excited to build innovative software that makes a positive
          difference.
        </Paragraph>
      </Left>
      <Right>
        <Image src={disho1} alt="Disho Agegnehu" />
      </Right>
    </Root>
  );
};

export default About;
