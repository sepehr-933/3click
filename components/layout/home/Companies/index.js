import React from "react";
import Image from "next/image";
//images
import brand1 from '../../../../Assets/Images/jpeg/companies/aseman.png'
import brand2 from '../../../../Assets/Images/jpeg/companies/ata.png'
import brand3 from '../../../../Assets/Images/jpeg/companies/caspian.png'
import brand4 from '../../../../Assets/Images/jpeg/companies/emirates.png'
import brand5 from '../../../../Assets/Images/jpeg/companies/iranair.png'
import brand6 from '../../../../Assets/Images/jpeg/companies/kishair.png'
import brand7 from '../../../../Assets/Images/jpeg/companies/lufthansa.png'
import brand8 from '../../../../Assets/Images/jpeg/companies/mahan.png'
import brand9 from '../../../../Assets/Images/jpeg/companies/qatarairways.png'
import brand10 from '../../../../Assets/Images/jpeg/companies/qeshmair.png'
import brand11 from '../../../../Assets/Images/jpeg/companies/tailwind.png'
import brand12 from '../../../../Assets/Images/jpeg/companies/turkishair.png'
const companyIcons = [
    {img:brand1},
    {img:brand2},
    {img:brand3},
    {img:brand4},
    {img:brand5},
    {img:brand6},
    {img:brand7},
    {img:brand8},
    {img:brand9},
    {img:brand10},
    {img:brand11},
    {img:brand12},
];
const Companies = () => {
    const firstFive = companyIcons.slice(0,5);
    const rest = companyIcons.slice(5,12);
    return (
        <div className="companies my-16 container-small  p-12">
            <div className="flex justify-around items-center mb-12">
            {
                firstFive.map(icon => {
                    return (
                        <div key={icon.img} className="w-20">
                            <Image src={icon.img} alt="company brand" className="companies-img "/>
                        </div>
                    );
                })
            }
            </div>
            <div className="flex justify-around items-center">
            {
                rest.map(icon => {
                    return (
                        <div key={icon.img} className="w-20">
                            <Image src={icon.img} alt="company brand" className="companies-img "/>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default Companies;