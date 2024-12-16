import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Typography sx={{ textAlign: "start" }}>Disho Agegnehu</Typography>
        <Typography
          sx={{
            textAlign: "start",
          }}
        >
          Elevating brands through exceptional design.
        </Typography>
        <Box>
          <IconButton sx={{ color: "#FF9200" }}>
            <FaTelegram />
          </IconButton>
          <IconButton>
            <MailOutlineIcon sx={{ color: "#FF9200" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: "#FF9200" }} />
          </IconButton>
        </Box>
        <Typography>© 2024 dishoag. All rights reserved.</Typography>
      </Box>
      <Box>
        <Typography>Contact Us</Typography>
        <Box>
          <Typography>Email: dishoagnehu@gmail.com</Typography>
          <Typography>Phone: +2519209937</Typography>
          <Typography>Address: Addis Ababa, Ethiopia</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Quick Links:</Typography>
        <Box>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Works</Typography>
          <Typography>Skill</Typography>
          <Typography>Contact</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Follow Us:</Typography>
        <Box>
          <Typography>Facebook</Typography>
          <Typography>Linkedin</Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter(x)</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer
