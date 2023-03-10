import React, { useContext, useEffect, useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout, MdHome, MdRestaurantMenu, MdInfo, MdDeliveryDining, MdLanguage } from 'react-icons/md';
import { FaPizzaSlice } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PizzaFlat from "./../assets/img/pizza-flat.webp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from './../assets/svg/slick-logo-black.svg';
import Avatar from './../assets/svg/avatar.svg';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { MyContext } from '../context/MyContext';


const Header = () => {
  const {t} = useContext(MyContext);
  const {changeLanguaje}=useContext(MyContext);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false)

  const [isMdMenu, setIsMdMenu] = useState(false)

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  


  const mdMenu = () => {
    setIsMdMenu(!isMdMenu);
  }


  const login = async () => {
    if(!user){
      const {user: {refreshToken, providerData},} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type : actionType.SET_USER,
        user : providerData[0],

      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }else{
      setIsMenu(!isMenu);
    }
  };

  

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type : actionType.SET_USER,
      user : null
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <>
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>

      {/*desktop & tablet*/}
      <div className='hidden lg:flex w-full h-full items-center justify-between pr-6 pl-6'>
        <Link to={'/'} className='flex items-center gap-1'>
          <motion.img initial={{opacity: 0, x: 600}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 600}} className={`w-64 p-4 object-cover ${!top && 'p-2 w-44'} `} src={Logo} alt="Logo"></motion.img>
        </Link>
        <div className=' flex items-center gap-8'>
          <motion.ul initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 200}} className=' flex items-center gap-8'>
            <li ><a href="/#home" className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700'>{t('Home')} </a></li>
            <li ><a href="/#menu" className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700'>{t('Menu')} </a></li>
            <li ><a href="/#about" className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700'>{t('About')} </a></li>
            <li ><a href="/#service" className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700'>{t('Service')} </a></li>
            <li className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
            <span className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700' onClick={()=>changeLanguaje('en')}>EN</span>/<span className='font-Staatliches tracking-widest text-[1.2rem] text-base text-textColor hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer hover:border-b-2 hover:border-gray-700' onClick={()=>changeLanguaje('es')}>ES</span></li>
          </motion.ul>
          <div className='realtive flex items-center justify-center' onClick={showCart}>
            <MdShoppingBasket className='text-textColor text-3xl cursor-pointer'/>
              <div className='relative -top-2 right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
          </div>
          <div className='relative'>
            <motion.img 
            onClick={login} 
            whileTap={{scale: 0.6}} 
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
            src={user ? user.photoURL : Avatar} 
            alt="userprofile"/>
            {
                isMenu && (
                  <motion.div initial={{ opacity: 0, scale: 0.6}} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0.6}} className=' w-40 top-10 right-5 bg-gray-50 shadow-xl flex flex-col absolute'>
                {
                      user && user.email === "personal.4183r70@gmail.com" && (
                        <Link to={'/createItem'}>
                          <p className=' px-4 py-2 flex justify-between items-center gap-3 cursor-pointer  hover:bg-gray-200 text-textColor hover:text-headingColor transition-all duration-100 ease-in-out text-base' onClick={() => setIsMenu(false)}>{t('NewItem')}<MdAdd/></p>
                        </Link>
                      )
                    }
                    
                    <p className=' px-4 py-2 flex items-center justify-between gap-3 cursor-pointer  hover:bg-gray-300 bg-gray-100 text-textColor hover:text-headingColor transition-all duration-100 ease-in-out text-base' onClick={logout}>{t('Logout')}<MdLogout/></p>
                  </motion.div>
              )
            }
          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className='flex items-center justify-between lg:hidden w-full h-full p-4'>
        <Link to={'/'} className='flex items-center gap-1'>
          <img className='w-32 object-cover' src={Logo} alt="Logo"></img>
        </Link>
        <div className=' flex items-center gap-6'>
          <div className='relative'>  
            <motion.div whileTap={{scale: 0.6}} onClick={mdMenu} >
              <img src={PizzaFlat} alt="" className='bg-textColor drop-shadow-xl rounded-full text-textColor text-4xl cursor-pointer rotate-12 w-10 min-w-[40px] h-10 min-h-[40px]'/>
            </motion.div>
            {
              isMdMenu && (
                  <motion.div initial={{ opacity: 0, scale: 0.6}} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0.6}} className=' w-40 top-10 right-5 bg-gray-50 shadow-xl flex flex-col absolute'>
                  <ul className=' flex flex-col'>
                    <li onClick={() => setIsMdMenu(false)}><a href="/#home" className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-gray-200 px-4 py-2 flex justify-between items-center' >{t('Home')}<MdHome/></a></li>
                    <li onClick={() => setIsMdMenu(false)}><a href="/#menu" className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-gray-200 px-4 py-2 flex justify-between items-center' >{t('Menu')}<MdRestaurantMenu/></a></li>
                    <li onClick={() => setIsMdMenu(false)}><a href="/#about" className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-gray-200 px-4 py-2 flex justify-between items-center' >{t('About')}<MdInfo/></a></li>
                    <li onClick={() => setIsMdMenu(false)}><a href="/#service" className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-gray-200 px-4 py-2 flex justify-between items-center' >{t('Service')}<MdDeliveryDining/></a></li>
                    <li className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-gray-200 px-4 py-2 flex justify-between items-center' onClick={() => setIsMdMenu(false)}>
                    <div><span onClick={()=>changeLanguaje('en')}>EN</span>/<span onClick={()=>changeLanguaje('es')}>ES</span></div><MdLanguage/></li>
                  </ul>
                  </motion.div>
              )
            }
          </div>
          <div className='realtive flex items-center justify-center' onClick={showCart}>
              <MdShoppingBasket className=' text-textColor text-3xl cursor-pointer'/>
                <div className='relative -top-2 right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                  <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                </div>
          </div>
        <div className='relative'>
            <motion.img 
            onClick={login} 
            whileTap={{scale: 0.6}} 
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
            src={user ? user.photoURL : Avatar} 
            alt="userprofile"/>
            {
                isMenu && (
                  <motion.div initial={{ opacity: 0, scale: 0.6}} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0.6}} className=' w-40 top-10 right-5 bg-gray-50 shadow-xl flex flex-col absolute'>
                {
                      user && user.email === "personal.4183r70@gmail.com" && (
                        <Link to={'/createItem'}>
                          <p className=' px-4 py-2 flex justify-between items-center gap-3 cursor-pointer  hover:bg-gray-200 text-textColor hover:text-headingColor transition-all duration-100 ease-in-out text-base' onClick={() => setIsMenu(false)}>{t('NewItem')}<MdAdd/></p>
                        </Link>
                      )
                    }
                    
                    <p className=' px-4 py-2 flex items-center justify-between gap-3 cursor-pointer  hover:bg-gray-300 bg-gray-100 text-textColor hover:text-headingColor transition-all duration-100 ease-in-out text-base' onClick={logout}>{t('Logout')}<MdLogout/></p>
                  </motion.div>
              )
            }
        </div>
        </div>
          
      </div>
      
    </header>
    </>
  );
};

export default Header