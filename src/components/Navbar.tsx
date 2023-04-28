import { useState } from "react";
import {Link} from 'react-router-dom';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const signOutOnClick = () => {
      signOut(auth)
      location.reload();
    }
  
    const signInOnClick = async () => {
      const response = await signInWithPopup(auth, Providers.google);
      if ( response.user ) {
        location.reload();
      }
    }
  
    const dropDown = () => {
      setIsVisible(!isVisible)    
    };
  
    const clicked = () => {
      setIsVisible(false)
    };
  
    return (
      <nav className="flex items-center justify-between flex-wrap py-2 px-10">
          <div className="flex items-center flex-shrink-0 mr-6">
              <Link to='/' 
                onClick={ clicked }
                className="font-semibold text-lg tracking-thin">
                  The Adventurer's Hub
              </Link>
          </div>
          <div className="block">
              <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 border rounded">
                  <i className="fa-solid fa-bars"></i>
              </button>
          </div>
          { isVisible ? (
          <div className="block w-full flex-grow items-center">
              <div className="flex flex-row text-center text-sm lg:flex-grow sm:flex-shrink justify-end">
                  <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                          <Link to='/' 
                            onClick={ clicked }
                            className="flex place-items-center text-center my-1 lg:inline-block lg:mt-0">
                              Home
                          </Link>
                      </div>
                  </button>
                  {/* <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                          <Link to='/account' 
                            onClick={ clicked }
                            className="flex items-center text-center my-1 lg:inline-block lg:mt-0">
                              Account
                          </Link>
                      </div>
                  </button> */}
                  <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                          <Link to='/dashboard' 
                            onClick={ clicked }
                            className="flex items-center text-center 1 lg:inline-block lg:mt-0">
                              Dashboard
                          </Link>
                      </div>
                  </button>
                  <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                          <Link to='/about' 
                            onClick={ clicked }
                            className="flex items-center text-center 1 lg:inline-block lg:mt-0">
                              About
                          </Link>
                      </div>
                  </button>
                  {
                    !auth.currentUser ?
  
                    <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                        <Link to="/" onClick={ () => { signInOnClick() } } 
                          className="flex place-items-center 1 lg:inline-block lg:mt-0">
                          Sign In
                        </Link>
                      </div>
                    </button>
                    :
                    <button className="nav-link p-3 m-5 justify-center border rounded">
                      <div>
                        <Link to="/" onClick={ () => { signOutOnClick() } } 
                          className="flex place-items-center 1 lg:inline-block lg:mt-0">
                          Sign Out
                        </Link>
                      </div>
                    </button>
                  }
              </div>
          </div> 
          ) : (
          <></>
          ) 
        }
      </nav>
    );
  }
  
  export default Navbar