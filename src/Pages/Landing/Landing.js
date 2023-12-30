


import { Link } from "react-router-dom";
import "./Landing.css"
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";

import SlideCarousel from "../../Components/SlideCarousel/SlideCarousel";
import Prelude from "../../Components/Prelude/Prelude";
// import img1 from "../Images/Alcon1.jpg"
import img1 from "../../Components/Images/Alcon1.jpg"
import img2 from "../../Components/Images/Alcon2.jpg"
import img3 from "../../Components/Images/Alcon7.jpg"
import ProductWording from "../../Components/ProductWording/ProductWording";
import Operation from "../../Components/Operation/Operation";
import Footer from "../../Components/Foooter/Footer";


function Landing() {


    const cardData = [ 
        { 
           ImgUrl: img2,
           Name: "Pore eclipse Transulucent Powder", 
           Title: "Powder",
           Price: 300
     
        },
        { 
           ImgUrl: img3,
           Name: "Hidro Grip Primer", 
           Title: "Hydrating primer",
           Price: 250
     
        }, 
         { 
           ImgUrl: img2,
           Name: "Future fluid All Over Liquid Concealer", 
           Title: "Concealer",
           Price: 300
     
        }, 
         { 
           ImgUrl: img3,
           Name: "Lip + Cheek", 
           Title: "Cream blush + Lip colour",
           Price: 300
     
        }, 
     
     
       ]


    const cardDataSec = [ 
        { 
           ImgUrl: img2,
           Name: "Snowflake Chartels1", 
           Title: "Cream blush + Lip colour",
           Price: 300
     
        },
        { 
           ImgUrl: img3,
           Name: "Zed Watch Guy", 
           Title: "Casio Classic Watch",
           Price: 250
     
        }, 
         { 
           ImgUrl: img2,
           Name: "Snowflakes Chartel2", 
           Title: "Airforce Converse",
           Price: 300
     
        }, 
         { 
           ImgUrl: img3,
           Name: "Snowlakes Chartel", 
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

            <Operation/>

            <Footer/>
            

            {/* <SlideCarousel/> */}
            
            

            {/* <NavBar/> */}

            
        </div>
  );
}

export default Landing;
