import React from "react";
import Image from "next/image";
//images
import img1 from '../../../Assets/Images/jpeg/footer/havapeymaei-keshvari.webp'
import img2 from '../../../Assets/Images/jpeg/footer/havapeymaei-keshvari (1).webp'
import img3 from '../../../Assets/Images/jpeg/footer/hoghoghe-mosafer.webp'
import img4 from '../../../Assets/Images/jpeg/footer/logo.png'
import img5 from '../../../Assets/Images/jpeg/footer/nerkhebilit.webp'
import img6 from '../../../Assets/Images/jpeg/footer/nerkhebilit (1).webp'
import logo from '../../../Assets/Images/Icons/logo-new.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-normal flex items-center flex-col tab-port:grid tab-port:grid-cols-3 gap-16">
                <div className="footer-details gap-8 grid grid-col-6 col-start-1 col-end-3">
                    {/*details parts*/}
                    {/*part 1*/}
                    <div className="footer-details__parts">
                        <h3 className="footer-details__heading">
                            سه کلیک
                        </h3>
                        <p className="footer-details__para">
                            بلیط هواپیما چارتر
                        </p>
                        <p className="footer-details__para">
                            تور کیش
                        </p>
                        <p className="footer-details__para">
                            تور دبی
                        </p>
                        <p className="footer-details__para">
                            تور استانبول
                        </p>
                        <p className="footer-details__para">
                            بلیط هواپیما کیش
                        </p>
                        <p className="footer-details__para">
                            بلیط هواپیما استانبول
                        </p>
                        <p className="footer-details__para">
                            بلیط هواپیما دبی
                        </p>
                    </div>
                    {/*part 2*/}
                    <div className="footer-details__parts">
                        <h3 className="footer-details__heading">
                            راهنما و پشتیبانی
                        </h3>
                        <p className="footer-details__para">
                            تماس با ما
                        </p>
                        <p className="footer-details__para">
                            درباره ما
                        </p>
                        <p className="footer-details__para">
                            قوانین و مقررات
                        </p>
                        <p className="footer-details__para">
                            راهنمای استرداد بلیط
                        </p>
                    </div>
                    {/*part 3*/}
                    <div className="footer-details__parts">
                        <h3 className="footer-details__heading">
                            اطلاعات تکمیلی
                        </h3>
                        <p className="footer-details__para">
                            فرصت شغلی
                        </p>
                        <p className="footer-details__para">
                            قوانین و بخش نامه کرونا
                        </p>
                        <p className="footer-details__para">
                            رزرو هتل
                        </p>
                        <p className="footer-details__para">
                            رزرو تور
                        </p>
                    </div>
                    {/*part 4*/}
                    <div className="footer-details__parts hidden tab-port:block col-start-4 col-end-7">
                        <h3 className="footer-details__heading">
                            سه کلیک خرید بلیط هواپیما،تور و هتل
                        </h3>
                        <p className="footer-details__para">
                            آدرس سرزمین تابان کیش: کیش، بلوار امیرکبیر، بلوار ساحل، خیابان رودکی، هتل پارمیدا، طبقه همکف
                        </p>
                        <p className="footer-details__para">
                            آدرس دفتر پشتیبانی: تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک 1166
                        </p>
                        <p className="footer-details__para">
                            پشتیبانی 24 ساعته: 22222426-021
                        </p>
                        <p className="footer-details__para">
                            شبکه های اجتماعی:
                        </p>
                    </div>
                </div>
                <div className="footer-brands gap-x-6 gap-y-20 grid mt-2">
                    <div className="footer-brand">
                        <Image src={img1} alt="logo" className="footer-img"/>
                    </div>
                    <div className="footer-brand">
                        <Image src={img2} alt="logo" className="footer-img"/>
                    </div>
                    <div className="footer-brand">
                        <Image src={img3} alt="logo" className="footer-img"/>
                    </div>
                    <div className="footer-brand">
                        <Image src={img4} alt="logo" className="footer-img"/>
                    </div>
                    <div className="footer-brand">
                        <Image src={img5} alt="logo" className="footer-img"/>
                    </div>
                    <div className="footer-brand">
                        <Image src={img6} alt="logo" className="footer-img"/>
                    </div>
                </div>
                <div className="footer-details__parts block tab-port:hidden col-start-4 col-end-7">
                    <h3 className="footer-details__heading">
                        سه کلیک خرید بلیط هواپیما،تور و هتل
                    </h3>
                    <p className="footer-details__para">
                        آدرس سرزمین تابان کیش: کیش، بلوار امیرکبیر، بلوار ساحل، خیابان رودکی، هتل پارمیدا، طبقه همکف
                    </p>
                    <p className="footer-details__para">
                        آدرس دفتر پشتیبانی: تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک 1166
                    </p>
                    <p className="footer-details__para">
                        پشتیبانی 24 ساعته: 22222426-021
                    </p>
                    <p className="footer-details__para">
                        شبکه های اجتماعی:
                    </p>
                </div>
                <div className="col-start-1 col-end-4 text-center">
                    <p className="footer-digits">
                        0.9.46
                    </p>
                    <p className="footer-copyright flex justify-center items-center mt-8 text-xl">
                        ©تمامی حقوق این سایت متعلق به آژانس مسافرتی
                        <div className="footer-copyright__img w-24">
                            <Image src={logo} alt="logo"/>
                        </div>
                        می باشد.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;