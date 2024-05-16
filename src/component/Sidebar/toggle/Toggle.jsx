import React from 'react';
import {motion} from "framer-motion";
const Toggle = ({setOpen}) => {
  return (
    
      <button onClick={()=>setOpen(prev=>!prev)}>
<svg width="23" height="23" viewBox="0 0 24 24" fill="none">
<motion.path
          d="M4 18L20 18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed:{d:"M 2 2.5 L 20 2.5"},
            open:{d:"M 3 16.5 L 17 2.5"},
          }}
        />
        <motion.path
         
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={
            {
              open: {opacity : 0},
              closed:  {opacity : 1},
            }
          }
        />

<motion.path
          d="M4 6L20 6"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed:{d:"M 2 16.346 L 20 16.346"},
            open:{d:"M 3 2.5 L 17 16.346"},
       }}
/></svg>
      </button>
   
  )


}

export default Toggle
