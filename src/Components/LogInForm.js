import React from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LogInForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
                
            }
        ))
    }

    function submitHandler(event){

        event.preventDefault();

        setIsLoggedIn(true);
        
        navigate("/dashboard");

        
        // toast.success("Logged In");
        
    
    }

return (
    
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>

            <label className='w-full'>
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Email Address<sup className='text-white'>*</sup>
                </p>
            
                <input
                    required
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    className='bg-white rounded-[0.5rem] text-black w-full p-[12px]'>

                </input>
            </label>


            <label className='w-full relative'>
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Password<sup className='text-white'>*</sup>
                </p>
            
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    className='bg-white rounded-[0.5rem] text-black w-full p-[12px]'>

                </input>

                <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)} >
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24}/>): (<AiOutlineEye fontSize={24}/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto'>
                        Forgot Password?
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-500 rounded-[8px] font-medium  text-black px-[12px] py-[8px]
                mt-6'>
                Sign In
            </button>

            

            <ToastContainer/>
        </form>

        

  )
}

export default LogInForm;