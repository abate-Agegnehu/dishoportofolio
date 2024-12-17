import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaTelegram } from "react-icons/fa";

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
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" sx={{
            color:"#003308"
          }}>
            Disho Agegnehu
          </Typography>
          <Typography>Elevating brands through exceptional design.</Typography>
          <Box sx={{ marginTop: "10px" }}>
            <IconButton sx={{ color: "#FF9200" }}>
              <FaTelegram />
            </IconButton>
            <IconButton sx={{ color: "#FF9200" }}>
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ color: "#FF9200" }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
            © 2024 dishoag. All rights reserved.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography>Email: dishoagnehu@gmail.com</Typography>
          <Typography>Phone: +2519209937</Typography>
          <Typography>Address: Addis Ababa, Ethiopia</Typography>
        </Grid>

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
          <Typography>Facebook</Typography>
          <Typography>LinkedIn</Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter(x)</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
