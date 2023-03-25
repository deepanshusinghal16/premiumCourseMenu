import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';
import { AiFillSkype } from 'react-icons/ai';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <div className='flex justify-between sm:justify-evenly items-center bg-black text-white h-[3rem] mx-auto'>

      <Link to="/" >
        <div className='hidden sm:block'>
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </div>
        <div className='block sm:hidden '>
        <AiFillSkype size='2rem' />
        </div>
      </Link>

      <nav>
        <ul className=' gap-[2rem] hidden md:flex'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className='flex gap-[1rem]'>
        {!isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/login">Login</Link>
          </button>
        }
        {!isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/signup" >SignUp</Link>
          </button>
        }
        {isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300' onClick={() => {
            setLoggedIn(false);
            toast.success("Logged Out");
          }}>
            <Link to="/">LogOut</Link>
          </button>
        }
        {isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/dashboard">Dashboard</Link>
          </button>
        }
      </div>

       
    </div >
  )
}

export default Navbar
