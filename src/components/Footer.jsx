import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Link } from "@mui/material";

const FooterContainer = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(to right, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
  padding: theme.spacing(2),
  textAlign: "center",
}));

const Links = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: "#6c757d",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Links variant="h6">
          Follow me on:
          <Link
            href="https://www.linkedin.com/in/abate-agegnehu-a78a84294/"
            target="_blank"
            rel="noopener"
            sx={{ margin: 1 }}
          >
            LinkedIn
          </Link>{" "}
          |
          <Link
            href="https://github.com/abate-Agegnehu"
            target="_blank"
            rel="noopener"
            sx={{ margin: 1 }}
          >
            GitHub
          </Link>
        </Links>
        <Copyright variant="body2">
          &copy; {new Date().getFullYear()} Abate Agegnehu. Innovating solutions
          through exceptional development.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
