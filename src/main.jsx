import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './index.css';

import Master from './layouts/Master';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Master title_1="My" title_2="Portfolio"><Home /></Master>} />
        <Route path="/about" element={<Master title_1="About" title_2="Me"><About /></Master>} />
        <Route path="/resume" element={<Master title_1="My" title_2="Resume"><Resume /></Master>} />
        <Route path="/projects" element={<Master title_1="My" title_2="Projects"><Projects /></Master>} />
        <Route path="/contact" element={<Master title_1="Contact" title_2="Me"><Contact /></Master>} />
        <Route path="*" element={<Master title_1="Not" title_2="Found"><NotFound /></Master>} />
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename={import.meta.env.BASE_URL}>
    <AnimatedRoutes />
  </Router>
);