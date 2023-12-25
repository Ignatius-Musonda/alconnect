


// import logo from './logo.svg';
// import './App.css';

import "./SlideCarousel.css";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import img1 from "../Images/Alcon1.jpg"

export default function SlideCarousel({Heading, CarouselData}) {



  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trackMouse, setTrackMouse] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = new Array(10).fill(undefined).map((val, idx) => idx);
    setItems(arr);
  }, []);

  const x = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    if (!trackMouse) return;

    setAnimationComplete(false);

    const xVal = e.pageX - ref.current.offsetLeft;
    const walk = (xVal - startX) * 2; //scroll-fast

    const controls = animate(x, scrollLeft - walk, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
      onComplete: () => {
        setAnimationComplete(true);
      },
      onStop: () => {
        setAnimationComplete(true);
      }
    });
    return controls.stop;
  };
// dsds

  

  const handleMouseDown = (e) => {
    if (!ref.current) return;

    setTrackMouse(true);

    const startX = e.pageX - ref.current.offsetLeft;
    setStartX(startX);

    const scrollLeft = ref.current.scrollLeft;
    setScrollLeft(scrollLeft);
  };

  const handleMouseLeave = () => {
    setTrackMouse(false);
  };

  const handleMouseUp = () => {
    setTrackMouse(false);
  };

  const handleScroll = () => {
    if (!ref.current) return;

    if (animationComplete) {
      x.set(ref.current.scrollLeft);
    }
  };

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
    <>  

    <div className="carouselCover" id="Iggy">

        <div className="Prewording">

                <h2>{Heading}</h2>

        </div>


    
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <motion.ul
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        className="carouselList"
      >
        {CarouselData.map((idx) => (
          <motion.li onClick={()=>{console.log("have been clicke",idx)}}  key={idx}>

                   <div className="ListingDisplayCover">
                        {CarouselData && CarouselData.map((index,key)=>{
                            return( 
                            

                                    <div className="ListingItemCard" key={key}>

                                            <div className="ListingImg">

                                                    <img src={img1} />

                                            </div>
                                            <div className="ListingStore"> 

                                                    <p><b>{index.Name}</b></p>

                                            </div>
                                            <div className="ListingDetails">

                                                    <div className="ListingName">
                                                        <p>{index.Title}</p>

                                                    </div>
                                                    <div className="ListingPrice">

                                                            <p>{`ZMK ${index.Price}`}</p>

                                                    </div>

                                            </div>

                                    </div>

                        
                                    
                                )
                            })}

                </div>
                        
            {/* <img className="carouselImg" src={img1} /> */}
          </motion.li>

        ))}
      </motion.ul>
      </div>
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
