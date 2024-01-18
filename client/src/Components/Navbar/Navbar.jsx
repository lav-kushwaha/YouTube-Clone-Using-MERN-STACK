import React from 'react'
import './Navbar.css'
// import logo from './Components/Navbar/youtubelogo.png'
import logo from './youtubelogo.png'
const Navbar = ()=>{
    return(
        <div className="Container_Navbar">
            <div className="Burger_Logo_Navbar">
                <div className="burger">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
               <div className='logo_div_Navbar'>
                 <img src={logo} alt="youtube-logo" />
                 <p className='logo-title-navbar'>YouTube</p>
               </div>
            </div>
        </div>
    )
}
export default Navbar;