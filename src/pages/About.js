import React from 'react'
import MovingText from 'react-moving-text'
import MovingComponent from 'react-moving-text'
import deepanshuImg1 from '../assets/deep.jpg';
import deepanshuImg2 from '../assets/deep2.jpg';
import './About.css';

const About = () => {



    return (
        <div className='flex flex-col   h-max bg-black text-white py-[2rem] '>


            <div className='flex  justify-around mx-10 my-20 flex-col sm:flex-row gap-4' >
                <div className='mx-4'>
                    <img src={deepanshuImg1} alt="deepanshu" className='vibrate rounded-lg  border-red-100 border-2 ' />
                </div>

                <div className='  flex flex-col justify-center items-center'>
                    <p className='text-4xl mt-1  text-neutral-400 '>
                        <MovingText
                            type="fadeIn"
                            duration="4000ms"
                            delay="1s"
                            direction="normal"
                            timing="ease"
                            iteration="infinite"
                            fillMode="none">
                            I am ...
                        </MovingText></p>
                    <br />
                    <p className='text-2xl sm:text-4xl mt-1 text-yellow-500 w-[30rem]'>
                        <MovingComponent type="typewriter"
                            dataText={[
                                'Deepanshu Singhal',
                                'Programming Enthusiast',
                                'Full Stack Developer',
                                'Competitive Programmer'
                            ]} />
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-around mx-4 flex-col lg:flex-row gap-4' >

                <div className='max-w-[600px]  text-center flex justify-center items-center m-2'>


                    <MovingComponent
                        type='popIn'
                        duration="1000ms"
                        timing="linear"
                        fillMode="none"
                        iteration={1}>
                        <p className='text-xl text-justify mt-[1rem] '>
                            Hello there! I am currently pursuing my B.Tech in Computer Science and Engineering, and I am in my second year. As a programming enthusiast, I have honed my skills in C, C++, and Python and have a strong understanding of Data Structures and Algorithms. Additionally, I have knowledge of DBMS and SQL queries.
                        </p>
                    </MovingComponent>


                </div>
                <div className='mx-4'>
                    <img src={deepanshuImg2} alt="deepanshu" className='rounded-lg  border-red-100 border-2 ' />
                </div>
            </div>
        </div>
    )
}

export default About
