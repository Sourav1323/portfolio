import React from 'react'
import "./NavBar.scss"
const NavBar = () => {
  return (
    <div className='navbar'>
    <div className='wrapper'>
   <span> <span className='name'>Sourav </span>Gupta</span>
        <div className='socials'>
            <a href='#'><img src="../../../public/linkedin.png"></img> </a>
            <a href='#'><img src="../../../public/github.png"></img> </a>
            <a href='#'><img src="../../../public/instagram.png"></img> </a>
        </div>
    </div>
      
    </div>
  )
}

export default NavBar
