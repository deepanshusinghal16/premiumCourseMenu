import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import frameImage from '../assets/frame.png';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

const Template = ({ title, desc1, desc2, image, fromType, setLoggedIn }) => {
    return (
        <div className='flex justify-around flex-col-reverse md:flex-row   bg-black text-white '>

            <div className='mt-[2rem] mx-[2rem] text-left'>

                <h1 className='text-3xl font-bold my-3'>{title}</h1>
                <p>
                    <span className='opacity-70'>{desc1}</span>
                    <br />
                    <span className='italic text-blue-600 '>{desc2}</span>
                </p>

                {fromType === 'signup' ? (<SignUpForm setLoggedIn={setLoggedIn} />) : (<LogInForm setLoggedIn={setLoggedIn} />)}

                <div className='flex items-center gap-1 my-3'>
                    <div className='w-[50%] bg-white h-1'></div>
                    <p>OR</p>
                    <div className='w-[50%] bg-white h-1'></div>
                </div>


                <button className='flex justify-center items-center w-[100%] gap-3 mb-5 rounded-2xl border-2 border-slate-900  py-1 hover:border-slate-700 transition-all duration-300  '>
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>

            </div>

            <div className='relative mt-20 flex justify-center items-center'>
                <img src={frameImage} alt="Pattern"  loading="lazy" 
                className='w-[80%] aspect-square'/>
                <img src={image} alt="This is image"  loading="lazy" 
                className='absolute -top-5 right-5 w-[80%] aspect-square' />

            </div>

        </div>


    )
}

export default Template
