import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { heropData } from '../utils/data'
import { MdStar } from 'react-icons/md';

const HotDishes = () => {
  const {t} = useContext(MyContext);
  return (
    
    <section id="menu" className="pt-24 pb-10" style={{maxWidth: "1920px"}}>
      <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl flex justify-center font-Bebas tracking-widest font-bold border-b-2 border-textColor"><MdStar/>{t('Heroes')}<MdStar/></h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">{t('Heroes01')}</p>
            </div>
          </div>

          <div className='py-2 flex-1 flex items-center relative pt-20 pb-48'>
            <div className='w-full h-full absolute flex items-center justify-between md:px-2 lg:px-8 xl:px-32 py-6 gap-4 lg:gap-8 flex-wrap'>
              {heropData && heropData.map(n =>(
                <div key={n.id} className='w-160 min-w-[160px] lg:min-w-[190px] p-4 mt-10 bg-cardOverlay bg-opacity-70 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-xl'>
                  <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={n.imageSrc} alt='Icecream-01'/>
                  <p className='text-base lg:text-xl font-semibold text-textColor'>{n.name}</p>
                  <p className='text-[10px] lg:text-sm font-semibold text-gray-600 my-1'>{n.decp}</p>
                  <p className='text-sm font-semibold text-headingColor'>{n.price}<span className='text-xs text-gray-600'>€</span></p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default HotDishes