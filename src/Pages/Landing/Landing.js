


import { Link } from "react-router-dom";
import "./Landing.css"
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";

import SlideCarousel from "../../Components/SlideCarousel/SlideCarousel";



function Landing() {


    
    
  return (

        <div className="LandingWholeCnt">
            <HeroSection/>
            <SlideCarousel/>
            <SlideCarousel/>
            
            

            {/* <NavBar/> */}

            
        </div>
  );
}

export default Landing;
