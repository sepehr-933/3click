import React,{useState,useEffect,useRef} from 'react';
import Image from "next/image";
import logo from '../../../Assets/Images/Icons/logo-new.svg'
import Buttonxx from "../button/Button";
import menu from '../../../Assets/Images/Icons/icons8-menu-50.png'

const Header = () => {
    const ref = useRef(null);
    //responsive
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref && ref.current.contains(event.target)) {
                return;
            }
            setShowMenu(false);
        })
    });
    const handleClick = e => {
        setShowMenu(!showMenu)
        e.stopPropagation();
    }
    return (
        <div className="header relative">
            <div
                onClick={(e) => {handleClick(e)}}
                className="absolute top-8 right-8 w-16 block md:hidden"
            >
                <Image src={menu} alt="menu"/>
            </div>
            <div className="flex items-center justify-center header-container">
                <div className="ml-4 ">
                    <Image src={logo} alt="logo" className="header-logo "/>
                </div>
                    <ul
                        ref={ref}
                        className={`header-ul md:flex ${showMenu === false ? "hidden" : "flex"}`}
                    >
                        <li className="header-li">
                            بلیط هواپیما
                        </li>
                        <li className="header-li">
                            هتل
                        </li>
                        <li className="header-li">
                            تور
                        </li>
                        <li className="header-li">
                            مجله سه کلیک
                        </li>
                        <Buttonxx type="white" classes="header-button">
                            پیگیری و استرداد
                        </Buttonxx>
                    </ul>

                    <p className="header-number mr-auto hidden md:block">
                        021-222222426
                    </p>
                    <Buttonxx type="white hidden md:block">
                        ورود/ثبت نام
                    </Buttonxx>
            </div>

        </div>
    );
};
export default Header;