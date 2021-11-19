import React, {useEffect, useState} from 'react';
import Slider from 'react-slick'
import Image from "next/image";
import ad1 from '../../../Assets/Images/jpeg/01_Desktop_54dc9e501f.jpg'
import ad2 from '../../../Assets/Images/jpeg/02_42fe7a9afd.jpg'
import ad3 from '../../../Assets/Images/jpeg/03_8474298352.jpg'

const Ads = () => {
    //responsive
    const [windowSize,setWindowSize] = useState();
    //responsive slideshow
    useEffect(() => {
        setWindowSize(window.innerWidth)
    },[windowSize]);
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl:true,
    };
    return (
        <div className="mx-8 h-full">
            {
                windowSize && windowSize > 800 ?
                <div className="ads gap-1/33 grid mx-auto">
                    <div className="ads-ad "><Image src={ad1} alt="ad1" className="ads-ad1 ads-img "/></div>
                    <div className="ads-ad"><Image src={ad2} alt="ad2" className="ads-ad2 ads-img"/></div>
                    <div className="ads-ad"><Image src={ad3} alt="ad3" className="ads-ad3 ads-img"/></div>
                </div>
                    :
                    <Slider {...settings}>
                        <div className="ads-ad h-full md:h-28"><Image src={ad1} alt="ad1" className="ads-ad1 ads-img "/></div>
                        <div className="ads-ad h-full md:h-28"><Image src={ad2} alt="ad2" className="ads-ad2 ads-img"/></div>
                        <div className="ads-ad h-full md:h-28"><Image src={ad3} alt="ad3" className="ads-ad3 ads-img h-full"/></div>
                    </Slider>
            }
        </div>
    );
};
export default Ads;