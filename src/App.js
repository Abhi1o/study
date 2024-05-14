import React, { useEffect } from 'react';
// require('dotenv').config()

import './App.scss';
import Router from "./Router"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(()=>{
    window.scrollTo(0, 0);

  },[location]);
  
  return (
    <div className="App">
      <Header/>
      <Router/>
      {(currentRoute !== '/login') && (currentRoute !=='/signup') && <Footer/>}
    </div>
  );
}

export default App;
