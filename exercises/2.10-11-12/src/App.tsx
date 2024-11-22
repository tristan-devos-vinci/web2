// File: src/App.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;