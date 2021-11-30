import React,{useState} from "react";
import icon from '../../../Assets/Images/Icons/icons8-back-20.png'
import Image from "next/image";
import Animated from "react-mount-animation";



const Accordion = ({heading, children}) => {
    const [active, setActive] = useState(false);
    return (
        <div
            onClick={() => setActive(!active)}
            className="accordion"
        >
            <div className="accordion-heading p-8 relative">
                <p className="max-w-2xl">
                    {heading}
                </p>
                <div className="absolute top-12 left-8">
                    <Image src={icon} alt="icon"  className="accordion-img"/>
                </div>
            </div>
                <Animated.div
                    show={active}
                    mountAnim={
                        ` 
                       0% {height: 1px}
                       100% {height: 81px} 
                       `
                    }
                    unmountAnim={
                        `
                       0% {height : 81px}
                       100% {height: 1px}
                    `
                    }
                    time={0.4}
                    unmountTime={0.5}
                    className="accordion-content mt-32"
                >
                    {children}
                </Animated.div>
        </div>
    );
};
export default Accordion;