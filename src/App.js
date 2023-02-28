import { useEffect, useState } from "react";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import { Divider, Container } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Certifications from "./pages/Certifications";

function App() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [drawerWidth, setDrawerWidth] = useState(null);
  const handleWidth = (width) => {
    setDrawerWidth(width);
  };
  useEffect(() => {
    document.title = "Tito Maffeo";
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar dwidth={handleWidth} />
      <Container maxWidth>
        <Divider />
        <About dwidth={drawerWidth} />
        <Divider />
        <Skills dwidth={drawerWidth} />
        <Divider />
        <Certifications dwidth={drawerWidth} />
      </Container>
      {matches ? <Container maxWidth style={{ marginTop: 100+"px"}}><Divider /> <Footer /></Container> : null}
    </div>
  );
}

export default App;
