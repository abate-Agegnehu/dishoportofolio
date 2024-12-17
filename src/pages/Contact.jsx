import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TelegramIcon from "@mui/icons-material/Telegram";

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

const Contact = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Contact Title */}
      <Typography
        sx={{
          color: "#FF9200",
          fontWeight: 600,
          fontSize: "48px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Contact
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Grid - Form */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            animation: `${slideInOutLeft} 1s ease-out`,
          }}
        >
          <Box display="flex" flexDirection="column" gap="20px">
            {/* Email Field */}
            <TextField
              label="Email"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "#FF9200" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#FF9200" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? (
                        <Visibility sx={{ color: "#FF9200" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#FF9200" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Message Field */}
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="Type Your Message Here"
              sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "10px",
              }}
            />

            {/* Buttons */}
            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#FF9200",
                  color: "#333",
                }}
              >
                Clear Message
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF9200",
                  color: "#FFF",
                  ":hover": { backgroundColor: "#e07e00" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Grid - Information */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            animation: `${slideInOutRight} 1s ease-out`,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="20px"
          >
            <Typography>
              Whether you have a question, a project idea, or just want to say
              hello, I'm here to listen. Reach out using the form below or any
              of the channels listed.
            </Typography>

            {/* Social Media Icons */}
            <Box>
              <IconButton>
                <TelegramIcon style={{ color: "#FF9200", fontSize: "28px" }} />
              </IconButton>
              <IconButton>
                <MailOutlineIcon sx={{ color: "#FF9200", fontSize: "28px" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: "#FF9200", fontSize: "28px" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
