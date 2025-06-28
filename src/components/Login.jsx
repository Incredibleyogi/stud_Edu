import React from 'react'
import loginImg from '../assets/login.png'
import Template from './Template'
import { Link } from 'react-router-dom'
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome back"
        desc1="Empowering the excellence in you"
        desc2="We Teach to brighten your future"
        formtype="login"
        
        image={loginImg}
       setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
