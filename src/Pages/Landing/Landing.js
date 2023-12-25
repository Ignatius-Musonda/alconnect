


import { Link } from "react-router-dom";
import "./Landing.css"
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";

import SlideCarousel from "../../Components/SlideCarousel/SlideCarousel";
import Prelude from "../../Components/Prelude/Prelude";
// import img1 from "../Images/Alcon1.jpg"
import img1 from "../../Components/Images/Alcon1.jpg"
import ProductWording from "../../Components/ProductWording/ProductWording";


function Landing() {


    const cardData = [ 
        { 
           ImgUrl: img1,
           Name: "Snowflake Chartels", 
           Title: "Nike Converse",
           Price: 300
     
        },
        { 
           ImgUrl: img1,
           Name: "Zed Watch Guy", 
           Title: "Casio Classic Watch",
           Price: 250
     
        }, 
         { 
           ImgUrl: img1,
           Name: "Snowflakes Chartel", 
           Title: "Airforce Converse",
           Price: 300
     
        }, 
         { 
           ImgUrl: img1,
           Name: "Snowflakes Chartel", 
           Title: "Airforce Converse",
           Price: 300
     
        }, 
     
     
       ]


    
    
  return (

        <div className="LandingWholeCnt">
            <HeroSection/>
            <Prelude/>
            <SlideCarousel

                   CarouselData={cardData}
                   Heading={"Skin Care"}
            
            />
            <SlideCarousel

                   CarouselData={cardData}
                   Heading={"Lips"}
            
            />
            <ProductWording/>

            {/* <SlideCarousel/> */}
            
            

            {/* <NavBar/> */}

            
        </div>
  );
}

export default Landing;
