// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dropdown } from 'primereact/dropdown';


export function App() {

  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];

  const city = 'NY';

  function setCity(value: string) {
    console.log(value);
  }

  return (
    <>
      <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
    </>
  );
}

export default App;
