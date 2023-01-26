import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Connect from './components/Connect';
import Events from './components/Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route exact path="/App" element={<App />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="events" element={<Events />} />
    <Route path="connect" element={<Connect />} />
  </Routes>
  </HashRouter>,
document.getElementById("root")
);
