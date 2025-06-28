import React from 'react'
import Signupform from './Signupform'
import Loginform from './Loginform'
import frameImage from '../assets/frame.png'


const Template = (title,desc1,desc2,image,formtype,setIsLoggedIn) => {
  return (
    <div>
    <div>
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
      </p>

      {formtype === "signup" ? 
      (<Signupform />) :
      (<Loginform />)}

     <div>
        <div></div>
        <p>OR</p>
        <div></div>
     </div>

     <button>
        <p>Sign up with Google</p>
     </button>

 </div>
  
  <div>
    <img src={frameImage} 
    alt="Frame"
    width={557}
    height={505}
    loading='lazy' />

     <img src={image} 
    alt="image"
    width={558}
    height={504}
    loading='lazy' />
  </div>
    </div>
    
  )
}

export default Template
