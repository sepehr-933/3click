import React from "react";
import Image from "next/image";
import icon from "../../../../Assets/Images/Icons/icons8-back-20.png";
import Animated from "react-mount-animation";
import axios from "axios";

const SearchAccordion = ({children,heading,firstParam,secondParam,classes}) => {
    const [active, setActive] = React.useState(true)
  return (
      <div
          className="search-accordion relative"
      >
          <h3 onClick={() => setActive(!active)} className="search-accordion__heading">
              {heading}
              <div className="absolute top-4 left-4">
                  <Image src={icon} alt="icon"  className="accordion-img"/>
              </div>
          </h3>
              <Animated.div
                  show={active}
                  mountAnim={`
                  0% {height:0}
                  100% {height:5.5rem}
                  `}
                  unmountAnim={`
                  0% {height:5.5rem}
                  100% {height:0}
                  `}
                  time={0.3}
                  className={`search-accordion__content ${classes}`}
              >
                  {children}
                  {
                      firstParam && secondParam &&
                      <div className="flex justify-between">
                          <p className="search-accordion__details">{firstParam}</p>
                          <p className="search-accordion__details">{secondParam}</p>
                      </div>
                  }

              </Animated.div>


      </div>
  );
};

export default SearchAccordion;