import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className=''>
        <nav className="bg-blue-200 p-4">
          <ul className="flex justify-between items-center">
          <li className='text-white'>iPhone index</li>
            <li>
              <Link to="/" className="text-white font-bold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
