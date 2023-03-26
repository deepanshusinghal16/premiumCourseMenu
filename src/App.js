import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App bg-black ">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      {/* Routes */}
      <Routes>
        <Route path="/premiumCourseMenu" element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
