import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';
import { AiFillSkype } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineContacts, AiOutlineUserAdd,AiOutlineLogout } from 'react-icons/ai';
import { BiPhoneCall, BiUserCircle } from 'react-icons/bi';
import {RxDashboard} from 'react-icons/rx';

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
        <ul className=' gap-[2rem] flex'>
          <li><Link to="/" className='flex '>
            <div className='block sm:hidden'><AiOutlineHome /></div>
            <div className='hidden sm:block'>Home</div>
          </Link></li>
          <li><Link to="/about" className='flex'>
            <div className='block sm:hidden'><AiOutlineContacts /></div>
            <div className='hidden sm:block'>About</div>
          </Link></li>
          <li><Link to="/contact" className='flex'>
            <div className='block sm:hidden'>< BiPhoneCall /></div>
            <div className='hidden sm:block'>Contact</div>
          </Link></li>
        </ul>
      </nav>

      <div className='flex gap-[1rem]'>
        {!isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/login" className='flex'>
              <div className='block sm:hidden'><BiUserCircle /></div>
              <div className='hidden sm:block'>Login</div>
            </Link>
          </button>
        }
        {!isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/signup" >
              <div className='block sm:hidden'><AiOutlineUserAdd /></div>
              <div className='hidden sm:block'>Sign Up</div>
            </Link>
          </button>
        }
        {isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300' onClick={() => {
            setLoggedIn(false);
            toast.success("Logged Out");
          }}>
            <Link to="/" className='flex'>
              <div className='block sm:hidden'><AiOutlineLogout /></div>
              <div className='hidden sm:block'>Log Out</div>
            </Link>
          </button>
        }
        {isLoggedIn &&
          <button className='border-transparent bg-slate-700 px-3 py-1 rounded-lg opacity-70  hover:opacity-100 transition-all duration-300'>
            <Link to="/dashboard" className='flex'>
              <div className='block sm:hidden'><RxDashboard /></div>
              <div className='hidden sm:block'>Dashboard</div>
            </Link>
          </button>
        }
      </div>


    </div >
  )
}

export default Navbar
