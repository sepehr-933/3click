import React from 'react';
import Image from "next/image";
import Buttonxx from "../../shared/button/Button";

const Cardxx = ({img, name, time, price,classes, imgClasses}) => {
  return (
      <div className={`cardxx flex flex-col items-center rounded-3xl ${classes}`}>
          <Image height={600} src={img} alt="tour" className={`cardxx-img rounded-3xl ${imgClasses}`}/>
          <div className="cardxx-content relative">
              <div className="cardxx-tourName absolute">
                  {name}
                  <p className="cardxx-time absolute">
                      {time}
                  </p>
              </div>
              <p className="cardxx-price mt-8 w-max text-3xl flex flex-col items-center">
                  <p className="mb-8">شروع قیمت از</p>
                  <p className="cardxx-price__amount w-max text-5xl flex items-center font-bold mb-8">
                      <p className="cardxx-parameter text-xl ">
                          تومان
                      </p>
                      {price}
                  </p>
                  <Buttonxx classes="button__big button__gradient" >
                      رزرو تور
                  </Buttonxx>
              </p>

          </div>
      </div>
  );
};

export default Cardxx;