import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    };


    function submitHandler(event){

        event.preventDefault();

        if(formData.password !== formData.confirmpassword){

            toast.error("Password do not match!!");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created!!");
        const accountData = {
            ...formData
        };
        console.log("printing accountData...");
        console.log(accountData);

        navigate("/dashboard");

    };


  return (

    <div className='flex flex-col'>



        <div className='flex  items-center gap-x-4 mb-4'>
            <button className='bg-yellow-500 rounded-[8px] font-medium  text-black px-[12px] py-[8px]
                mt-6'>
                Student
            </button>

            <button className='bg-yellow-500 rounded-[8px] font-medium  text-black px-[12px] py-[8px]
                mt-6'>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            
            <div className='mb-2'>

                <label className='w-full '>
                    <p className="text-[0.875rem] text-white  leading-[1.375rem mb-2">
                    First Name<sup className='text-white'>*</sup></p>

                    <input
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter your first name"
                        value={formData.firstname}
                        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] mb-2'
                        >

                    </input>
                </label>

                <label className='w-full'>
                    <p className="text-[0.875rem] text-white  leading-[1.375rem] mb-2 ">
                    Last Name<sup className='text-white'>*</sup></p>

                    <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter your last name"
                        value={formData.lastname}
                        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] mb-2 '
                        >

                    </input>
                </label>
            </div>

            <label className='w-full mb-2'>
                <p className="text-[0.875rem] text-white  leading-[1.375rem] mb-2 ">
                Email Address<sup className='text-white'>*</sup></p>

                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your email address"
                    value={formData.email}
                    className='bg-white rounded-[0.5rem] text-black w-full p-[12px] mb-2 '
                    >

                </input>
            </label>

            <div className='mb-2'>

                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-white  leading-[1.375rem] mb-2 ">
                    Create Password<sup className='text-white'>*</sup></p>

                    <input
                        required
                        type={showPassword1 ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] mb-2 '
                        >


                        

                    </input>
                    <span className='absolute right-[-438px] top-[58px] cursor-pointer z-10 text-red-400'
                    onClick={() => setShowPassword1((prev) => !prev)} >
                        {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24}/>): (<AiOutlineEye fontSize={24}/>)}
                    </span>
                   
                </label>


                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-white  leading-[1.375rem] mb-2 ">
                    Confirm Password<sup className='text-white'>*</sup></p>

                    <input
                        required
                        type={showPassword2 ? ("text") : ("password")}
                        name="confirmpassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmpassword}
                        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] relative mb-2 '
                        >

                    </input>

                    <span className='absolute right-3 top-[82px] cursor-pointer z-10 text-red-400'
                    onClick={() => setShowPassword2((prev) => !prev)} >
                        {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24}/>): (<AiOutlineEye fontSize={24}/>)}
                    </span>
                </label>


            </div>

            <button className='bg-yellow-500 rounded-[8px] font-medium  text-black px-[12px] py-[8px]
                mt-6'>
                Create Account
            </button>
        </form>

        <ToastContainer/>

    </div>
  )
}

export default SignupForm;