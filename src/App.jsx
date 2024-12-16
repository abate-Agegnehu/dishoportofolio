import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
      className="App"
    >
      <NavBar />
      <Footer />
    </Box>
  );
}

export default App;
