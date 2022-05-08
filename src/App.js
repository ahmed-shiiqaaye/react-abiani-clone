import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Services'
import Cards from './Components/Cards/Cards'
import './App.css';


function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Services />
    <Cards />
    </>
  );
}

export default App;
