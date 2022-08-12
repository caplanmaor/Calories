import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Pasta', 'Hamburger', 'Salad', 'Salmon', 'Fries', 'Pumpkin Soup'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Autocomplete
 	 disablePortal
 	 id="combo-box-demo"
 	 options={options}
 	 sx={{ width: 300 }}
 	 renderInput={(params) => <TextField {...params} label="Foods" />}
	/>
      <Button variant="contained">Add</Button>
      </header>
    </div>
  );
}

export default App;
