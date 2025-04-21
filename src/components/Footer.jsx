import React, { useContext } from 'react'
import Logo from './../assets/svg/slick-logo-white.svg'
import Subscribe from './Subscribe'
import { FaGithub, FaCodepen, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MyContext } from '../context/MyContext';

const Footer = () => {
  const {t} = useContext(MyContext);
  return (
    <section id="footer" className='w-full bg-black flex flex-col items-center justify-center' >
    <div className='w-full bg-black flex flex-col items-center justify-center' style={{maxWidth: "1920px"}}>
        <div className='w-[80%] mt-8'><img className='w-[200px]' src={Logo} alt="Slik Pizza"/></div>
        <div className='w-[80%] py-4 border-b border-gray-300 flex items-center gap-2'></div>
        <Subscribe/>
        
        

    <div className="container px-6 pt-6">
    <div className="flex justify-center mb-6">
      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href='https://www.linkedin.com/in/albertup' target="_blank" type="button" className="flex items-center justify-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2 text-[150%]">
        <FaLinkedinIn/>
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href='http://twitter.com/Albertupgrade' target="_blank" type="button" className="flex items-center justify-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2 text-[150%]">
        <FaTwitter/>
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href='http://codepen.io/albertup' target="_blank" type="button" className="flex items-center justify-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2 text-[150%]">
        <FaCodepen/>
      </motion.a>

      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href='http://github.com/albertup' target="_blank" type="button" className="flex items-center justify-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2 text-[150%]">
        <FaGithub/>
      </motion.a>
    </div>

    

    <div className="grid mt-10 lg:grid-cols-3 grid-cols-3">
      <div className="mb-6 flex flex-col text-center items-center justify-center">
      <h5 className="text-white text-[22px] text-center font-Bebas tracking-widest border-spacing-2 border-b-2 border-primary">{t('Menu')}</h5>
        <ul className="list-none mb-0 mt-2">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="/#home" className="text-white">{t('Home')}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="/#menu" className="text-white">{t('Menu')}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="/#about" className="text-white">{t('About')}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="/#service" className="text-white">{t('Service')}</a>
          </motion.li>
        </ul>
      </div>

      <div className="mb-6 flex flex-col text-center items-center justify-center">
        <h5 className="text-white text-[22px] text-center font-Bebas tracking-widest border-spacing-2 border-b-2 border-primary">SOCIAL</h5>
        <ul className="list-none mb-0 mt-2">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/albertup" className="text-white">LinkedIn</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="http://twitter.com/Albertupgrade" className="text-white">Twitter</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="http://codepen.io/albertup" className="text-white">CodePen</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="http://github.com/albertup" className="text-white">Github</a>
          </motion.li>
        </ul>
      </div>
      
      <div className="mb-6 flex flex-col text-center items-center justify-center">
      <h5 className="text-white text-[22px] text-center font-Bebas tracking-widest border-spacing-2 border-b-2 border-primary">Legal</h5>
        <ul className="list-none mb-0 mt-2">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#!" className="text-white">Legal</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#!" className="text-white">Service</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#!" className="text-white">Privacy</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#!" className="text-white">Terms</a>
          </motion.li>
        </ul>
      </div>
    </div>
  </div>
  <div className='w-[80%] py-4 border-b border-gray-300 flex items-center gap-2'></div>
        <div className='w-full mt-2 flex flex-row'>
            <span className='w-full text-center block text-sm pb-6 text-zinc-300'>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
            <span className='w-full text-center block text-sm pb-6 text-zinc-300'>Made with &hearts; by &nbsp;<a href="https://personal-portfolio-zeta-one.vercel.app/" target="_blank" rel="noreferrer">AGDsigns</a></span>
        </div>
        
    </div>
    </section>
  )
}

export default Footer