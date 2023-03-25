import React from 'react'
import Template from '../components/Template'
import signUpImg from '../assets/signup.png';


const Signup = ({ setLoggedIn }) => {
  return (
    <div className='bg-black h-[100vh]'>
      <Template title="Welcome Back" desc1="Build Skill for today, tommorow anmd beyond." desc2="Education to future-proof your career."
        image={signUpImg} fromType="signup" setLoggedIn={setLoggedIn} />
    </div >
  )
}

export default Signup
