import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
      const [position, setPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
        const mouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
          window.removeEventListener("mousemove", mouseMove);
        };
      }, []);

  return (
    <motion.div
    className='w-10 h-10 rounded-full border-2 border-content fixed z-[999]   shadow-md shadow-content'
      animate={{ x: position.x+5 , y: position.y+5 }}
    ></motion.div>
  );
}

export default Cursor