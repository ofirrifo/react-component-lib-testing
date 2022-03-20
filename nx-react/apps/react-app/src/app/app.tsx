// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import Button from '@mui/material/Button';



export function App() {
  const [city, setCity] = useState('NY');

  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];

  return (
    <div className="container">
      <div>Prime</div>
      <Dropdown
        value={city}
        options={citySelectItems}
        placeholder="Select a City"
        onChange={(e) => setCity(e.value)}/>
      <div>MUI</div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <div>Ant</div>
      <div className="placeholder">Ant Dropdown Placeholder</div>
    </div>
  );
}

export default App;
