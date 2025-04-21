import React, { useContext } from 'react'
import Delivery from "../assets/svg/delivery-black.svg";
import { MyContext } from '../context/MyContext';
import PizzaBox from "./../assets/img/slik-pizza.webp";
import bgSlick from "./../assets/img/pizza-slick-main.webp";

const ServiceContainer = () => {
  const {t} = useContext(MyContext);
  return (
  <>  
    


  <section id="service" className='relative w-full h-auto ' style={{maxWidth: "1920px"}}>
    <div className="relative py-10">
    
          <div className="container mx-auto h-auto mt-20 mb-20">
            <div className="items-start flex flex-wrap ">
              <div className="w-full lg:w-4/12 ml-auto mr-auto flex flex-row items-start justify-between ">
              <div className='py-2  flex-1 flex flex-col items-start justify-center gap-12'>
          <div className='flex items-start gap-4 justify-center'>
            <div className='w-[240px] lg:w-[320px] h-auto overflow-hidden'><img className='object-contain' src={Delivery} alt='Delivery'/>
            </div>
            <p className='text-textColor mt-8 lg:mt-20 font-semibold font-Bebas tracking-widest text-xl text-[2rem] lg:text-[2.5rem] leading-10 w-[30%]'>{t('FastDelivery')}</p>
          </div>
          <div className='w-[100%] h-[8px] bg-textColor -mt-12 lg:-mt-20 flex items-center'></div>
          <div className='flex flex-col -mt-10 p-4 gap-2'>
          <p className='text-textColor font-bold font-Bebas tracking-widest text-center lg:text-left text-[2rem] lg:text-[2.5rem] p-2 leading-10 lg:w-[90%]'>{t('DeliveryText')}
          <span className='font-outline-1 text-primary font-bold font-Bebas text-center lg:text-left tracking-widest text-[2.3rem] lg:text-[2.8rem]'>{t('YourCity')}</span></p>
          <p className='text-sm text-textColor  text-center lg:text-left lg:w-[80%]'>{t('DeliveryDescrip')}</p>
          </div>
          <button type='button' className=' text-primary bg-gradient-to-br from-black to-gray-900 w-full lg:w-auto px-6 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'><a href="/#menu">{t('OrderNow')}</a></button>
      </div>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto">
                <div className="lg:pr-2">
                <div className="flex flex-wrap">
              <div className="flex flex-wrap">

                  <div className="w-full"><img src={PizzaBox} alt='pizzabox'/></div>
                </div>
            </div>
            
                </div>
              </div>
            </div>
          </div>
      
    </div>
  </section>

  


  <section className='relative -mt-60 w-full flex items-center justify-center' style={{maxWidth: "1920px"}}>
    <div className="container py-20">
        <figure className="w-full relative flex content-center items-center justify-center cursor-default" style={{maxWidth: "1920px"}}>
          <div className="absolute top-0 w-full h-full bg-textColor">
            <div className="top-0 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[75px] rotate-180" >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
                >
                  <polygon
                    className="text-primary fill-current"
                    points="2560 0 2560 100 0 100"
                  >
                  </polygon>
              </svg>                    
            </div>
          </div>
          <figcaption className="container relative mx-auto flex flex-wrap items-center justify-center">
              <div className=" flex flex-wrap items-center justify-center pt-6 p-4">
                    <h1 className="text-white w-full font-semibold text-[32px] lg:text-[160px] text-center font-Bebas tracking-widest -rotate-3">{t('EndStory')}</h1>
              </div>
          </figcaption>
          <div className="top-auto bottom-0 left-0 right-0 w-full bg-transparent absolute pointer-events-none overflow-hidden" style={{ height: "80px" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
              >
                <polygon
                  className="text-primary fill-current"
                  points="2560 0 2560 100 0 100"
                >
                </polygon>
            </svg>
          </div>
      </figure>
    </div>
  </section>


  

  <section id="menu" className="pt-24 pb-10" style={{maxWidth: "1920px"}}>
      <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl flex justify-center font-Bebas tracking-widest font-bold border-b-2 border-textColor">{t('WhatYou')}</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">{t('WhatYou01')}</p>
          <button type='button' className=' text-primary bg-gradient-to-br from-black to-gray-900 w-full lg:w-auto px-6 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'><a href="/#menu">{t('EndStory')}</a></button>

            </div>
          </div>

          <div className='py-2 flex-1 flex items-center relative pt-20 pb-48'>
            <div className='w-full h-full absolute flex items-center justify-between md:px-2 lg:px-8 xl:px-32 py-6 gap-4 lg:gap-8 flex-wrap'>
              
            </div>
          </div>
      </div>
    </section>




  </>  
  )
}

export default ServiceContainer