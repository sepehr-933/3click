import React from "react";
import Image from "next/image";
import logo from "../../../../Assets/Images/Icons/logo-new.svg";
//images
import supporter from '../../../../Assets/Images/jpeg/intro.png'
import heart from '../../../../Assets/Images/jpeg/heart.png'
import hours from '../../../../Assets/Images/jpeg/24hours.png'
import responsibility from '../../../../Assets/Images/jpeg/responsibility.png'
import patience from '../../../../Assets/Images/jpeg/pactionate.png'
import envelope from '../../../../Assets/Images/Icons/icons8-envelope-24.png'

const Support = () => {
  return (
      <div className="support m-8 md:mx-auto">
          <div className="tours-click flex items-center support-title mb-12">
              <p className="tours-paragraph">
                  پشتیبانی
              </p>
              <Image src={logo} alt="logo" className="tours-logo"/>
          </div>
          <div className="flex flex-wrap tab-port:flex-nowrap justify-center sm:w-4/5 mx-auto items-center">
              <div className="">
                  <Image src={supporter} alt="supporter"/>
              </div>
              <div className="flex  flex-col mr-8">
                  <div className="grid  tab-port:grid-cols-4  gap-8 grid-cols-2 items-center mb-12">
                      <div className="support-img flex flex-col justify-between">
                          <Image src={patience} alt="patience" />
                          <p className="text-3xl font-bold text-center">
                              صبوری
                          </p>
                      </div>
                      <div className="support-img flex flex-col justify-between ">
                          <Image src={heart} alt="heart" className="support-img"/>
                          <p className="text-3xl font-bold w-max text-center">
                              اخلاق و روی خوش
                          </p>
                      </div>
                      <div className="support-img flex flex-col justify-between">
                          <Image src={responsibility} alt="responsibility" className="support-img"/>
                          <p className="text-3xl font-bold text-center">
                              مسیولیت
                          </p>
                      </div>
                      <div className="support-img flex flex-col justify-between">
                          <Image src={hours} alt="24 hours" className="support-img"/>
                          <p className="text-3xl font-bold text-center">
                              شبانه روزی
                          </p>
                      </div>
                  </div>
                  <div className="sm:flex flx-col items-center w-full">
                      <div className="text-2xl mb-8 ml-52 tab-port:m-0 tab-port:w-max flex md:block support-label ">
                          <p className="w-max">
                              برای اطلاع از آخرین
                          </p>
                          <p className="w-max">
                              تغییرات و تخفیف ها
                          </p>
                      </div>
                          <input className="support-input w-4/5 tab-port:w-full" placeholder="لطفا ایمیل خود را وارد کنید"/>
                          <Image src={envelope} alt="envelope" className="support-envelope " />
                  </div>
              </div>
          </div>
      </div>
  );
};
export default Support;