import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png' 
import {toast} from 'react-hot-toast'
import React from 'react'
const Navbar = (props) => { 
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>
    <div className="flex-shrink-0">
      <Link to="/">
      <img src={Logo} alt="k" width={100} height={15} loading='lazy'/>
      </Link>
      </div>

      <nav >
        <ul className='flex gap-3'>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>

              <div  className='flex ml-5 mr-3 gap-3'>
                { !isLoggedIn &&
                  <Link to="/login">
                    <button>login</button>
                  </Link>
                }
                  { !isLoggedIn &&
                  <Link to="/signup">
                    <button onClick={()=>{
                      setIsLoggedIn(false);
                      toast.success("logged out");
                  }}>sign up</button>
                  </Link>
                }
                  { isLoggedIn &&
                  <Link to="/">
                    <button onClick={()=>{
                      setIsLoggedIn(false);
                      toast.success("logged out");
                    }}>log out</button>
                  </Link>
                }
                 {  isLoggedIn &&
                  <Link to="/dashboard">
                    <button>Dashboard</button>
                  </Link>
                }
                 
              </div>
    </div>
  )
}

export default Navbar
