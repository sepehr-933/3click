import React,{useState,useEffect} from "react";
import Image from "next/image";
import icon from '../../../../Assets/Images/Icons/icons8-back-20.png'
import TicketCard from "./TicketCard";
import {searchApi} from "../api/searchApis";
import {available} from "../api/available";

const Tickets = () => {
    const [activeFilter,setActiveFilter] = useState(1);
    return (
        <div className="tickets">
            <div className="tickets-title p-8 flex items-center">
                <p className="font-bold text-3xl ml-4">
                    بلیط هواپیمای تهران به مشهد
                </p>
                <p className="text-2xl font-bold text-color-primary">
                    سه‌شنبه، 25 آبان 1400
                </p>
            </div>
            <div className="tickets-filters mb-8 flex ">
                <div className="tickets-yesterday hidden md:flex text-2xl  items-center w-max">
                    <div className="tickets-back">
                        <Image src={icon} alt="backslash"/>
                    </div>
                    <p  className="w-max ">
                        روز قبل
                    </p>
                </div>
                <div className="tickets-filters__main flex bg-white text-2xl mx-4 ">
                    <p className="py-6 px-10">
                        مرتب سازی براساس:
                    </p>
                    <p
                        onClick={() => {setActiveFilter(1)}}
                        className={`py-6 px-10  ${activeFilter === 1 && "text-color-primary tickets-border"}`}
                    >
                        ارزان ترین
                    </p>
                    <p
                        onClick={() => {setActiveFilter(2)}}
                        className={`py-6 px-10 hidden tab-port:block  ${activeFilter === 2 && "text-color-primary tickets-border"}`}
                    >
                        بیشترین تخفیف
                    </p>
                    <p
                        onClick={() => {setActiveFilter(3)}}
                        className={`py-6 px-10 hidden md:block ${activeFilter === 3 && "text-color-primary tickets-border"}`}
                    >
                         سریع ترین
                    </p>
                </div>
                <div className="tickets-yesterday text-2xl hidden md:flex items-center">
                    <p>
                        روز بعد
                    </p>
                    <div className="tickets-forwards">
                        <Image src={icon} alt="backslash"/>
                    </div>
                </div>
            </div>
            <TicketCard />
        </div>
    );
};

export default Tickets;