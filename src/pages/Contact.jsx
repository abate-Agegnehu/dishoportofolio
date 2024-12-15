import React, { useState } from "react";
import emailjs from "emailjs-com";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

const Root = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  background:
    "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#007F87",
}));

const Hr = styled("hr")(({ theme }) => ({
  height: "1px",
  background: "#000000",
  width: "15%",
  marginBottom: theme.spacing(3),
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "500px",
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#007F87",
  color: "white",
  "&:hover": {
    backgroundColor: "#005f66",
  },
}));

const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: "#01A0AA",
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
        "service_t5mrshk",
        "template_z4ugh4s",
        formData,
        "7f3RtTbPz1kzMs0_X"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSnackbarMessage("Message sent successfully!");
          setSnackbarOpen(true);
          setFormData({ name: "", email: "", message: "" });
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

  return (
    <Root>
      <Title variant="h4">Contact Us</Title>
      <Hr />
      <Form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          required
          value={formData.message}
          onChange={handleChange}
        />
        <StyledButton type="submit" variant="contained">
          Send Message
        </StyledButton>
      </Form>

      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
      >
        <StyledSnackbarContent message={snackbarMessage} />
      </Snackbar>
    </Root>
  );
};

export default Contact;
