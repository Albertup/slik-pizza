import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import HomeContainer from './HomeContainer';
import CartContainer from './CartContainer';
import AboutContainer from './AboutContainer';
import ServiceContainer from './ServiceContainer';
import HotDishes from './HotDishes';
import FreshHealthy from './FreshHealthy';

const MainContainer = () => {

  const [{ cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <section className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>
      <HotDishes/>
      <MenuContainer />
      <FreshHealthy/>
      {cartShow && <CartContainer />}
      <AboutContainer/>
      <ServiceContainer/>
    </section>
  )
}

export default MainContainer