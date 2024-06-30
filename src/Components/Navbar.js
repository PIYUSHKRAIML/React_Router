import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Assets/Logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    // const onClickHandle= () => {
    //         if(onClickHandle)
    //             toast.success("SignedUp!!");
    //     }
    // function onClickHandler(e) {
    //     if(e){
            
    //         toast.success("LoggedIn!!")

    //         setIsLoggedIn(true);
    //     }
        
    // }

    


  return (
    <div className='flex justify-center items-center'>
    
        <div className='flex justify-between  w-11/12 max-w-[1160px] py-4 mx-auto'>
            <NavLink to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
            </NavLink>

            <nav>
                <ul className='text-white flex gap-x-6'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>


            <div className='flex items-center gap-x-4'>

                {   !isLoggedIn &&
                    <NavLink to="/login">
                        <button className="bg-black 
                        text-white py-[8px] px-[12px] rounded-[8px] border border-white"
                        onClick = { () => {
                            
                            setIsLoggedIn(true);
                            
                            // if(true)
                            // {
                            //     toast.success("LogIn Page!!");
                            //     return;
                            // }
                            // toast.success("LogIn Page!!");
                            
                        }}
                        >
                            
                            Log in
                        </button>
                    </NavLink>
                }

                {   !isLoggedIn &&
                    <NavLink to="/signup">
                        <button className="bg-black 
                        text-white py-[8px] px-[12px] rounded-[8px] border border-white"
                        onClick={ () => {

                        
                            // toast.success("SignupPage!!");
                            
                        }}
                        >
                            Signup
                        </button>
                    </NavLink>
                }

                {   isLoggedIn &&
                    <NavLink to="/">
                        <button className="bg-black 
                        text-white py-[8px] px-[12px] rounded-[8px] border border-white"
                        onClick={() => {
                            setIsLoggedIn(false);
                            
                            // toast.warning("Loggedout!!");
                            
                        }}>
                            Logout
                        </button>
                    </NavLink>
                }

                {   isLoggedIn &&
                    <NavLink to="/dashboard">
                        <button className="bg-black 
                        text-white py-[8px] px-[12px] rounded-[8px] border border-white"
                        onClick={() => {

                            
                            // toast.success("Welcome..!!");
                            
                        }}>
                            Dashboard
                        </button>
                    </NavLink>
                }

            </div>
        </div>
        

        <ToastContainer />
              
    </div>
  )
}

export default Navbar;