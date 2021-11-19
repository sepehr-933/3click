import React,{useState} from "react";
import Animated from "react-mount-animation";
import Image from "next/image";
import logo from '../../../../Assets/Images/Icons/I3.png'
import takeoff from '../../../../Assets/Images/Icons/icons8-airplane-take-off-20.png'
import back from '../../../../Assets/Images/Icons/icons8-back-20.png'
import Buttonxx from "../../../shared/button/Button";
import TicketContent from "./TicketContent";

const TicketCard = () => {
    const [activeHeading, setActiveHeading] = useState(1);
    const [show, setShow] = useState(false);
    return (
        <div className="ticketCard-container">
            <div className="ticketCard flex flex-col tab-port:grid grid-cols-4 items-center">
                <div className="ticketCard-details justify-between col-start-1 col-end-4 py-12 px-4 flex">
                    <div className="flex flex-col sm:mx-6">
                        <div className="ticketCard-icon w-12 flex flex-col items-center">
                            <Image src={logo} alt="logo"/>
                        </div>
                        <p className="text-xl">
                            آتا
                        </p>
                    </div>
                    <div className="flex flex-col mx-2 sm:mx-6">
                        <p className="text-2xl text-primary">
                            سیستمی,اکونومی
                        </p>
                        <p>
                            5698
                        </p>
                    </div>
                    <div className="flex flex-col mx-2 sm:mx-6">
                        <p className="text-2xl ">
                            08:40
                        </p>
                        <p className="text-primary">
                            تهران(THR)
                        </p>
                    </div>
                    <div className="ticketCard-takeoff mx-2 sm:mx-4">
                        <Image src={takeoff} alt="takeoff"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl ">
                            10:00
                        </p>
                        <p className="text-primary">
                            مشهد(MHD)
                        </p>
                    </div>
                    <button className="ticketCard-button mx-2 mx-4">
                        <p
                            onClick={() => setShow(!show)}
                            className="text-xl text-primary"
                        >
                            {
                                show ?
                                    "اظلاعات کمتر"
                                :
                                "اطلاعات بیشتر"
                            }
                        </p>
                        <div className="ticketCard-more w-4">
                            <Image src={back} alt="back"/>
                        </div>
                    </button>
                </div>
                <div className="ticketCard-price pr-4 col-start-4 font-bold col-end-5  text-xl text-primary w-full flex tab-port:flex-col">
                    <div className="flex justify-between mb-4">
                        <p className="ticketCard-adultPrice hidden tab-port:block ml-auto">
                            قیمت هر بزرگسال
                        </p>
                        <p className="ticketCard-adultPrice ">
                            7صندلی مانده
                        </p>
                    </div>
                    <p className="text-dark__blue ml-auto tab-port:ml-0 flex items-center tab-port:mr-auto mb-16">
                        <p className="text-3xl">
                            873,000
                        </p>
                        تومان
                    </p>
                    <Buttonxx classes=" w-max tab-port:w-full" >
                        انتخاب بلیط
                    </Buttonxx>
                </div>
            </div>
                <Animated.div
                    show={show}
                    mountAnim={
                        ` 
                       0% {height: 1px}
                       100% {height: 348px} 
                       `
                    }
                    unmountAnim={
                        `
                       0% {height : 348px}
                       100% {height: 1px}
                    `
                    }
                    time={0.5}
                    className="ticketCard-content bg-white -mt-8"
                >
                    <div className="ticketCard-content__container pt-12 px-6 pb-6">
                        <div className="ticketCard-content__heading  mx-auto text-2xl flex">
                            <p
                                onClick={() => setActiveHeading(1)}
                                className={`ticketCard-content__headings   ${activeHeading === 1 ? "text-color-primary ticketCard-redBorder hover:bg-red-100" : "hover:bg-gray-100 text-primary"}`}
                            >
                                جزییات پرواز
                            </p>
                            <p
                                onClick={() => setActiveHeading(2)}
                                className={`ticketCard-content__headings  ${activeHeading === 2 ? "text-color-primary ticketCard-redBorder hover:bg-red-100" : "text-primary hover:bg-gray-100"}`}
                            >
                                جزییات قیمت
                            </p>
                            <p
                                onClick={() => setActiveHeading(3)}
                                className={`ticketCard-content__headings  ${activeHeading === 3 ? "text-color-primary ticketCard-redBorder hover:bg-red-100" : "text-primary hover:bg-gray-100 "}`}
                            >
                                قوانین پرواز و استرداد
                            </p>
                        </div>
                        <TicketContent activeContent={activeHeading}/>
                    </div>
                </Animated.div>
        </div>
    );
};
export default TicketCard;