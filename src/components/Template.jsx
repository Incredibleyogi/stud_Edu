import React from 'react'
import Signupform from './Signupform'
import Loginform from './Loginform'
import frameImage from '../assets/frame.png'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-4 gap-10">
      
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 space-y-6 text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-300 text-sm">
          <span>{desc1} </span>
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {formtype === 'signup' ? (
          <Signupform setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Loginform setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex-grow h-px bg-gray-700"></div>
          <p>OR</p>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded hover:bg-gray-800 transition">
          <img
            src="https://img.icons8.com/color/16/google-logo.png"
            alt="Google"
          />
          <span>Sign up with Google</span>
        </button>
      </div>

      {/* Right Side: Image + Frame */}
      <div className="relative w-[320px] h-[300px] hidden md:block">
        {/* Frame Image */}
        <img
          src={frameImage}
          alt="Frame"
          className="absolute top-4 left-4 w-full h-full object-contain z-0"
        />

        {/* Main Image (Inside Frame) */}
        <img
          src={image}
          alt="Main"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md z-10"
        />
      </div>
    </div>
  )
}

export default Template
