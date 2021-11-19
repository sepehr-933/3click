import React from "react";
import Image from "next/image";
//images
import qeshmair from '../../../../Assets/Images/jpeg/companies/qeshmair.png'

const TicketContent = ({activeContent}) => {
  return (
      <div>
          {
              activeContent === 1 &&
              <div className="ticketCard-content__children">
                  <h3 className="ticketCard-content__h3 bg-gray-200">
                      پرواز رفت
                  </h3>
                  <div className="ticketCard-content__details ticketCard-content__details1 flex">
                      <div>
                          <p>
                              تهران(THR)
                          </p>
                          <p>
                              21:00
                          </p>
                      </div>
                      <p className="ticketCard-content__moved1">
                          پنجشنبه 27 آبان 1400
                      </p>
                  </div>
                  <div className="ticketCard-content__details rounded bg-gray-200 flex">
                      <p className="ml-16">
                          1 ساعت و 40 دقیقه
                      </p>
                      <div className="w-12">
                          <Image src={qeshmair} alt="qeshair"/>
                      </div>
                      <div className="">
                          قشم ایر / شماره پرواز QB-1224 /
                      </div>
                      <div>
                          <p>
                              کلاس پرواز: اکونومی-Y
                          </p>
                          <p>
                              مدل هواپیما: DEF
                          </p>
                      </div>
                  </div>
                  <div className="ticketCard-content__details ticketCard-content__details3 flex">
                      <div>
                          <p>
                              کیش(KIH)
                          </p>
                          <p>
                              22:45
                          </p>
                      </div>
                      <p className="ticketCard-content__moved3">
                          پنجشنبه 27 آبان 1400
                      </p>
                  </div>
                  <div className="flex flex-col items-center absolute top-16 ticketCard-dots">
                      <div className="ticketCard-circle"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                      <div className="w-8 ticketCard-logo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25.482"
                               viewBox="0 0 28.037 40.482">
                              <g id="Group_22636" transform="rotate(-90 47.45 199.039)">
                                  <path id="Path_111025"
                                        d="M28.037 5.779V.5a.532.532 0 0 0-.559-.5h-1.4a.592.592 0 0 0-.389.142L14.408 10a.6.6 0 0 1-.778 0L2.348.142A.591.591 0 0 0 1.958 0H.559A.532.532 0 0 0 0 .5v5.279a.474.474 0 0 0 .169.36L13.629 17.9a.6.6 0 0 0 .778 0L27.868 6.139a.474.474 0 0 0 .169-.36z"
                                        className="cls-1" transform="rotate(-90 204.038 -24.413)"/>
                                  <path id="Path_111026"
                                        d="M28.037 5.848V.508A.535.535 0 0 0 27.478 0h-1.4a.587.587 0 0 0-.389.144l-11.281 9.973a.6.6 0 0 1-.778 0L2.348.144A.587.587 0 0 0 1.958 0H.559A.535.535 0 0 0 0 .508v5.34a.482.482 0 0 0 .169.365l13.46 11.9a.6.6 0 0 0 .778 0l13.46-11.9a.482.482 0 0 0 .17-.365z"
                                        className="cls-1" transform="rotate(-90 198.386 -18.76)"/>
                                  <path id="Path_111027"
                                        d="M28.037 5.822V.506A.534.534 0 0 0 27.478 0h-1.4a.589.589 0 0 0-.389.143l-11.281 9.929a.6.6 0 0 1-.778 0L2.348.143A.589.589 0 0 0 1.958 0H.559A.534.534 0 0 0 0 .505v5.317a.479.479 0 0 0 .169.363l13.46 11.845a.6.6 0 0 0 .778 0L27.868 6.185a.479.479 0 0 0 .169-.363z"
                                        className="cls-1" transform="rotate(-90 192.816 -13.191)"/>
                              </g>
                          </svg>
                      </div>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                              <div className="ticketCard-dash"/>
                      <div className="ticketCard-circle"/>
                  </div>
              </div>
          }
          {
              activeContent === 2 &&
              <div className="ticketCard-content__pricing">
                  <div className="flex p-6 items-center text-xl justify-between">
                      <p>
                          1 * بزرگسال
                      </p>
                      <p>
                          615,800 تومان
                      </p>
                  </div>
                  <div className="flex p-6 items-center text-xl justify-between">
                      <p>
                          0 * کوچک
                      </p>
                      <p>
                          0 تومان
                      </p>
                  </div>
                  <div className="flex p-6 items-center text-xl justify-between">
                      <p>
                          0 * نوزاد
                      </p>
                      <p>
                          0 تومان
                      </p>
                  </div>
                  <div className="flex ticketCard-content__total p-6 items-center text-xl justify-between">
                      <p className="text-2xl">
                          مجموع
                      </p>
                      <p className="font-bold" style={{color:"rgb(18, 183, 169)"}}>
                          615,000 تومان
                      </p>
                  </div>
              </div>
          }
          {
              activeContent === 3 &&
              <div className="ticketCard-content__rules justify-between py-20 text-2xl flex flex-col">
                  <p className="font-bold p-4">
                      کلاس 6,110,000 ریال
                  </p>
                  <div className="p-4 ticketCard-content__penalty w-max">
                      <p className="font-bold p-2">
                          جریمه %100
                      </p>
                      <p className="text-xl ">
                          به قوانین پرواز در سایت شرکت هواپیمایی رجوع شود.
                      </p>
                  </div>
              </div>
          }
      </div>
  );
};
export default TicketContent;