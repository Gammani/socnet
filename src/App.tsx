import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
        <h1>111</h1>
      </div>
  );
}

export default App;
