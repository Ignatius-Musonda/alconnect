





import { Link } from "react-router-dom";
import "./ProductOrder.css"



// import img1 from "../Images/Alcon1.jpg"
import img1 from "../../Components/Images/Alcon1.jpg"
import img2 from "../../Components/Images/Alcon2.jpg"
import img3 from "../../Components/Images/Alcon7.jpg"
import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import SlideCarousel from "../../Components/SlideCarousel/SlideCarousel";
import Footer from "../../Components/Foooter/Footer";
import ScrollToTop from "../../Components/Scrolltop/Scrolltop";


function ProductOrder({ price }) {

    const [count, setCount] = useState(1);

    const handleIncrement = (type) => {
    //   setCount(count + 1);
      if (type === 'increment') {
        setCount(count + 1);
      } else if (type === 'decrement' && count > 1) {
        setCount(count - 1);
      }

    };
  
    const handleAddToBag = () => {
      // Implement the logic to add the item to the shopping bag
      // This is where you would typically make an API call or update some state
      console.log(`Added ${count} items to the bag.`);
    };


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


    

    
    
  return (

        <div className="ProductOrderContainer"> 
            <ScrollToTop/>
            <div className="productNavContainer">
                      <NavBar/>
            </div>    
            <div className="minintro">

                <p>Shop All > Pore Eclipse Matte Translucent Setting Powder</p>

            </div>

            <div className="ProductDisplay">

                    <div className="ImgVizContainer">       
                            <div className="imgSelf">
                                    <img src={img1} />
                            </div>

                    </div>

                    <div className="CardWordingCont">    
                        <div className="wordingSelf">
                              
                            <div className="VizTitle">
                                    <h2>Pore Eclipse Matte Translucent Setting Powder</h2>
                            </div>
                            <div className="VizCategory">
                                    <p>translucent setting powder</p>
                            </div>
                            <div className="VizIncrementorContainer">

                                     <div className="shopping-basket-button">
                                        <div className="count">
                                        <span className="leftCount" onClick={() => handleIncrement('decrement')}>-</span>
                                            {count}
                                         <span className="rightCount"  onClick={() => handleIncrement('increment')}>+</span>
                                        </div>
                                        <div className="add-to-bag" onClick={handleAddToBag}>
                                            Add to Bag
                                        </div>
                                        <div className="price">{` ZMK ${200 * count}`}</div>
                                        </div>

                                {/* <button>Add to bag</button> */}
                            </div>
                            <div className="VizPromotion">
                                    <p>Excluded from promotions.</p>
                            </div>
                            <div className="VizDescriptio"> 
                                    <h2>What it is</h2>
                                    <p>A weightless, talc-free translucent setting powder that controls shine, blurs pores and fine lines, and sets makeup for a smooth matte finish.</p>

                            </div>
                            <div className="How to Use">    
                                    
                                      <h2>How to Use</h2>
                                      <p>
                                      -Slide the mess-free, locking sifter open and tap powder into cap of jar.
-Swirl brush, puff, or sponge through the powder and tap away excess.
-Apply after makeup application.
-Pro Tip: For an extra matte look, pair with Pore Eclipse Mattifying Primer and Pore Eclipse Matte Setting Spray.
                                      </p>
                                   


                            </div>
                        </div> 
                        {/* end of word card */}

                    </div>

            </div>

            <SlideCarousel 
                Heading={"Related items"}

                CarouselData = {cardData}
            
            />

            <Footer/>
                    

                    
           
                

            
        </div>
  );
}

export default ProductOrder;
