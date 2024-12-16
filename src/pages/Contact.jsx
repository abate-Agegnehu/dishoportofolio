import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
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
          fontSize: "26px",
          color: "#333",
          padding: "10px 40px",
          textAlign: "left",
        }}
      >
        <Box >
          <Box>
            <TextField
              id="input-with-icon-textfield"
              label="Email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#FF9200",
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon
                        sx={{
                          color: "#FF9200",
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-textarea"
              label="Messages"
              placeholder="Type Here Your Messages"
              multiline
            />
          </Box>
          <Box
            sx={{
              display: "felx",
              justifyContent: "space-between",
              width: "100%",
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
        <Box>
          <Typography>
            Feel free to get in touch with me for any inquiries, project ideas,
            or simply to connect. You can reach out through the form below or
            through any of the available contact options. I'm here to help!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
