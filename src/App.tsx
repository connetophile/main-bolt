import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Mission from './components/Mission';
import Team from './components/Team';
import Process from './components/Process';
import Guidelines from './components/Guidelines';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Values />
        <Mission />
        <Team />
        <Process />
        <Guidelines />
        <Contact />
      </main>
    </div>
  );
}

export default App;