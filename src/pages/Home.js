// import { useState } from "react";
// import "./App.css";
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider/Slider';
import Top from '../components/Top Sales/Top';
import Response from '../components/Response/Response';
import Video from '../components/Video/Video';
// import About from '../components/About us/About';

function Home() {
  return (
    <div>
      <Hero />
      {/* <About></About> */}
      <Top>
        <Slider />
      </Top>
      <Response>
        <Slider />
      </Response>
      <Video>
        <Slider />
      </Video>
    </div>
  );
}

export default Home;
