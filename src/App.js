import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

//placeholder
function MoviesPage() {
  return (
    <div className="placeholder-page">
      <h2 className="placeholder-text">Movies Page - Coming Soon!</h2>
    </div>
  );
}

function CartPage() {
  return (
    <div className="placeholder-page">
      <h2 className="placeholder-text">Cart Page - Coming Soon!</h2>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="placeholder-page">
      <h2 className="placeholder-text">About Page - Coming Soon!</h2>
    </div>
  );
}

//steam list
function StreamList() {
  const [streams, setStreams] = useState([]);
  const [newStream, setNewStream] = useState('');

  const addStream = () => {
    if (newStream.trim()) {
      setStreams([...streams, newStream.trim()]);
      setNewStream('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addStream();
    }
  };

  return (
    <div className="stream-list">
      <h2>My Stream list</h2>
      <div className="add-form">
        <input
          type="text"
          className="add-input"
          placeholder="Add title..."
          value={newStream}
          onChange={(e) => setNewStream(e.target.value)}
          onKeyPress={handleKeyPress}
          />
          <button className="add-button" onClick={addStream}>
            Add Stream
          </button>
      </div>

      <ul className="stream-items">
        {streams.map((stream, index) => (
          <li key={index} className="stream-item">
            {stream}
          </li>
        ))}
        {streams.length === 0 && (
          <li className="stream-item">No streams added yet. Start by adding one above!</li>
        )}
      </ul>
    </div>
  );
}

// Navigation
function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Stream List
          </Link>
        </li>
        <li>
          <Link 
            to="/movies" 
            className={`nav-link ${location.pathname === '/movies' ? 'active' : ''}`}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link 
            to="/cart" 
            className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            Cart
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Main App
function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
