import React from 'react'
import signupImg from "../Assets/signup.png"
import Template from '../Components/Template'

const Signup = ({setIsLoggedIn}) => {

  return (
    
    <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup;