import React from 'react'
import loginImg from '../assets/login.jpg'
import Template from './Template'

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 py-8 text-white">
      
      {/* Top Welcome Text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">Welcome Back to StudEdu</h1>
        <p className="text-lg text-gray-400 mt-2">Empowering the excellence in you</p>
        <p className="text-base text-blue-400 italic">We Teach to Brighten Your Future</p>
      </div>

      {/* Login Form inside Template */}
      <Template
        title="Login to your StudEdu Account"
        desc1="Access your personalized dashboard"
        desc2="and continue your learning journey!"
        formtype="login"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
