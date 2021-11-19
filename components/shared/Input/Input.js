import React from 'react';
import Image from "next/image";

const cities = [
    {title : 'تهران'},
    {title: 'مشهد'}
];
const handleFocus = (e) => {
  console.log('s')
};

const Inputxx = ({label, classes, width,icon}) => {
  return (
          <div
              style={{width:width}}
              className={`input ${classes}`} onFocus={(e) => handleFocus(e)}
          >
              <label className="input-label">
                  {label}
              </label>
              {icon && <Image src={icon} alt="icon" className="input-icon"/>}
          </div>
  );
};
export default Inputxx;

