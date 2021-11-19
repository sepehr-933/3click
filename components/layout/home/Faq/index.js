import React from "react";
import Image from "next/image";
import logo from "../../../../Assets/Images/Icons/logo-new.svg";
import Accordion from "../../../shared/Accordion";

const Faq = () => {
    return (
        <div className="faq container-normal p-8">
            <div className="tours-click flex items-center mb-12">
                <p className="tours-paragraph">
                    سوالات متداول
                </p>
                <Image src={logo} alt="logo" className="tours-logo"/>
            </div>
            <Accordion heading="شرایط و قوانین کنسل کردن بلیط هواپیما">
                شرایط و قوانین کنسل کردن بلیط هواپیما بسته به کلاس پروازی،ایرلاین و مدت زمان باقی مانده تا پرواز متفاوت است و میزان بازگشت وجه در پرواز های داخلی بین ۱۰ الی ۹۰ درصد میباشد برای اطلاع از نحوه کنسل کردن بلیط و چگونگی بازگشت وجه کلیک کنید
            </Accordion>
            <Accordion heading="حداکثر میزان بار مجاز قابل حمل در هواپیما چقدر است و در صورت به همراه داشتن اضافه بار چقدر جریمه خواهیم شد؟">
                یکی از دغدغه‌های اساسی مسافران در سفرهای هوایی، میزان به همراه داشتن بار است. باید بدانید که این میزان معمولا در ایرلاین‌های گوناگون، متفاوت است ولی عموما در اکثر ایرلاین ها همراه داشتن بار تا وزن 30 کیلوگرم مجاز بوده و در صورت مشاهده‌ی اضافه بار، به همان میزان ایرلاین می‌تواند شما را جریمه کند. همچنین جریمه اضافه بار بستگی به ایرلاین و قوانین آن دارد.
            </Accordion>
        </div>
    );
};
export default Faq;