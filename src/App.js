import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import About from "./Componnents/About";
import Contact from "./Componnents/Contact";
import Footer from "./Componnents/Footer";
import Hero from "./Componnents/Hero"
import Home from "./Componnents/Home";
import Navlinks from "./Componnents/Navlinks";
import React from "react";
import SearchBarDetails from "./Componnents/SearchBarDetails";
import Shop from "./Componnents/Shop";
import react from 'react';

function App() {
  return (
    <div className="App">
      <div className="navContainer">
    <Router >
     <Navlinks/>
    <SearchBarDetails/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </Router>
    </div>
    {/* <Hero/> */}
    <Footer/>
    </div>
  );
}

      
export default App;
