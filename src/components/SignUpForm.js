import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({ setLoggedIn }) => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', cnfPassword: '' })
    const [accountType, setAccountType] = useState("student");



    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const navigate = useNavigate();

    function showHandler1() {
        setShow1(!show1);
    }
    function showHandler2() {
        setShow2(!show2);
    }
    function changeHandler(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function submitHandler(event) {
        event.preventDefault();
        const accountData = { ...formData };
        const finalData = { ...formData, accountType }
        console.log("Prinnting final Account Data: ");
        console.log(finalData);
        if (formData.password === formData.cnfPassword) {
            toast.success("Registration Successful");


            toast.success("You are logged now!")
            navigate('/premiumCourseMenu/dashboard');

        }
        else {
            toast.error("Passwords do not match");
        }
        setLoggedIn(true);
    }







    return (
        <div>

            <div className='flex  bg-slate-500 w-min  p-[0.1rem] rounded-2xl  my-2  '>
                <button className={`${accountType === "student" ? "bg-black py-[0.2rem] px-3  rounded-2xl" : "opacity-70 py-[0.2rem] px-3  rounded-2xl"}  duration-300 transition-all `} onClick={() => setAccountType("student")}>Student</button>
                <button className={`${accountType === "student" ? "opacity-70 py-[0.2rem] px-3  rounded-2xl" : "bg-black py-[0.2rem] px-3  rounded-2xl"} duration-300 transition-all `} onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>

                <div className='flex gap-3'>
                    <label htmlFor="firstName">
                        <p className='mt-3 font-semibold'>First Name <sup>*</sup></p>
                        <input type="text" required name="firstName" id="firstName" value={formData.firstName} onChange={changeHandler} placeholder="Enter First Name"
                            className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
                    </label>

                    <label htmlFor="lastName">
                        <p className='mt-3 font-semibold'>Last Name <sup>*</sup></p>
                        <input type="text" required name="lastName" id="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Enter Last Name"
                            className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">
                        <p className='mt-3 font-semibold'>Email Address <sup>*</sup></p>
                        <input type="email" required name="email" id="email" value={formData.email} onChange={changeHandler} placeholder="Enter  Email Address"
                            className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
                    </label>
                </div>

                <div>
                    <label htmlFor="password" className='relative'>
                        <p className='mt-3 font-semibold'>Create Password <sup>*</sup></p>
                        <input type={show1 ? 'text' : 'password'} required name="password" id="password" value={formData.password} onChange={changeHandler} placeholder="Enter  Password"
                            className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
                        <span onClick={showHandler1} className="absolute z-[100] bottom-0 right-2">
                            {
                                show1 ? (<BiHide />) : (<BiShow />)
                            }
                        </span>
                    </label>

                    <label htmlFor="cnfPassword" className='relative'>
                        <p className='mt-3 font-semibold'>Confirm Password <sup>*</sup></p>
                        <input type={show2 ? 'text' : 'password'} required name="cnfPassword" id="cnfPassword" value={formData.cnfPassword} onChange={changeHandler} placeholder="Enter Confirm  Password"
                            className='w-[100%] bg-gray-600 outline-none rounded-sm py-2 px-4 text-white text-md placeholder:text-white opacity-70    shadow-inner shadow-gray-500   hover:opacity-100 transition-all duration-300 ' />
                        <span onClick={showHandler2} className="absolute z-[100] bottom-0 right-2" >
                            {
                                show2 ? (<BiHide />) : (<BiShow />)
                            }
                        </span>
                    </label>

                </div>

                <button to="#" className='bg-yellow-300 text-black w-[100%] mt-8 py-2 font-semibold rounded-md animate-pulse '>
                    Create Account
                </button>



            </form>



        </div>
    )
}

export default SignUpForm
