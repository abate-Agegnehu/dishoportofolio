import React from "react";
import { styled } from "@mui/material/styles";
import disho1 from "../images/disho1.png";



const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  background:
    "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
}));

const ProjectContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const Project = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  margin: theme.spacing(2),
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  textAlign: "center",
  background: "#f9f9f9",
  overflow: "hidden",
  "&:hover .description": {
    transform: "translateY(0)",
  },
  "&:hover .projectName": {
    opacity: 0,
  },
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "67%",
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
});

const Hr = styled("hr")({
  height: "1px",
  background: "#000000",
  width: "16%",
  margin: "0 auto",
});

const Title = styled("h1")(({ theme }) => ({
  color: "#007F87",
  fontSize: "3rem",
  fontWeight: "bold",
  margin: theme.spacing(2, 0),
  textAlign: "center",
}));

const Description = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background:
    "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
  color: "black",
  padding: theme.spacing(1),
  textAlign: "center",
  transform: "translateY(100%)",
  transition: "transform 0.3s ease",
  height: "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ProjectName = styled("p")({
  transition: "opacity 0.3s ease",
});

const Projects = () => {
  const projects = [
    {
      name: "Movie Mania",
      image: disho1,
      link: "https://moviemonia.netlify.app",
      description:
        "An interactive application for browsing the top trending movies with various filtering options.",
    },
    {
      name: "Music Haven",
      image: disho1,
      link: "https://abatemusiccollections.netlify.app/",
      description:
        "A dynamic platform to explore, collect, and listen to your favorite music tracks, with powerful search and playlist creation features.",
    },

    {
      name: "Apple Website",
      image: disho1,
      link: "https://resonant-semolina-5bb316.netlify.app",
      description:
        "A responsive replica of Apple's official website, featuring smooth animations and a polished interface.",
    },
    {
      name: "T-movies",
      image: disho1,
      link: "https://github.com/abate-Agegnehu/T-movies",
      description:
        "A movie database application that showcases a wide range of popular movies channels and program, with detailed information for each.",
    },
    {
      name: "Dashboard",
      image: disho1,
      link: "https://github.com/abate-Agegnehu/Dashboard-By-React",
      description:
        "A highly customizable React-based dashboard with features tailored for data visualization and management.",
    },
    {
      name: "Ecommerce",
      image: disho1,
      link: "https://github.com/abate-Agegnehu/E-commerce-by-react",
      description:
        "A versatile e-commerce platform offering a cart functionality and user-friendly product browsing.",
    },
    {
      name: "Pokmen",
      image: disho1,
      link: "https://github.com/abate-Agegnehu/Pokemon",
      description:
        "A fun Pokémon-themed application displaying character information and stats for each Pokémon.",
    },
    {
      name: "Todo-List",
      image: disho1,
      link: "https://github.com/abate-Agegnehu/TodoList",
      description:
        "An efficient to-do list application that helps users manage and prioritize their daily tasks effectively.",
    },
  ];

  return (
    <Root>
      <div>
        <Title>Projects</Title>
        <Hr />
      </div>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image src={project.image} alt={project.name} />
            </a>
            <ProjectName className="projectName">{project.name}</ProjectName>
            <Description className="description">
              {project.description}
            </Description>
          </Project>
        ))}
      </ProjectContainer>
    </Root>
  );
};

export default Projects;
