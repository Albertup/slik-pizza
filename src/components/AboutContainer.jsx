import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { motion } from 'framer-motion';

import { MdClose } from 'react-icons/md';

import O001 from "./../assets/img/001.webp";
import O002 from "./../assets/img/002.webp";
import O003 from "./../assets/img/003.webp";
import O004 from "./../assets/img/004.webp";
import O005 from "./../assets/img/005.webp";
import O006 from "./../assets/img/006.webp";
import Modal from './Modal';



const AboutContainer = () => {
  const {t} = useContext(MyContext);
  const [showModal001, setShowModal001] = React.useState(false);
  const [showModal002, setShowModal002] = React.useState(false);
  const [showModal003, setShowModal003] = React.useState(false);
  const [showModal004, setShowModal004] = React.useState(false);
  const [showModal005, setShowModal005] = React.useState(false);
  const [showModal006, setShowModal006] = React.useState(false);




  return (
<>
  <section id="about" className='relative w-full h-auto bg-textColor' style={{maxWidth: "1920px"}}>
    <div className="relative py-20">
    <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
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
            className="text-textColor fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
    </div>
          <div className="container mx-auto h-auto mt-20 mb-20">
            <div className="items-start flex flex-wrap ">
              <div className="w-full lg:w-4/12 ml-auto mr-auto flex flex-row items-start justify-between ">
                <div className="rotate-180 bg-textColor text-white text-[48px]" style={{ writingMode: 'vertical-rl' }}>{t('AboutUs')}</div>
                <p className=" text-primary">{t('AboutDesc')}</p>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto">
                <div className="lg:pr-2">
                <div class="flex flex-wrap">
              <div class="flex flex-wrap w-1/2">

                <motion.div class="w-1/2 p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm cursor-pointer" src={O001} onClick={() => setShowModal001(true)}/>
                </motion.div>
                {showModal001 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal001(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O001} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}

                <motion.div class="w-1/2 p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm cursor-pointer" src={O002} onClick={() => setShowModal002(true)}/>
                </motion.div>

                {showModal002 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal002(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O002} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}

                <motion.div class="w-full p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm cursor-pointer" src={O003} onClick={() => setShowModal003(true)}/>
                </motion.div>

                {showModal003 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal003(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O003} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}  

              </div>
              <div class="flex flex-wrap w-1/2">
                <motion.div class="w-full p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm  cursor-pointer" src={O004} onClick={() => setShowModal004(true)}/>
                </motion.div>

                {showModal004 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal004(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O004} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}  

                <motion.div class="w-1/2 p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm cursor-pointer" src={O005} onClick={() => setShowModal005(true)}/>
                </motion.div>

                {showModal005 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal005(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O005} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}

                <motion.div class="w-1/2 p-1 md:p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm cursor-pointer" src={O006} onClick={() => setShowModal006(true)}/>
                </motion.div>

                {showModal006 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{t('AboutGal')}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal006(false)}
                          >
                            <span className="bg-transparent text-textColor opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"><MdClose/></span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-sm" src={O006} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}  

                </div>
            </div>
            
                </div>
              </div>
            </div>
          </div>
      <div
        className="bottom-auto top-[100%] left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}>
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  </section>





      <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bottom-auto top-100 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
            style={{ height: "80px" }}
          >
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
              ></polygon>
            </svg>
          </div>
        </section>
  </>
   
  )
}

export default AboutContainer