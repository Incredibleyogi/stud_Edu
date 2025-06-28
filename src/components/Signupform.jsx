import React from 'react'
import {AiOutLineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react';

const Signupform = ({set}) => {
     
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
       ,confirmPassword: "" 
    });

    const [showPassword, setShowPassword] =useState(false);
    function changeHandler(e) {
  setFormData((prevData) => ({
     ...prevData,
     [e.target.name]: e.target.value
  }));

}
  return (
    <div>
      <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
      </div>
 
       <form>
       {/* first and last name */}
      <div>
         <label >
        <p>First Name<sup>*</sup></p>
        <input 
        required
         name="firstName"
        type="text"
        onChange={changeHandler}
        placeholder='Enter First Name'
        value={formData.firstName}
         />
        </label>
        <label>
            <p>Last Name<sup>*</sup></p>
            <input 
              required
         name="lastName"
        type="text"
        onChange={changeHandler}
        placeholder='Enter Last Name'
        value={formData.lastName}
         />
        </label>
      </div>
         {/* email */}
         <label>
        <p>Email Address<sup>*</sup></p>
        <input 
        required
         name="email"
        type="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter your Email'/>
       </label>

          <div>
            <label>
                <p>Create Password<sup>*</sup></p>
                <input 
                required
                name='password'
                type={showPassword ?("text"):("password")} 
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formData.password}
                />
                 <span onClick={() => setShowPassword((prev)=>!prev)}> 
                          {showPassword ? (
                            <AiOutlineEyeInvisible/>) : (<AiOutLineEye/>)}
                          </span>
            </label>

              <label>
                <p>Confirm Password<sup>*</sup></p>
                <input 
                required
                name='confirmpassword'
                type={showPassword ?("text"):("password")} 
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formData.confirmPassword}
                />
                 <span onClick={() => setShowPassword((prev)=>!prev)}> 
                          {showPassword ? (
                            <AiOutlineEyeInvisible/>) : (<AiOutLineEye/>)}
                          </span>
            </label>


          </div>

          <button>
            Create Account
          </button>
       </form>

    

    </div>
  )
}

export default Signupform
