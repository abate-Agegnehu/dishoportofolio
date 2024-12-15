import React from "react";
import { styled } from "@mui/material/styles";
import disho1 from "../images/disho1.png";
import { Typography } from "@mui/material";


const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  margin: "-1.1% 0%",
  background: `linear-gradient(to right, transparent 60%, rgba(10, 200, 150, 0.6) 100%), url(${disho1})`,
  backgroundSize: "cover", 
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
  },
}));

const Left = styled("div")(({ theme }) => ({
  flex: 1,
  margin: "5% 3% 0% 3%",
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
    margin: "10% 0",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
});

const H2 = styled("h2")({
  color: "#01A0AA",
  fontSize: "2.5rem",
  fontWeight: "900",
  margin: "2px 0",
  textAlign: "left",
});

const H1 = styled("h1")({
  color: "#007F87",
  fontSize: "3rem",
  fontWeight: "900",
  margin: "2px 0",
  textAlign: "left",
});

const H4 = styled("h4")({
  color: "#000000",
  fontSize: "1.5rem",
  margin: "2px 0",
  fontWeight: "bold",
  textAlign: "left",
});

const Paragraph = styled("p")({
  fontSize: "1.25rem",
  fontWeight: "300",
  lineHeight: "1.6",
  textAlign: "left",
});

const Home = () => {
  return (
    <Root >
      <Left>
       <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae saepe repellendus dicta praesentium architecto, pariatur quas atque, molestiae natus sunt hic, facilis sequi nihil? Tempora ab ratione culpa esse?
       </Typography>
      </Left>
     
      <Right>
        <H2>
          A voice that bridges worlds, reminding us that every connection starts
          with a simple greeting
        </H2>

        <Paragraph>
          "A software engineer builds not just code, but bridges between
          imagination and innovation, crafting dynamic solutions that shape the
          digital future." This captures the essence of being a skilled
          Full-Stack Developer, emphasizing your role in creating impactful web
          applications. If you’d like further refinement or customization, let
          me know!
        </Paragraph>
      </Right>
    </Root>
  );
};

export default Home;
