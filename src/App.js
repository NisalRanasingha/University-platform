import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Navbar/Hero/Hero.js";
import Programs from "./Components/Navbar/Programs/Programs.js";
import Title from "./Components/Title/Title.js";
import About from "./Components/About/About.js";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
        <Programs />
        <About/>
        <Title subtitle='Gallery' title='Campus Photo'/>
      </div>
    </div>
  );
};

export default App;
