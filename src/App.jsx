import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app" >
        <header >
          
          <nav className='bg-gray-800 text-white p-4' >
            <ul className='flex items-center justify-center gap-8 m-0 list-none'>
              
              <li><Link style={{color: "white", textDecoration: "none"}} to="/">Home</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}}to="/about">About</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}} to="/services">Services</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}} to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className='flex items-center justify-center p-4  w-full bg-gray-800 text-white fixed bottom-0 left-0 right-0"'>
          <p>&copy; 2023 My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
