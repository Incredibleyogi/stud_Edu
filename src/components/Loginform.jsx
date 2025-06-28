import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Loginform = () => {
    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
   
    function changeHandler(e) {
  setFormData((prevData) => ({
     ...prevData,
     [e.target.name]: e.target.value
  }));

}
return (
      <form >
      <label >
       <p>
        Email Address <sup>*</sup>
       </p>
        <input 
        required
          type="email" 
          name="email" 
          placeholder='Enter your Email' 
          value={formData.email} 
          onChange={changeHandler} 
        />
        </label>

        <label>
       <p>
        Password <sup>*</sup>
       </p>
          <input 
          required
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder='Enter Password' 
            value={formData.password} 
            onChange={changeHandler} 
            
          />
          <span onClick={() => setShowPassword((prev)=>!prev)}> 
          {showPassword ? (
            <AiOutlineEyeInvisible/>) : (<AiOutLineEye/>)}
          </span>
          <Link to="#">
            <p>
                Forgot Password
            </p>
          </Link>
          </label>
        <button>
            Sign in 
        </button>
      </form>
    
)

}
export default Loginform
