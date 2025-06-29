import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css'

import Master from './layouts/Master';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Master><Home /></Master>} />
      <Route path="/about" element={<Master><About /></Master>} />
      <Route path="/resume" element={<Master><Resume /></Master>} />
      <Route path="/projects" element={<Master><Projects /></Master>} />
      <Route path="/contact" element={<Master><Contact /></Master>} />
      <Route path="*" element={<Master><NotFound /></Master>} />
    </Routes>
  </Router>
);