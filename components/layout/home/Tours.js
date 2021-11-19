import React,{useEffect,useState} from 'react';
import Image from "next/image";
import logo from '../../../Assets/Images/Icons/logo-new.svg';
import Slider from 'react-slick';
import {international, inner} from "./toursData";
import Cardxx from "./Cardxx";

const Tours = () => {
    const [show, setShow] = useState(1);
    const [windowSize,setWindowSize] = useState();
    // tour slides number to show
    const slidesNumber = windowSize < 900 ? 1.2 : 2.5;
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: slidesNumber,
        slidesToScroll: 1,
        rtl:false,
        nextArrow: <SampleNextArrow className="cardxx-nextArrow" />,
        prevArrow: <SamplePrevArrow className="cardxx-prevArrow" />
    };
    // data to be mapped on
    const data = show === 1 ? international : inner ;
    //responsive slideshow
    useEffect(() => {
            setWindowSize(window.innerWidth)
    },[windowSize]);
    return (
        <div className="tours mb-12">
            <div className="flex mb-8 tours-title">
                <div className="tours-click flex items-center">
                    <p className="tours-paragraph">
                        تورهای
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
                <Slider {...settings} >
                {data.map(card => {
                    return (
                        <Cardxx key={card.name} name={card.name} time={card.time} img={card.src} price={card.price}/>
                    );
                })}
                </Slider>
            <p className="tours-more">
                مشاهده بیشتر
            </p>
        </div>
    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, transform:"translateX(4rem)", padding:"2.5rem", display: "block", background: "#6B7280", borderRadius:"12px"  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, transform:"translateX(-6rem)" , padding:"2.5rem", display: "block", background: "#6B7280", borderRadius:"12px" }}
            onClick={onClick}
        />
    );
}

export default Tours;


