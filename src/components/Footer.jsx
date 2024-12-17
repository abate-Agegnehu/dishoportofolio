import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: { xs: "30px 15px", md: "40px 20px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          width: "100%", // Ensures the container width takes full available space
          flexWrap: "wrap", // Allows grid items to wrap and avoid overflow
        }}
      >
        {/* First Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#003308" }}>
            Disho Agegnehu
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              padding: { xs: "10px 0", md: "10px 0px 10px 70px" },
            }}
          >
            Elevating brands through exceptional design.
          </Typography>
          <Box sx={{ marginTop: "10px" }}>
            <IconButton
              onClick={() => window.open("https://t.me/@disho21", "_blank")}
              sx={{ color: "#FF9200" }}
            >
              <TelegramIcon sx={{ cursor: "pointer", color: "#FF8200" }} />
            </IconButton>
            <IconButton
              onClick={() =>
                (window.location.href = "mailto:dishoagnehu@gmail.com")
              }
              sx={{ color: "#FF9200" }}
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ color: "#FF9200" }}>
              <a
                style={{ marginTop: "6px" }}
                href="https://www.linkedin.com/in/disho-agegnehu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#FF9200",
                    cursor: "pointer",
                  }}
                />
              </a>
            </IconButton>
          </Box>
          <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
            © 2024 dishoag. All rights reserved.
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography>Email: dishoagnehu@gmail.com</Typography>
          <Typography>Phone: +251920993786</Typography>
          <Typography>Address: Addis Ababa, Ethiopia</Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Link to="home" smooth={true} duration={500}>
            <Typography sx={{ cursor: "pointer" }}>Home</Typography>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <Typography sx={{ cursor: "pointer" }}>About</Typography>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Typography sx={{ cursor: "pointer" }}>Works</Typography>
          </Link>
          <Link to="skill" smooth={true} duration={500}>
            <Typography sx={{ cursor: "pointer" }}>Skills</Typography>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
          </Link>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold">
            Follow Us
          </Typography>
          <Typography sx={{ cursor: "pointer" }}>
            <a
              href="https://www.linkedin.com/in/disho-agegnehu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              LinkedIn
            </a>
          </Typography>
          <Typography sx={{ cursor: "pointer" }}>
            <a
              href="https://t.me/@disho21"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Telegram
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
