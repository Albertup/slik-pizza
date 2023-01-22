import React, { useContext } from 'react'
import Delivery from "../assets/svg/delivery-black.svg";
import { MyContext } from '../context/MyContext';
import PizzaBox from "./../assets/img/slik-pizza.webp";

const ServiceContainer = () => {
  const {t} = useContext(MyContext);
  return (
    <section id="service" className='w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 pizza-box  bg-contain bg-no-repeat bg-right bg-opacity-0 lg:bg-opacity-100' style={{backgroundImage: `url(${PizzaBox})`}}>
      <div className="w-full px-4 lg:px-16 py-4 mt-24 lg:mt-40 flex flex-col items-center justify-center">
        
        <div className='py-2  flex-1 flex flex-col items-start justify-center gap-12'>
          <div className='flex items-center gap-4 justify-center'>
            <div className='w-[120px] lg:w-[140px] h-auto overflow-hidden'><img className='object-contain' src={Delivery} alt='Delivery'/>
            </div>
            <p className='text-textColor font-semibold font-Bebas tracking-widest text-xl text-[2rem] lg:text-[2.5rem] leading-10 w-[30%]'>{t('FastDelivery')}</p>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-textColor font-bold font-Bebas tracking-widest text-[3rem] lg:text-[3.5rem] p-2 leading-10 lg:w-[90%]'>{t('DeliveryText')}<span className='font-outline-1 text-primary font-bold font-Bebas tracking-widest text-[3rem] lg:text-[3.5rem]'>{t('YourCity')}</span></p>
          <p className='text-sm text-textColor  text-center lg:text-left lg:w-[80%]'>{t('DeliveryDescrip')}</p>
          </div>
          <button type='button' className=' text-primary bg-gradient-to-br from-black to-gray-900 w-full lg:w-auto px-6 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'><a href="/#menu">{t('OrderNow')}</a></button>
      </div>

      </div>
      {/* <div className="w-full px-4 lg:px-16 py-4 mt-24 lg:mt-40 flex flex-col items-center justify-center"><img src={PizzaBox} alt='pizzabox'/></div> */}
    </section>
  )
}

export default ServiceContainer