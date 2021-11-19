import React,{useEffect, useState} from "react";
import Image from "next/image";
import calendar from '../../../../Assets/Images/Icons/icons8-calendar-20.png'
import Slider from 'react-slick'

const PricingDate = () => {
    const [windowSize, setWindowSize] = useState();
    //slider settings
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: windowSize > 900 ? 6 : 2,
        slidesToScroll: 1,
        rtl:false,
        nextArrow: <SampleNextArrow className="cardxx-nextArrow" />,
        prevArrow: <SamplePrevArrow className="cardxx-prevArrow" />
    };
    useEffect(() => {
        setWindowSize(window.innerWidth);
    },[windowSize])
    return (
        <div className="calendar bg-white p-4">
            <div className="flex mb-4">
                <div className="calendar-img w-5 ml-2">
                    <Image src={calendar} alt="calendar"/>
                </div>
                <p className="text-xl font-bold ml-2">
                    تقویم قیمتی:
                </p>
                <p className="text-primary text-xl ml-auto">
                    ارزان ترین پرواز در روزهای قبل و بعداز جستجو
                </p>
                <div className="flex items-center calendar-blueText">
                    <div className="calendar-blueCircle ml-2"></div>
                    <p className="text-xl">
                        ارزان ترین پرواز
                    </p>
                </div>
            </div>
            <Slider {...settings} >
                <div className="calendar-slider__parts py-4 px-8 text-xl font-bold">
                    <p className="mb-4 ">
                        یک‌شنبه 23 آبان
                    </p>
                    <p className="text-center">
                        -
                    </p>
                </div>
                <div className="calendar-slider__parts py-4 px-8 text-xl font-bold">
                    <p className="mb-4">
                        دو‌شنبه 24 آبان
                    </p>
                    <p className="">
                        876,850 تومان
                    </p>
                </div>
                <div className="calendar-slider__parts py-4 px-8 text-xl font-bold">
                    <p className="mb-4">
                        سه شنبه 25 آبان
                    </p>
                    <p className="">
                        741,000 تومان
                    </p>
                </div>
                <div className="calendar-slider__parts py-4 px-8 text-xl font-bold">
                    <p className="mb-4">
                        چهارشنبه 26 آبان
                    </p>
                    <p className="">
                        950,600 تومان
                    </p>
                </div>
                <div className="calendar-slider__parts border-white py-4 px-8 text-xl font-bold">
                    <p className="mb-4">
                        پنجشنبه 27 آبان
                    </p>
                    <p className="">
                        788,500 تومان
                    </p>
                </div>
            </Slider>
        </div>
    );
};



//slider arrows
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, }}
            onClick={onClick}
        />
    );
}

export default PricingDate;