import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value) => {
    return `${value}°C`;
};

const SearchSlider = () => {
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const range = [1,2,3,4,5,6,7,8];
    return (
        <div className="slider-wrapper" onClick={(e) => {e.stopPropagation()}}>
            <Box sx={{ width: 220}}>
                <Slider
                    style={{color:"#1890ff"}}
                    getAriaLabel={() => range}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </div>
    );
};

export default SearchSlider;