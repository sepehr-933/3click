import React from "react";
import SearchAccordion from "./SearchAccordion";
import SearchSlider from "./SearchSlider";
import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";
//logos
import ata from '../../../../Assets/Images/Icons/I3.png'
import closure from '../../../../Assets/Images/Icons/icons8-close-window-50.png'
//images
import img1 from '../../../../Assets/Images/jpeg/sidebar/3_5ea8804d7a.jpg'
import img2 from '../../../../Assets/Images/jpeg/sidebar/Banner_Sidebar_3_Click_v2_79cdcbdb31.jpg'
import img3 from '../../../../Assets/Images/jpeg/sidebar/Banner_Sidebar_Marina_3c936c7901.jpg'
import img4 from '../../../../Assets/Images/jpeg/sidebar/Banner_Sidebar_Mirazh_5e1d94b9b0_b4075d0753.jpg'
import img5 from '../../../../Assets/Images/jpeg/sidebar/Banner_Sidebar_Mirazh_bb15b86fcb.jpg'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SideBar = ({show, setShow}) => {
    return (
        <div className={`sidebar   ${show ? "block" : "hidden"}  tab-port:block`}>
            <div className={`closure w-12 ${show ? "block" : "hidden"} md:hidden absolute top-4 left-4`}>
                <Image
                    onClick={() => setShow(false)}
                    src={closure} alt="closure"
                />
            </div>
            <h3 className="sidebar-heading">
                نمایش n پرواز از n
            </h3>
            <SearchAccordion heading="زمان رفت" firstParam="0" secondParam="24">
                <SearchSlider />
            </SearchAccordion>
            <SearchAccordion heading="بازده قیمتی (تومان)" firstParam="445,900 تومان" secondParam="767,000 تومان">
                <SearchSlider />
            </SearchAccordion>
            <SearchAccordion heading="مدت پرواز رفت (ساعت)" firstParam="00:40" secondParam="05:40">
                <SearchSlider />
            </SearchAccordion>
            <SearchAccordion  heading="نوع پرواز">
                <div  className="flex items-center">
                    <Checkbox sx={{width:30}} {...label} defaultChecked color="default" />
                    <p className="">
                        چارتری
                    </p>
                </div>
                <div  className="flex items-center">
                    <Checkbox sx={{width:30}} {...label} defaultChecked color="default" />
                    <p className="">
                        سیستمی
                    </p>
                </div>
            </SearchAccordion>
            <SearchAccordion heading="شرکت هواپیمایی">
                <div className="flex items-center">
                    <Checkbox {...label} color="default"/>
                    <div className="w-8">
                        <Image src={ata} alt="ata"/>
                    </div>
                    <p className="ml-auto mr-2 text-primary">
                        آتا
                    </p>
                    <p className="text-gray text-primary">
                        732,600 تومان
                    </p>
                </div>
            </SearchAccordion>
            <SearchAccordion heading="فرودگاه ها">
                <div className="flex items-center">
                    <Checkbox {...label} color="default"/>
                    <p className="ml-auto text-primary">
                        اصفهان
                    </p>
                    <p className="text-gray">
                         (IFN)
                    </p>
                </div>
                <div className="flex items-center">
                    <Checkbox {...label} color="default"/>
                    <p className="ml-auto text-primary">
                        تهران
                    </p>
                    <p className="text-gray">
                         (THR)
                    </p>
                </div>
            </SearchAccordion>
            {/*ads*/}

                <div className="sidebar-footer">
                    <Checkbox {...label} color="default"/>
                    نمایش پروازهای تکراری
                </div>
            <div className="sidebar-ads pt-4">
                <div className="mb-4">
                    <Image src={img2} alt="hotel"/>
                </div>
                <div className="mb-4">
                    <Image src={img3} alt="hotel"/>
                </div>
                <div className="mb-4">
                    <Image src={img1} alt="hotel"/>
                </div>
                <div className="mb-4">
                    <Image src={img3} alt="hotel"/>
                </div>
                <div >
                    <Image src={img5} alt="hotel"/>
                </div>
            </div>

        </div>
    );
};

export default SideBar;