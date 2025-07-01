import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import { useState } from 'react'
import Footer from './components/Footer';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes> 
         <Route path="/" element ={<Home/>}/>
            <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
   <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="dashboard" element ={<Dashboard/>}/>
         <Route path="/about" element={<About />} />
          
      </Routes>
    </div>
  )
}

export default App
