import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {

  return (
    <>
      
      <Navbar />
      <Banner/>
      <Main/>
      <Footer/>

    </>
  );
}

export default App;
