import React from 'react'
import Template from '../components/Template'
import signUpImg from '../assets/signup.png';


const Signup = ({ setLoggedIn }) => {
  return (
    <div className='bg-black h-[100vh]'>
      <Template title="Join us! Thrive." desc1="Embark on a journey of growth and discovery with us." desc2="Unlock your full potential with our education."
        image={signUpImg} fromType="signup" setLoggedIn={setLoggedIn} />
    </div >
  )
}

export default Signup
