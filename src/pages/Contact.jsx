import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  keyframes,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TelegramIcon from "@mui/icons-material/Telegram";
import emailjs from "emailjs-com";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    password: "", // Add password field in formData
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ieyp4s9",
        "template_9jybj8b",
        formData,
        "qA-4-YdbGi9MIp6Dg"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSnackbarMessage("Message sent successfully!");
          setSnackbarOpen(true);
          setFormData({ name: "", email: "", message: "", password: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setSnackbarMessage("Failed to send message. Please try again.");
          setSnackbarOpen(true);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
              name="email"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#FF9200", // Default underline color
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#FF9200", // Hover color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF9200", // Focus color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF9200", // Label color when focused
                },
              }}
              value={formData.email}
              onChange={handleChange}
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
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#FF9200", // Default underline color
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#FF9200", // Hover color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF9200", // Focus color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF9200", // Label color when focused
                },
              }}
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              variant="standard"
              value={formData.password}
              onChange={handleChange}
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
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message Here"
              variant="standard" // Ensure variant is set to 'standard'
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#FF9200", // Default underline color
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#FF9200", // Hover underline color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF9200", // Focus underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF9200", // Label color when focused
                },
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
                onClick={() =>
                  setFormData({ email: "", password: "", message: "" })
                }
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
                onClick={handleSubmit}
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
              <IconButton
                onClick={() => window.open("https://t.me/@disho21", "_blank")}
                sx={{ color: "#FF9200" }}
              >
                <TelegramIcon
                  sx={{
                    cursor: "pointer",
                    color: "#FF8200",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() =>
                  (window.location.href = "mailto:dishoagnehu@gmail.com")
                }
                sx={{ color: "#FF9200" }}
              >
                <MailOutlineIcon />
              </IconButton>
              <IconButton>
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
                ,
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
      >
        <SnackbarContent message={snackbarMessage} />
      </Snackbar>
    </Box>
  );
};

export default Contact;
