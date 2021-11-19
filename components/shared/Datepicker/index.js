import React,{useState} from "react";
import DatePicker,{DateObject} from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import "react-multi-date-picker/styles/colors/red.css";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import InputIcon from "react-multi-date-picker/components/input_icon";


const DateBox = ({show}) =>{
    const [values, setValues] = useState([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
    ]);
    const [value2,setValue2] = useState(new Date())
  return (
      <div className="date-picker">
          <DatePicker
              value={show === 2 ? value2 : values}
              onChange={setValues}
              range={show === 2 ? false : true}
              calendar={persian}
              locale={persian_fa}
              numberOfMonths={2}
              className="red"
          />
      </div>
  );
};
export default DateBox;