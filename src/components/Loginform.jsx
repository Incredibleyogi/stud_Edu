import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Loginform = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function submitHandler(e) {
    e.preventDefault()
    setIsLoggedIn(true)
    toast.success("Login Successful")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler} className="space-y-5 text-white">

      {/* Email */}
      <label className="block text-sm">
        Email Address <sup className="text-red-500">*</sup>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={changeHandler}
          className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </label>

      {/* Password */}
      <label className="block text-sm relative">
        Password <sup className="text-red-500">*</sup>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
          className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700 pr-10"
        />
        <span
          className="absolute right-3 top-9 cursor-pointer text-lg text-gray-400"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#" className="text-xs text-blue-400 hover:underline mt-2 inline-block">
          Forgot Password?
        </Link>
      </label>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
      >
        Sign In
      </button>
    </form>
  )
}

export default Loginform
