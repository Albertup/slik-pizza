import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import Delivery from "../assets/svg/delivery-black.svg";
import { MdDeliveryDining, MdLocalPizza, MdRestaurant } from 'react-icons/md';
import bgSlick from "./../assets/img/pizza-slick-main.webp";
import frontPizza from "./../assets/img/pizza-home.webp";
import pizzaBox from "./../assets/img/pizza-box-new.webp";
import pizzaBoys from "./../assets/img/pizza-boyz.webp";
import image01 from "./../assets/img/pizza-ray.webp";
import image02 from "./../assets/img/pizza-sky.webp";
import image03 from "./../assets/img/pizza-restaurant.webp";
import { motion } from 'framer-motion';

const HomeContainer = () => {
  const {t} = useContext(MyContext);
  return (
<section className=' w-full mt-10 lg:mt-20 flex flex-col items-center justify-center content-center' style={{maxWidth: "1920px", minHeight: "75vh"}}>
      <div className='mt-10 lg:mt-0 mb-10 lg:mb-60 flex flex-col items-center'>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className=" flex items-center justify-center ">
            <img className="w-[200px] h-[200px] lg:w-[50%] lg:h-[50%] " src={frontPizza} alt="/"/>
          </motion.div>
          <motion.div className="mt-0 lg:-mt-10 flex flex-col items-center justify-center " initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div className='w-[100%] h-[8px] bg-textColor flex items-center'></div>
            <h1 className=" text-[84px] font-Bebas tracking-wide text-center ">{t('Welcome')}</h1>
            <p className=" text-[36px] capitalize tracking-wide text-center font-extralight ">{t('HomeOf')}</p>
          </motion.div>
      </div>
      <figure className="w-full relative pt-6 pb-32 flex content-center items-center justify-center cursor-default transition-all duration-300 filter grayscale hover:grayscale-0" style={{maxWidth: "1920px", minHeight: "70vh"}}>

          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${bgSlick})`}}>
            <span className="w-full  h-full absolute opacity-50 bg-black"></span>
            <div className="top-0 bottom-0 left-0 right-0 w-full  absolute pointer-events-none overflow-hidden h-[75px] rotate-180" >
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

          <figcaption className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12 cursor-default duration-300 opacity-0 hover:opacity-100">
                    <h1 className="text-white font-semibold text-5xl font-Bebas tracking-widest">{t('StartStory')}</h1>
                    <p className="mt-4 text-lg text-gray-300 cursor-default">{t('Discover')}</p>
                  </div>
                </div>
                  
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

        <div className="w-full pb-20 bg-primary -mt-24 " style={{maxWidth: "1920px", minHeight: "30vh"}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg bg-center bg-cover transition-all duration-300 blur-sm hover:blur-none filter grayscale hover:grayscale-0" style={{backgroundImage: `url(${image01})`}}>
                  <div className="px-4 py-5 flex-auto cursor-default duration-300 opacity-0 hover:opacity-100">
                    <div className="text-textColor text-[24px] p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                      <MdLocalPizza/>
                    </div>
                      <h6 className="text-xl font-Bebas tracking-widest font-semibold text-white mt-2">{t('Awarded')}</h6>
                      <p className="text-sm p-2 mt-2 mb-4 text-gray-200">{t('AwardedDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg bg-center bg-cover transition-all duration-300 blur-sm hover:blur-none filter grayscale hover:grayscale-0" style={{backgroundImage: `url(${image02})`}}>
                  <div className="px-4 py-5 flex-auto cursor-default duration-300 opacity-0 hover:opacity-100">
                    <div className="text-textColor text-[24px] p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <MdDeliveryDining/>
                    </div>
                      <h6 className="text-xl font-Bebas tracking-widest font-semibold text-white mt-2">{t('FreeDelivery')}</h6>
                      <p className="text-sm p-2 mt-2 mb-4 text-gray-200">{t('FreeDeliveryDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg bg-center bg-cover transition-all duration-300 blur-sm hover:blur-none filter grayscale hover:grayscale-0" style={{backgroundImage: `url(${image03})`}}>
                  <div className="px-4 py-5 flex-auto cursor-default duration-300 opacity-0 hover:opacity-100">
                    <div className="text-textColor text-[24px] p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <MdRestaurant/>
                    </div>
                      <h6 className="text-xl font-Bebas tracking-widest font-semibold text-white mt-2">{t('EatUs')}</h6>
                      <p className="text-sm p-2 mt-2 mb-4 text-gray-200">{t('EatUsDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        

        <section className="pb-20  -mt-24">
          <div className="container mx-auto px-4">
            


            <div className="flex flex-wrap items-center mt-32 pt-6 bg-center bg-cover bg-opacity-30" style={{backgroundImage: `url(${pizzaBoys})`}}>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto ">
                <div className="text-textColor text-[24px] p-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <MdRestaurant/>
                </div>
                <h3 className="text-3xl mb-2 font-Bebas tracking-widest font-semibold leading-normal">{t('Pleasure')}</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">{t('Pleasure01')}</p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">{t('Pleasure02')}</p>
                <a href="/" className="font-bold font-Bebas tracking-widest text-gray-800 mt-8">{t('Reserve01')}</a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mb-8 mt-8">
                <div className="relative flex flex-col min-w-0 break-words bg-textColor w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src={pizzaBox}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-textColor fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-Bebas tracking-widest font-bold text-white">{t('TopNotch')}</h4>
                    <p className="text-md font-light mt-2 text-white">{t('TopNotch01')}</p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>
          
   


</section>
  )
}

export default HomeContainer