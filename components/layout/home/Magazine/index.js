import React from "react";
import Image from "next/image";
import logo from "../../../../Assets/Images/Icons/logo-new.svg";


const Magazine = () => {
  return (
      <div className="magazine p-8 container-normal mb-24">
          <div className="tours-click flex items-center mb-8">
              <p className="tours-paragraph">
                  مجله
              </p>
              <Image src={logo} alt="logo" className="tours-logo"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              <div className="magazine-image magazine-image__1 relative col-start-1 col-end-3">
                  <div className="magazine-explanation1 absolute ">
                      لوکس ترین ویلاهای دبی
                  </div>
                      <div className="magazine-explanation2 absolute ">
                          تجربه ی بی نظیر اقامت در برترین ویلاهای دبی
                      </div>
              </div>
              <div className="magazine-image magazine-image__2 relative ">
                  <div className="magazine-explanation1 absolute ">
                      اکسپو2021 دبی
                  </div>
                      <div className="magazine-explanation2 absolute ">
                          اکسپو 2021 در کدام کشور
                      </div>
              </div>
              <div className="magazine-image magazine-image__3 relative">
                  <div className="magazine-explanation1 absolute ">
                      دوازده هتل برتر  ساحلی...
                  </div>
              </div>
              <div className="magazine-image magazine-image__4 relative col-start-1 col-end-3">
                  <div className="magazine-explanation1 absolute ">
                      جاذبه های استانبول
                  </div>
                  <div className="magazine-explanation2 absolute ">
                      جاذبه های دیدنی استانبول که نباید بازدید آنها را از دست داد
                  </div>
              </div>
              <div className="magazine-image magazine-image__5 relative">
                  <div className="magazine-explanation1 absolute ">
                      برندهای معروف استانبول
                  </div>
                  <div className="magazine-explanation2 absolute ">
                      برندهای معروف دنیا در مراکز
                  </div>
              </div>
              <div className="magazine-image magazine-image__5 relative">
                  <div className="magazine-explanation1 absolute ">
                      جاذبه های کیش
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Magazine;