import { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

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
      <Hero />
      <Features />
    </>
  )
}

export default App
