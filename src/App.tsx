import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';





function App() {
  const location = useLocation();
  return (
    <div className="no-scroll">
        <Routes key={location.pathname} location={location}>
          <Route path="/*" element={<Home />} />
        </Routes>
    </div>
  );
}


export default App;