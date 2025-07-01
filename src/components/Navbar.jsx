import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png' 
import { toast } from 'react-hot-toast'
import React from 'react'

const Navbar = (props) => { 
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-28 h-auto" loading="lazy" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/" className="hover:text-yellow-400 transition">Contact</Link>
        <Link to="/" className="hover:text-yellow-400 transition">About</Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        { !isLoggedIn && (
          <>
            <Link to="/login">
              <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">Login</button>
            </Link>
            <Link to="/signup">
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}

        { isLoggedIn && (
          <>
            <Link to="/">
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out");
                }}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Log Out
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
