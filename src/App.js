import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';
import { useTranslation } from 'react-i18next';
import { MyContext } from './context/MyContext';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';



function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
  i18n.changeLanguage(code)
  } 
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{t, changeLanguaje}}>
  <AnimatePresence mode='wait'>
    <div id="home" className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className='mt-10 lg:mt-20 w-full' >
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
      </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  </AnimatePresence>
  </MyContext.Provider>
    
  );
}

export default App;
