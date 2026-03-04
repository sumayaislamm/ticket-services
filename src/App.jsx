import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner';

function App() {
  const [theme, setTheme] = useState('light'); // default light

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      
      <Navbar />
      <Banner></Banner>

    </>
  );
}

export default App;
