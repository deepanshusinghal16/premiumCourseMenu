import React from 'react';
import Template from '../components/Template';
import loginImg from '../assets/login.png';

const Login = ({ setLoggedIn }) => {
  return (
    <div className='bg-black h-[100vh]'>
      <Template title="Welcome Back" desc1="Build Skill for today, tommorow anmd beyond." desc2="Education to future-proof your career."
      image={loginImg} fromType="login" setLoggedIn={setLoggedIn} />
    </div>
  )
}

export default Login
