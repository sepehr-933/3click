import React from "react";
import Inputxx from "../../shared/Input/Input";
import Buttonxx from "../../shared/button/Button";
import Selection from "../../shared/Select";
import DateBox from "../../shared/Datepicker";

const BlueBox = () => {
    const [show, setShow] = React.useState(1);
    return (
        <div>
            <div className="search-blueBox p-8">
                {/*radio*/}
                <div className="searchSection-radio mr-16">
                    <p className="searchSection-paragraph">
                        یکطرفه
                    </p>
                    <span
                        className="searchSection-circle"
                        onClick={() => setShow(2)}
                    >
                     {show === 2 && <span className="searchSection-circle__filler"></span>}
                 </span>
                    <p className="searchSection-paragraph">
                        دو طرفه
                    </p>
                    <span
                        className="searchSection-circle"
                        onClick={() => setShow(1)}
                    >
                    {show === 1 && <span className="searchSection-circle__filler"></span>}
                 </span>
                </div>
                <div className="flex flex-wrap items-center mr-16">
                    <Selection label="مبدا" />
                    <Selection label="مقصد" />
                    <DateBox show={show}/>
                    <Inputxx label="تعداد نفرات" />
                    <Buttonxx type="big" classes="w-full sm:w-auto ml-12">
                        جستجو
                    </Buttonxx>
                </div>
            </div>
        </div>
    );
};
export default BlueBox;