import React from 'react'
import Template from './Template'
import signupImg from '../assets/signup.png'
import { Link } from 'react-router-dom'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
              title="Welcome back"
              desc1="Empowering the excellence in you"
              desc2="We Teach to brighten your future"
              formtype="signup"
              
              image={signupImg}
           setIsLoggedIn={setIsLoggedIn}
            />
    </div>
  )
}

export default Signup
