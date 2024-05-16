import React, { useState } from "react";
import "./SideBar.scss";
import Toggle from "./toggle/Toggle";
import{delay,motion} from "framer-motion";
import Link from "./link/Link";
const SideBar = () => {
  const  [open,setOpen]=useState(false);
  const variants={
    open :{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:"20",
      }
    },
    closed :  {
       clipPath:"circle(20px at 30px 30px)",
       transition:{
        delay:"0.0",
        type:"spring",
        stiffness:"400",
        damping:"40",
       },

    },
  };
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
      <motion.div className="link" variants={variants}> 
        <Link/>
      
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
