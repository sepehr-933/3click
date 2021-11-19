import React,{useEffect,useState} from "react";
import Image from "next/image";
import logo from "../../../../Assets/Images/Icons/logo-new.svg";
import Schedule from "./Schedule";
import useAxios from "../../../../Hooks/useAxios";
import Slider from 'react-slick'

const Flights = () => {
    //slick settings
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        rtl:true,
    };
    const [show, setShow] = useState(1);
    const [windowSize, setWindowSize] = useState();
    //request
    const {response} = useAxios({
        url:"/ai/GetSuggestedPopularFlight",
        method: 'get'
    });
    const flightType = show === 1 ? 'international' : 'local';
    const data = response && response.data[flightType];
    const finalData = data && data.slice(0,6);
    //responsive
    useEffect(() => {
        setWindowSize(window.innerWidth);
    },[windowSize]);
    return (
        <div className="flight tours">
            {/*radio buttons and title*/}
            <div className="flex mb-12 tours-title">
            <div className="tours-click flex items-center">
                <p className="tours-paragraph">
                    پرواز های
                </p>
                <Image src={logo} alt="logo" className="tours-logo"/>
            </div>
            <div className="tours-radio flex items-center">
                <span
                    className="tours-circle"
                    onClick={() => setShow(2)}
                    style={{border:show === 1 && "2px solid #a1a1a1"}}
                >
                     {show === 2 && <span className="tours-circle__filler"></span>}
                 </span>
                <p style={{color:show === 2 ? "#25479a" : "#a1a1a1"}} className="searchSection-paragraph">
                    داخلی
                </p>
                <span
                    className="tours-circle"
                    onClick={() => setShow(1)}
                    style={{border:show === 2 && "2px solid #a1a1a1"}}
                >
                    {show === 1 && <span className="tours-circle__filler"></span>}
                 </span>
                <p style={{color:show === 1 ? "#25479a" : "#a1a1a1"}} className="searchSection-paragraph">
                    خارجی
                </p>
            </div>
            </div>
            {/*flights schedule*/}
            <div  className={`flight-schedules`}>
                {
                    response === null ? null
                        :
                        finalData.map(flight => {
                            return (
                                <Schedule key={flight.source} flightsData={flight}
                                          heading={flight.flights[0].sourcePersianName}/>
                            )
                        })
                }
            </div>
                        <div className="flight-schedules__res">
                        <Slider {...settings}>
                            {
                                response === null ? null :
                                finalData.map(flight => {
                                    return (
                                        <Schedule key={flight.source} flightsData={flight} heading={flight.flights[0].sourcePersianName}/>
                                    )
                                })
                            }
                        </Slider>
                        </div>

        </div>
    );
};

export default Flights;

