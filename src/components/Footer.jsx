import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";


const Footer = () => {
  return (
    <Box
      sx={{
        padding: "40px 20px",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* First Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#003308" }}>
            Disho Agegnehu
          </Typography>
          <Typography>Elevating brands through exceptional design.</Typography>
          <Box sx={{ marginTop: "10px" }}>
            <IconButton sx={{ color: "#FF9200" }}>
              <TelegramIcon
                onClick={() => window.open("https://t.me/disho21", "_blank")}
                sx={{
                  cursor: "pointer", // Ensures the icon appears clickable
                  color: "#0088cc", // Telegram's official color
                }}
              />
            </IconButton>
            <IconButton sx={{ color: "#FF9200" }}>
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ color: "#FF9200" }}>
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/disho-agegnehu/",
                    "_blank"
                  )
                }
              />
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
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Works</Typography>
          <Typography>Skill</Typography>
          <Typography>Contact</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold">
            Follow Us
          </Typography>
          <Typography>LinkedIn</Typography>
          <Typography>Telegram</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
