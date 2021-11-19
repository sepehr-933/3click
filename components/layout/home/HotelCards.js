import React from "react";
import Image from "next/image";
import star from "../../../Assets/Images/Icons/icons8-star-28.png"
import Buttonxx from "../../shared/button/Button";

const HotelCards = ({src,name,price}) => {
  return (
      <div className="hotels-card flex flex-col pb-8">
          <Image height={400} width={400} src={src} alt="hotels" className="hotels-img"/>
          <div className="hotel-title flex items-center mb-12 mt-8">
              <Image src={star} alt="star" />
              <p className="hotels-stars ml-auto font-bold text-3xl">5</p>
              <p className="hotels-name text-3xl" >{name}</p>
          </div>
          <div className="flex items-center mb-8">
              <div className="flex flex-col ml-auto">
                  <p className="hotels-paragraph mb-4 text-3xl font-bold">
                      شروع قیمت از
                  </p>
                  <div className="flex">
                      <p className="hotels-price font-bold ml-3 text-3xl">
                          {price}
                      </p>
                      <p className="hotels-parameter text-xl">
                          تومان
                      </p>
                  </div>
              </div>
              <Buttonxx classes="button__gradient hotels-button">
                   رزرو هتل
              </Buttonxx>
          </div>
      </div>
  );
};
export default HotelCards