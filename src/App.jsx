import { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
