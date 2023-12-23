// import logo from './logo.svg';
// import './App.css';
import Landing from './Pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (

    <>    

<Routes>
                     {/* PUBLIC */}
                      <Route path="/" element={<Landing/>}>

                      </Route>
                      {/* <Route path="/Meetings" element={<Meetings/>}>

                      </Route>
                      <Route path="/Weddings" element={<Weddings/>}>

                      </Route>
                      <Route path="/Bookings" element={<Bookings/>}>

                      </Route>
                      <Route path="/Accomodation" element={<Accomodation/>}>

                      </Route>
                      <Route path="/Dine" element={<Dine/>}>

                      </Route> */}
                      {/* <Route path="/Recovery/:token" element={<Recovery/>}>
                     

                      </Route> */}
         </Routes>


    </>
   
  );
}

export default App;
