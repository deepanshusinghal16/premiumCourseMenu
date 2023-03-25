import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App bg-black ">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : (<div className='text-white h-[calc(100vh-3rem)] flex justify-center items-center'><h1>Oopss..Please log in again</h1></div>)} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
