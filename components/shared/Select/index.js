import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';

const Selection = ({label}) => {
    const [source, setSource] = React.useState('');

    const handleChange = (event) => {
        setSource(event.target.value);
    };
  return (
      <div>
          <FormControl sx={{ m: 1, minWidth: 170,borderRadius:"15px" }}>
              <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
              <Select
                  sx={{backgroundColor:"white", overflowX:"hidden",borderRadius:"15px"}}
                  labelId="demo-simple-select-helper-label"
                  id="grouped-select "
                  value={source}
                  label={label}
                  onChange={handleChange}
              >
                  <ListSubheader>khareji </ListSubheader>
                      <MenuItem value="tehran">thr</MenuItem>
                      <MenuItem value="karaj">karaj</MenuItem>

                  <ListSubheader> dakheli</ListSubheader>
                      <MenuItem value="esf">esf</MenuItem>
                      <MenuItem value="khoramshahr">khoramshahr</MenuItem>



              </Select>
          </FormControl>
      </div>
  );
};
export default Selection;