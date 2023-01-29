import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const FreshHealthy = () => {

    const [{ foodItems }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);
  
        useEffect(() => {}, [scrollValue]);

  return (
    
    <section className="w-full my-6 px-4 lg:px-16 py-4 pt-20 pb-48" style={{maxWidth: "1920px"}}>
    <div className="lg:container mx-auto px-4">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-gray-400 to-gray-600 transition-all ease-in-out duration-100">
           Our fresh & healthy fruits
        </p>

        <div className="hidden lg:flex gap-3 items-center">
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-gray-300 hover:bg-gray-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(-1600)}
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-gray-300 hover:bg-gray-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(1600)}
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "frutti")}
        />
        </div>
    </section>
    
  )
}

export default FreshHealthy