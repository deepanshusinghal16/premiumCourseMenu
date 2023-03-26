import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LogInForm = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false);

    function showHandler() {
        setShow(!show);
    }
    function changeHandler(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
        setLoggedIn(true);
        toast.success("Logged In Successfully!");
        navigate('/dashboard');

    }
    return (
        <form onSubmit={submitHandler} className="my-5">

            <label htmlFor='email'>
                <p className='mt-3 font-semibold'>
                    Email Address <sup>*</sup>
                </p>
                <input type='email' required value={formData.email} name='email' id='email' onChange={changeHandler} placeholder="Enter Email id "
                    className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
            </label>

            <label htmlFor='password' className='relative'>
                <p className='font-semibold mt-3 '>
                    Password<sup>*</sup>
                </p>
                <input type={show ? 'text' : 'password'} required value={formData.password} name='password' id='password' onChange={changeHandler} placeholder="Enter Password "
                    className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />

                <span onClick={showHandler} className="absolute z-[100] bottom-0 right-2">
                    {
                        show ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                    }
                </span>
            </label>

            <Link to="#" className='text-right text-xs text-blue-500'>
                <p>Forgot Password</p>
            </Link>

            <button className='bg-yellow-400   text-black w-[100%] mt-8 py-2 font-semibold rounded-md hover:bg-yellow-500 transition-all duration-300 animate-pulse' >Sign In</button>

        </form>
    )
}

export default LogInForm
