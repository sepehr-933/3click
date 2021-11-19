import React from 'react';
import Image from "next/image";
import airplane from '../../../public/Assets/Icons/icons8-airplane-64.png';
import hotel from '../../../public/Assets/Icons/icons8-hotel-50.png';
import tour from '../../../public/Assets/Icons/icons8-beach-60.png';
import Inputxx from "../../shared/Input/Input";
import calendar from '../../../Assets/Images/Icons/icons8-schedule-50.png'
import Buttonxx from "../../shared/button/Button";
import DateBox from "../../shared/Datepicker";
import Selection from "../../shared/Select";

const SearchSection = () => {
    const [show, setShow] = React.useState(1);
  return (
      <div className="searchSection">
          <div className="searchSection-container">
             <div className="searchSection-heading w-auto">
                 <span className="searchSection-wrapper">
                     <Image src={airplane} alt="airplane" className="searchSection-parts"/>
                      <p>پرواز</p>
                 </span>
                 <span className="searchSection-wrapper">
                     <Image src={hotel} alt="hotel" className="searchSection-parts"/>
                     <p>هتل</p>
                 </span>
                 <span className="searchSection-wrapper">
                     <Image src={tour} alt="beach" className="searchSection-parts"/>
                     <p>تور</p>
                 </span>
             </div>
             <div className="searchSection-radio mr-16">
                 <p className="searchSection-paragraph">
                     یکطرفه
                 </p>
                 <span
                     className="searchSection-circle"
                     onClick={() => setShow(2)}
                 >
                     {show === 2 && <span className="searchSection-circle__filler"></span>}
                 </span>
                 <p className="searchSection-paragraph">
                     دو طرفه
                 </p>
                 <span
                     className="searchSection-circle"
                     onClick={() => setShow(1)}
                 >
                    {show === 1 && <span className="searchSection-circle__filler"></span>}
                 </span>
             </div>
              <div className="flex flex-wrap items-center mr-16">
                  <Selection label="مبدا" />
                  <Selection label="مقصد" />
                  <DateBox show={show}/>
                  <Inputxx label="تعداد نفرات" />
                  <Buttonxx type="big" classes="w-full sm:w-auto ml-12">
                      جستجو
                  </Buttonxx>
              </div>

          </div>
          <div className="w-2/3 mx-auto flex text-2xl text-white items-center">
              آخرین جستجوی شما:
              <div className="searchSection-lastSearches">
                  تهران به مشهد
              </div>
          </div>
      </div>
  );
};
export default SearchSection;