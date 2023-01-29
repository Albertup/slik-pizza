import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';
import { getAllEmails, saveEmail } from '../utils/firebaseFunctions';
import { actionType } from '../context/reducer';
import { MyContext } from '../context/MyContext';

const Subscribe = () => {
    const {t} = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [ {}, setIsLoading] = useState(false);
  const [{ foodItems }, dispatch] = useStateValue();

  
  
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!email) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: email,
        };
        saveEmail(data);
        setFields(true);
        setMsg("Data Uploaded successfully");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setEmail("");
  };

  const fetchData = async () => {
    await getAllEmails().then((data) => {
      dispatch({
        type: actionType.SET_SUBSCRIBE,
        subscribe: data,
      });
    });
  };


  return (
    <div className='w-full max-w-[1000px] h-auto mt-4 p-4 flex flex-col items-center justify-center'>
        {
          fields && (
            <motion.p initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} 
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
            ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800' }`}>
            {msg}
            </motion.p>
          )}    
      <div className='w-[90%] lg:w-[75%] border border-gray-300 rounded-lg mt-4 pl-4 p-2 flex flex-col lg:flex-row items-center justify-center gap-4'>
        
        <div className='w-full py-2 border-gray-300 flex items-center gap-2'>
          <MdOutlineAlternateEmail className='text-xl text-primary'/>
          <input type='text' 
          required value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('Subscribe')} 
          className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-primary'/>
        </div>

        <div className="flex items-center w-full lg:w-[25%]">
          <motion.button whileTap={{ scale: 0.9 }} 
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-2 border-gray-300 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}>
            {t('SendUp')}
          </motion.button>
        </div>

      </div>
    </div>
  )
}

export default Subscribe