// import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import About from"./components/About";
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from"./components/Contact";
import Internship from"./components/Internship";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="fixed top-0 -z-10 h-full w-full"></div> {/* Fixed typo here */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero /> {/* Render the Hero component */}
        <About/>{/* Render the Hero component */}
        <Technologies/>{/* Render the Hero component */}
        <Internship/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      {/* Other components */}
    </div>
  );
}

export default App;
