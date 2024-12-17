import React, { useState, useRef, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Skill = React.lazy(() => import("../pages/Skill"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [visibleSections, setVisibleSections] = useState({
    Home: true,
    About: false,
    Skill: false,
    Projects: false,
    Contact: false,
  });

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Skill: skillRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Skill",
    "Contact",
    <LinkedInIcon
      sx={{
        backgroundColor: "#fff",
        color: "#FF9200",
      }}
    />,
  ];

  const scrollToSection = (section) => {
    sections[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const updatedVisibility = { ...visibleSections };

    Object.keys(sections).forEach((section) => {
      const sectionTop = sections[section].current.offsetTop;
      const sectionHeight = sections[section].current.offsetHeight;

      if (
        scrollPosition + windowHeight > sectionTop + 10 &&
        scrollPosition < sectionTop + sectionHeight - 10
      ) {
        updatedVisibility[section] = true;
      } else {
        updatedVisibility[section] = false;
      }
    });

    setVisibleSections(updatedVisibility);
  }, [setVisibleSections]); 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Only trigger on handleScroll change

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background: "#FFE4C0",
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
              color: "black",
            }}
          >
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="h6"
                onClick={() => scrollToSection(item)}
                sx={{
                  cursor: "pointer",
                  display: { xs: "none", sm: "block", color: "#1A1A1A" },
                }}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            marginTop: "64px",
            background:
              "linear-gradient(to left, transparent 0%, rgba(255, 228, 192, 0.6) 100%);",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            width: "200px",
          },
        }}
      >
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {menuItems.map((text, index) => (
            <ListItem
              button
              key={index}
              onClick={() => scrollToSection(text)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={text}
                sx={{ fontSize: "1.2rem", textAlign: "center" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div ref={homeRef} style={{ paddingTop: theme.spacing(10) }} id="home">
        {visibleSections.Home && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        )}
      </div>
      <div ref={aboutRef} style={{ paddingTop: theme.spacing(10) }} id="about">
        {visibleSections.About && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <About />
          </React.Suspense>
        )}
      </div>
      <div
        ref={projectsRef}
        style={{ paddingTop: theme.spacing(10) }}
        id="projects"
      >
        {visibleSections.Projects && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </React.Suspense>
        )}
      </div>
      <div ref={skillRef} style={{ paddingTop: theme.spacing(10) }} id="skill">
        {visibleSections.Skill && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Skill />
          </React.Suspense>
        )}
      </div>

      <div
        ref={contactRef}
        style={{ paddingTop: theme.spacing(10) }}
        id="contact"
      >
        {visibleSections.Contact && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </React.Suspense>
        )}
      </div>
    </div>
  );
};

export default NavBar;
