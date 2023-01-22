import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import Delivery from "../assets/svg/delivery-black.svg";
import Homebg from "../assets/img/home-bg.png";
import { heropData } from '../utils/data';



const HomeContainer = () => {
  const {t} = useContext(MyContext);
  return (
<section id="home" className='px-4 lg:px-16 py-4 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full'>
  <div className='py-2  flex-1 flex flex-col items-start  justify-center gap-12 mt-24 lg:mt-40'>
    <div className='flex items-center gap-4 justify-center'>
      <div className='w-[120px] lg:w-[140px] h-auto overflow-hidden'><img className='object-contain' src={Delivery} alt='Delivery'/>
    </div>
      <p className='text-base text-textColor font-semibold font-Bebas tracking-widest text-xl text-[2rem] lg:text-[2.5rem] leading-10 w-[30%]'>{t('FastDelivery')}</p>
    </div>
    <div className='flex flex-col gap-2'>
      <p className='text-textColor font-bold font-Bebas tracking-widest text-[3rem] lg:text-[3.5rem] p-2 leading-10 lg:w-[90%]'>{t('DeliveryText')}<span className='font-outline-1 text-primary font-bold font-Bebas tracking-widest text-[3rem] lg:text-[3.5rem]'>{t('YourCity')}</span></p>
      <p className='text-sm text-textColor  text-center lg:text-left lg:w-[80%]'>{t('DeliveryDescrip')}</p>
    </div>
      <button type='button' className=' text-primary bg-gradient-to-br from-black to-gray-900 w-full lg:w-auto px-6 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'><a href="/#about">{t('OrderNow')}</a></button>
  </div>

  <div className='py-2 flex-1 flex items-center relative'>
      <img src={Homebg} className='ml-auto h-510 w-full lg:w-auto lg:h-685' alt='Home-bg'/>
      <div className='w-full h-full absolute flex items-center justify-center md:px-2 lg:px-8 xl:px-32 py-6 gap-2 lg:gap-8 flex-wrap'>
        {heropData && heropData.map(n =>(
          <div key={n.id} className='w-160 min-w-[160px] lg:min-w-[190px] p-4 mt-10 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-xl'>
          <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={n.imageSrc} alt='Icecream-01'/>
          <p className='text-base lg:text-xl font-semibold text-textColor'>{n.name}</p>
          <p className='text-[10px] lg:text-sm font-semibold text-gray-600 my-1'>{n.decp}</p>
          <p className='text-sm font-semibold text-headingColor'>{n.price}<span className='text-xs text-gray-600'>€</span></p>
        </div>
        ))}
      </div>
  </div>
</section>
  )
}

export default HomeContainer