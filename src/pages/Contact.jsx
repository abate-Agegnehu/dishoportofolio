import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  keyframes,
} from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaTelegram } from "react-icons/fa";

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
  return (
    <Box>
      <Typography
        sx={{
          color: "#FF9200",
          fontWeight: 600,
          fontSize: "56px",
          width: "100%",
          padding: "10px 40px",
          
        }}
      >
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            animation: `${slideInOutLeft} 1s ease-out`,
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            label="Email"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "#FF9200" }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <TextField
            id="input-with-icon-textfield"
            label="Password"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#FF9200" }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <TextField
            id="outlined-textarea"
            label="Messages"
            rows="4"
            placeholder="Type Here Your Messages"
            multiline
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#333",
                backgroundColor: "#FFF",
              }}
            >
              Clear Message
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF9200",
                color: "#333",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            animation: `${slideInOutRight} 1s ease-out`,
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
            }}
          >
            Feel free to get in touch with me for any inquiries, project ideas,
            or simply to connect. You can reach out through the form below or
            through any of the available contact options. I'm here to help!
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
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
