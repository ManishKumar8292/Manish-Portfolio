import CustomCursor from "./Components/CustomCursor";
import Navbar from "./Components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";
import IntroAnimation from "./Components/IntroAnimation";

const App = () => {
  const [introdone, setIntroDone] = useState(false);
  return (
    <>
      {!introdone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introdone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
