import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Services from './services';
import Projects from './projects';
import About from './about';
import SignIn from './signin';
import AdminDashboard from './admindashboard';  // Import AdminDashboard component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />  {/* Add the route for AdminDashboard */}
      </Routes>
    </Router>
  </StrictMode>,
);
