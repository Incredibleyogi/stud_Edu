import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Signupform = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState("student")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      {/* Role Switcher */}
      <div className="flex bg-gray-800 w-max rounded-full mb-6 overflow-hidden">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium transition-all duration-200
          ${accountType === 'student'
              ? 'bg-yellow-400 text-black'
              : 'text-white hover:bg-blue-400/20'}`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium transition-all duration-200
          ${accountType === 'instructor'
              ? 'bg-yellow-400 text-black'
              : 'text-white hover:bg-blue-400/20'}`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      {/* First & Last Name */}
      <div className="flex gap-4">
        <label className="w-1/2 text-sm">
          First Name <sup className="text-red-500">*</sup>
          <input
            required
            name="firstName"
            type="text"
            onChange={changeHandler}
            value={formData.firstName}
            placeholder="Enter first name"
            className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </label>
        <label className="w-1/2 text-sm">
          Last Name <sup className="text-red-500">*</sup>
          <input
            required
            name="lastName"
            type="text"
            onChange={changeHandler}
            value={formData.lastName}
            placeholder="Enter last name"
            className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </label>
      </div>

      {/* Email */}
      <label className="text-sm block">
        Email Address <sup className="text-red-500">*</sup>
        <input
          required
          name="email"
          type="email"
          onChange={changeHandler}
          value={formData.email}
          placeholder="Enter email address"
          className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </label>

      {/* Passwords */}
      <div className="flex gap-4">
        <label className="w-1/2 text-sm relative">
          Create Password <sup className="text-red-500">*</sup>
          <input
            required
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={changeHandler}
            value={formData.password}
            placeholder="Enter password"
            className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700 pr-10"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-lg text-gray-400"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label className="w-1/2 text-sm relative">
          Confirm Password <sup className="text-red-500">*</sup>
          <input
            required
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            onChange={changeHandler}
            value={formData.confirmPassword}
            placeholder="Re-enter password"
            className="mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700 pr-10"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-lg text-gray-400"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
      >
        Create Account
      </button>

      
    </form>
  )
}

export default Signupform
