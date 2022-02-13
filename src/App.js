import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { Routes, Route } from "react-router-dom";
import Preview from './Preview';
import './App.css'


function App() {
  return (
    <div className="app">
      <div className="app__body">
      <Routes>
        <Route exact path="/" element={<WebcamCapture />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
