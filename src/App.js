import { useEffect, useState } from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css';
import Certifications from './pages/Certifications';


function App() {
  const [drawerWidth, setDrawerWidth] = useState(null)
   const handleWidth = (width) => {
      setDrawerWidth(width)
   }
  useEffect(() => {
    document.title = 'Tito Maffeo';
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar dwidth={handleWidth}/>
      <About dwidth={drawerWidth} />
      <Skills dwidth={drawerWidth} />
      <Certifications dwidth={drawerWidth} />
    </div>
  );
}

export default App;
