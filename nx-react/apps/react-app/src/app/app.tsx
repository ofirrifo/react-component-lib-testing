// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dropdown } from 'primereact/dropdown';
import {useState} from 'react';


export function App() {
  const [city, setCity] = useState('NY')

  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];


  return (
    <>
      <Dropdown
        value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
    </>
  );
}

export default App;
