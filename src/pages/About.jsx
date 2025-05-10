import React from 'react'
import cvFile from "../assets/AbhijeetSinghRawat_resume.pdf";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";


const About = () => {
  return (
    <div className='flex flex-col w-full mt-5'>

        <div className='w-[full] relative h-[10vh] flex justify-center items-center '>

            <div className='text-7xl font-extrabold text-gray-700'>
                RESUME
            </div>
            <div className='absolute text-4xl font-bold'>
                ABOUT <span className='text-yellow-500 '>ME</span>
            </div>
        </div>

        <div className='flex flex-col items-center mt-5'>
          <div className=''>
              <div className='text-3xl font-semibold'>PERSONAL INFO:</div>
              <div className='flex flex-col gap-2 p-4'>
                  <div>
                    <div className='flex gap-2 text-lg'>First Name : <div className='text-gray-400'>Abhijeet</div></div>
                    <div className='flex gap-2 text-lg'>Last Name : <div className='text-gray-400'>Rawat</div></div>
                    <div className='flex gap-2 text-lg'>Age : <div className='text-gray-400'>21</div></div>
                    <div className='flex gap-2 text-lg'>Freelance : <div className='text-green-400'>Available</div></div>
                    <div className='flex gap-2 text-lg'>Phone : <div className='text-gray-400'>+91 91491 87519</div></div>
                    
                  </div>
                  <div>
                    <div className='flex gap-2 text-lg'>LinkedIn : <Link to="https://www.linkedin.com/in/abhijeet-singh-rawat-8079011ab/" className='text-blue-400'>Click Here!</Link></div>
                    
                    <div className='flex gap-2 text-lg'>Nationality : <div className='text-gray-400'>Indian</div></div>
                    <div className='flex gap-2 text-lg'>Address : <div className='text-gray-400'>Kotdwara, Uttarakhand</div></div>
                    <div className='flex gap-2 text-lg'>E-mail : <div className='text-gray-400'>rawatab2@gmail.com</div></div>
                    <div className='flex gap-2 text-lg'>Languages : <div className='text-gray-400'>Hindi,English</div></div>
                  </div>
              </div>

          </div>
          <div></div>
        </div>

        <div className='w-full flex justify-center items-center h-[10vh]'>
          
              <a
                href={cvFile}
                download="AbhijeetSinghRawat_Resume.pdf"
                className='border relative text-xl border-yellow-500 h-[7vh] w-[70vw] flex justify-center items-center hover:bg-yellow-500 transition-all duration-500 ease-out rounded-full'
              >
                Download CV
                <div className='h-[7vh] w-[7vh] rounded-full flex justify-center items-center absolute right-0 bg-yellow-500'><FaDownload /></div>
              </a>
          
        </div>

        <div className='flex flex-col p-5 mt-5 gap-3'>
          <div className='flex flex-col gap-3' >
            <div className=' border border-gray-500 h-[20vh] rounded-xl p-7  '>
              <div className='text-5xl font-semibold text-yellow-500 '> 2+</div>
              <div className='text-xl font-medium'>- Years of experience with MERN Stack</div>
            </div>
            <div className=' border border-gray-500 h-[20vh] rounded-xl p-7  '>
              <div className='text-5xl font-semibold text-yellow-500 '>350+</div>
              <div className='text-xl font-medium'>- Questions done on GFG</div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className=' border border-gray-500 h-[20vh] rounded-xl p-7  '>
              <div className='text-5xl font-semibold text-yellow-500 '>
                2+
              </div>
              <div className='text-xl font-medium'>
                - Years of hands on project experience 
              </div>
            </div>
            <div className=' border border-gray-500 h-[20vh] rounded-xl p-7  '>
              <div className='text-5xl font-semibold text-yellow-500 '>
                3+
              </div>
              <div className='text-xl font-medium'>
                - Years of experience with DSA
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center text-4xl  mb-5 font-semibold'>My Skills:</div>

        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="56" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">C/C++</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="26" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">DSA</div>
                </div>
            </div>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="26" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">HTML</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="26" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">CSS</div>
                </div>
            </div>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="50" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">JavaScript</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="50" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">ReactJs</div>
                </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="56" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">ExpressJs</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="56" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">MongoDB</div>
                </div>
            </div>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="65" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">NodeJs</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="26" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">TailwindCSS</div>
                </div>
            </div>
            <div className='flex gap-2'>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="113" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">NextJS</div>
                </div>
              <div className="h-[20vh] w-[20vh] relative flex justify-center items-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="45" fill="#2D3748" />
                    
                    {/* 60% Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="gold"
                      strokeWidth="5"
                      strokeDasharray="283"  /* 2πr ≈ 283 (100% circumference) */
                      strokeDashoffset="113" /* 283 × 0.4 = 113.2 (showing 60%) */
                      transform="rotate(-90 50 50)" /* Start from top */
                    />
                  </svg>
                  <div className="relative z-10 text-white text-xl">SQL</div>
                </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center text-4xl  mb-5 font-semibold mt-8'>Education:</div>

        <div className='flex w-full p-5 gap-4'>
          <div className='flex relative flex-col'>
            <div className='w-[8vh] h-[8vh] rounded-full z-10 flex justify-center items-center bg-yellow-500'>
              <FaBriefcase className='text-2xl '/>
            </div>
            <div className='w-[1px] absolute left-[4vh] h-[47vh] bg-gray-400'>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
              <div className='bg-gray-500 w-[30vw] h-[4vh] flex justify-center items-center rounded-full'>2021 - 2025</div>
              <div className='text-2xl font-semibold'>Bachelor of Technology - College of Technology, Pantnagar</div>
              <div className='text-gray-300'>Pursuing Bachelor of Technology from College of Technology, Pantnagar in Information Technology.</div>
              <div className='text-xl font-medium'>CGPA : 7.70</div>
          </div>
        </div>

        <div className='flex w-full p-5 gap-4'>
          <div className='flex relative flex-col'>
            <div className='w-[8vh] h-[8vh] rounded-full z-10 flex justify-center items-center bg-yellow-500'>
              <FaBriefcase className='text-2xl '/>
            </div>
            <div className='w-[1px] absolute left-[4vh] h-[43vh] bg-gray-400'>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
              <div className='bg-gray-500 w-[30vw] h-[4vh] flex justify-center items-center rounded-full'>2020</div>
              <div className='text-2xl font-semibold'>Intermediate - M.K.V.N Sr. Sec. School, Kotdwara</div>
              <div className='text-gray-300'>Completed Intermediate in Physics, Chemistry and Mathematics from M.K.V.N Sr. Sec. School, Kotdwara </div>
              <div className='text-xl font-medium'>Percentage : 93.2%</div>
          </div>
        </div>

        <div className='flex w-full p-5 gap-4'>
          <div className='flex relative flex-col'>
            <div className='w-[8vh] h-[8vh] rounded-full z-10 flex justify-center items-center bg-yellow-500'>
              <FaBriefcase className='text-2xl '/>
            </div>
            <div className='w-[1px] absolute left-[4vh] h-[37vh] bg-gray-400'>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
              <div className='bg-gray-500 w-[30vw] h-[4vh] flex justify-center items-center rounded-full'>2018</div>
              <div className='text-2xl font-semibold'>High School - M.K.V.N Sr. Sec. School, Kotdwara</div>
              <div className='text-gray-300'>Completed High-School from M.K.V.N Sr. Sec. School, Kotdwara</div>
              <div className='text-xl font-medium'>Percentage : 93.8%</div>
          </div>
        </div>

    </div>
  )
}

export default About
