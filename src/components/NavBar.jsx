import React, { useState, useRef } from "react";
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
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Skill: skillRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
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

  const menuItems = [
    "Home",
    "About",
    "Works",
    "Skill",
    <LinkedInIcon
      sx={{
        backgroundColor: "#fff",
        color: "#FF9200",
      }}
    />,
  ];

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background: "#FFE4C0",
          zIndex: theme.zIndex.drawer + 1,
          boxShadow:"none"
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
            {menuItems.map((item) => (
              <Typography
                key={item}
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
              "linear-gradient(to left, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            width: "200px",
          },
        }}
      >
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {menuItems.map((text) => (
            <ListItem
              button
              key={text}
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

      <div ref={homeRef} style={{ paddingTop: theme.spacing(10) }}>
        <Home />
      </div>
      <div ref={aboutRef} style={{ paddingTop: theme.spacing(10) }}>
        <About />
      </div>
      <div ref={skillRef} style={{ paddingTop: theme.spacing(10) }}>
        <Skill />
      </div>
      <div ref={projectsRef} style={{ paddingTop: theme.spacing(10) }}>
        <Projects />
      </div>
      <div ref={contactRef} style={{ paddingTop: theme.spacing(10) }}>
        <Contact />
      </div>
    </div>
  );
};

export default NavBar;
