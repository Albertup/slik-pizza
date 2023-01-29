import React, { useState, useEffect } from "react";
import { MdArrowUpward } from 'react-icons/md';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button className="w-[40px] h-[40px] flex items-center justify-center bg-textColor rounded rounded-md text-3xl text-primary" onClick={handleClick} style={{ position: "fixed", bottom: 20, right: 20 }}>
        <MdArrowUpward/>
      </button>
    )
  );
};

export default ScrollToTop;