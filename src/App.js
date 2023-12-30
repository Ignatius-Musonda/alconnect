// import logo from './logo.svg';
// import './App.css';
import Landing from './Pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import ProductOrder from './Pages/ProductOrder/ProductOrder';



function App() {
  return (

    <>    

<Routes>
                     {/* PUBLIC */}
                      <Route path="/" element={<Landing/>}>

                      </Route>

                      
                      <Route path="/ProductOrder" element={<ProductOrder/>}>

                      </Route>


                   
                      {/* <Route path="/Recovery/:token" element={<Recovery/>}>
                     

                      </Route> */}
         </Routes>


    </>
   
  );
}

export default App;
