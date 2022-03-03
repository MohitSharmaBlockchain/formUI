import './App.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [value, setValue] = React.useState(
    new Date('2014-08-18T21:11:54'),
  );
  const [resolution, setresolution] = React.useState('');
  const [frequency, setfrequency] = React.useState('');
  const [accounts, setaccounts] = React.useState('');
  const [regions, setregions] = React.useState('');
  const [instances, setinstances] = React.useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="formUI">
      <h3>Reservation Utillization</h3>
      <h5 style={{ marginTop: "0.7rem" }}>CONFIGURE YOUR REPORTS</h5>
      <div className='inputs'>
        <FormControl sx={{ m: 1, maxWidth: 263, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Resoluion</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={resolution}
            onChange={(e) => setresolution(e.target.value)}
            label="Resolution"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, maxWidth: 263, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Frequency</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={frequency}
            onChange={(e) => setfrequency(e.target.value)}
            label="Frequency"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <div className='margin8'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='margin8'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <FormControl sx={{ m: 1, maxWidth: 263, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Accounts</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={accounts}
            onChange={(e) => setresolution(e.target.value)}
            label="Accounts"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, maxWidth: 263, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Regions</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={regions}
            onChange={(e) => setregions(e.target.value)}
            label="Regions"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, maxWidth: 263, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Instances</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={instances}
            onChange={(e) => setinstances(e.target.value)}
            label="Instances"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button style={{ marginBottom: '0.7rem', marginLeft: '2rem' }} variant="contained">Update</Button>
      <br />
      <FormControlLabel style={{ marginLeft: '1.2rem' }} control={<Checkbox defaultChecked />} label="Show Graph" />
    </div>
  );
}

export default App;
