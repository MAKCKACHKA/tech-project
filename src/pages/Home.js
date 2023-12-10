// import { useState } from "react";
// import "./App.css";
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider/Slider';
import Top from '../components/Top Sales/Top';
// import About from '../components/About us/About';

function Home() {
  return (
    <div>
      <Hero />
      {/* <About></About> */}
      <Top>
        <Slider />
      </Top>
    </div>
  );
}

export default Home;
