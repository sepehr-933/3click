import React from "react";
import img from '../../../../public/Assets/Images/jpeg/magazine/kysh_dr_shb_4_5e2e01af11.jpg'

const ImageBox = ({firstText, secondText, image}) => {
   const style={
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="image-box">

        </div>
    );
};
export default ImageBox;