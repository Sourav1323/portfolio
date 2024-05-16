import React from 'react'
import {motion} from "framer-motion"
const Link = () => {
  const variants={
    open:{
      transition:{
        staggerChilderen:0.1,
      }
    },
    close:{
      transition:{
        staggerChilderen:0.05,
        staggerDirection:-1,
      },
    },
  };
  const itemsvariants={
    open:{
      y:0,
      opacity:1,
    },
    closed:{
      y:1,
      opacity:0,
    }
  };
  const items=["Homepage","Services","Portfolio","Contact","About"]
  return (
    <motion.div className='li' variants={variants}>
      {items.map((items)=>(
        <motion.a href={`#${items}`} key={items}  variants={itemsvariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>{items}</motion.a>
      ))}
    </motion.div>
  )
}

export default Link
