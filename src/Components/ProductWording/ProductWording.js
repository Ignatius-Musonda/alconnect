




import { Link } from "react-router-dom";
import "./ProductWording.css"
import img1 from "../Images/Alcon2.jpg"



function ProductWording() {
    
    
  return (

        <div className="ProductWordingContainer">   


            <div className="ProductWordingCover">  

                  
                    <div className="wordPart"> 

                            <h1>Alconnect Beauty</h1>
                            <p>Welcome to Alconnect beauty. We developed Alconnect because who believe that you shouldn't have to spend a fortune to look fly.</p>
                            <button>Floor Listings</button>
                    </div>
                      <div className="imagePart"> 

                            <img src={img1} />

                    </div>
            
             </div>


            
        </div>
  );
}

export default ProductWording;
