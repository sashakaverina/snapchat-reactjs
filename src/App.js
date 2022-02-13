import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebcamCapture />} />
        <Route path="/test" element={<WebcamCapture />} />
      </Routes>
    </div>
  );
}

export default App;
