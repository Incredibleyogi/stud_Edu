import React from 'react'
import Template from './Template'
import signupImg from '../assets/signup.jpg'

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 py-8 text-white">

      {/* Top Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">Welcome to StudEdu</h1>
        <p className="text-lg text-gray-400 mt-2">Empowering the excellence in you</p>
        <p className="text-base text-blue-400 italic">We Teach to Brighten Your Future</p>
      </div>

      {/* Form Template */}
      <Template
        title="Join the millions learning to code with StudEdu for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="signup"
        image={signupImg}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
