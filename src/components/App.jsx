import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Home from "../pages/Home.jsx" ; 
import Apropos from "../pages/Apropos.jsx" ; 
import Accomodation from "../pages/Accomodation.jsx" ; 
import Error from "../pages/Errorpage.jsx" ; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element= { <Home/> } />
          <Route path="/apropros" element= { <Apropos/> } />
          <Route path="/accomodation" element= { <Accomodation/> } />
          
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
