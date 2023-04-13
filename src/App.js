import { useState , useEffect} from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderPhone from "./components/HeaderPhone";
import Home from "./components/Home";
import Services from "./components/Services";
import Testmonial from "./components/Testmonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () =>{
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);
  
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio])
  

  return ratio < 2 ? (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testmonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  ) : (<em id="customMessage">Please Change the ratio to View!</em>)
}

export default App;
