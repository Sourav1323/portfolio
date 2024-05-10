import React from 'react'
import "./NavBar.scss"
import{motion} from "framer-motion"
import SideBar from './Sidebar/SideBar'
const NavBar = () => {
  return (
    <div className='navbar'>
    <SideBar/>
    <div className='wrapper'>
   <motion.span  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='name1'> <span className='name'>Sourav </span>Gupta </motion.span>
  
        <motion.div  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}className='socials'>
            <a href='https://www.linkedin.com/in/sourav-gupta-3ab283228/'><img src="../../../public/linkedin.png"></img> </a>
            <a href='https://github.com/Sourav1323'><img src="../../../public/github.png"></img> </a>
            <a href='https://www.instagram.com/so.urav502/'><img src="../../../public/instagram.png"></img> </a>
        </motion.div>
    </div>

    </div>
  )
}

export default NavBar
