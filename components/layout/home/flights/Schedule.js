import React from "react";
import Image from "next/image";
import plane from '../../../../Assets/Images/Icons/icons8-airplane-take-off-33.png'
import useAxios from "../../../../Hooks/useAxios";


const Schedule = ({flightsData, heading,style}) => {
    const {flights} = flightsData;
    return (
        <div style={style} className="flight-schedule flex flex-col bg-white">
            <h3 className="flight-heading relative flex justify-center text-2xl">
                <div className=" w-max flex">
                    پرواز از
                    <p className="flight-from font-bold">
                        {heading}
                    </p>
                    به
                </div>
                <div className="absolute top-4 left-4">
                    <Image src={plane} alt="plane" className="flight-plane"/>
                </div>
            </h3>
            <div className="flight-schedule__wrapper">
            {
                flights.map(flight => {
                    return (
                        <div className="flight-details font-bold px-10 py-6 mt-1rem text-2xl flex">
                            <p className="flight-destination text-2xl ml-auto">
                                {flight.destinationPersianName}
                            </p>
                            <p className="text-2xl">
                                {flight.adultPrice}
                                تومان
                            </p>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default Schedule;