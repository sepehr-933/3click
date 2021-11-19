import React from "react";
import Image from "next/image";
import logo from "../../../../Assets/Images/Icons/logo-new.svg";
import backArrow from  '../../../../Assets/Images/Icons/icons8-back-20.png'

const bestsTitles = [
    {title:"بلیط هواپیما"},
    {title:"بلیط هواپیما کیش"},
    {title:"بلیط هواپیما مشهد"},
    {title:"بلیط هواپیما استانبول"},
    {title:"بلیط هواپیما تهران"},
    {title:"بلیط هواپیما یزد"},
    {title:"تور کیش"},
    {title:"تور مشهد"},
    {title:"تور دبی"},
    {title:"تور استانبول"},
    {title:"رزرو هتل کیش"},
    {title:"بلیط هواپیما دبی"},
    {title:"بلیط هواپیما تبریز"},
    {title:"بلیط هواپیما اهواز"},
    {title:"تور بالی"},
    {title:"تور تایلند"},
    {title:"تور ترکیه"},
    {title:"تور مالدیو"},
    {title:"تور آنتالیا"},
    {title:"بلیط هواپیما تهران استانبول"},
    {title:"تور سریلانکا"},
    {title:"رزرو هتل استانبول"},
];

const Bests = () => {
  return (
      <div className="bests p-8 container-normal">
          <div className="tours-click flex items-center mb-12">
              <p className="tours-paragraph">
                  بهترین های
              </p>
              <Image src={logo} alt="logo" className="tours-logo"/>
          </div>
          <div className="grid tab-port:grid-cols-3 gap-10">
              {
                  bestsTitles.map(item => {
                      return (
                          <div className="bests-titles relative" key={bestsTitles.title}>
                              {item.title}
                              <div className="bests-img absolute top-14 left-16">
                                  <Image src={backArrow} alt="icon"/>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
      </div>
  );
};
export default Bests;