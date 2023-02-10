import { useState } from 'react';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Research from './components/Research';
import Facilities from './components/Facilities';
import Publications from './components/Publications';
import Stories from './components/Stories';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <LatestNews />
      <Research />
      <Facilities />
      <Publications />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
