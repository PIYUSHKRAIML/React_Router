import React from 'react'
import frameImage from "../Assets/frame.png"
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto gap-x-12 gap-y-0 my-10">
    
        <div className='w-11/12 max-w-[450px]'>

            <h1 className="text-white 
            font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            
            <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                <span className="text-white">{desc1}</span>
                <br/>
                <span className="text-green-200">{desc2}</span>
            </p>

            {formtype === "signup" ?

                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)

            }

            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-white"></div>
                <p className="text-white font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-white"></div>
            </div>


            <button className="w-full flex justify-center items-center rounded-[8px] font-medium 
            text-white border border-white px-[12px] py-[8px] gap-x-2 mt-6">
            <FcGoogle/>
                <p>Sign in with Google</p>
            </button>


        </div>

        <div className="relative w-11/12 max-w-[450px]">

            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
            >

            </img>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                    className='absolute  -top-4 right-4'
            >

            </img>


        </div>
    
    </div>
  )
}

export default Template;