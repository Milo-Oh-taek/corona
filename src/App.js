import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import CountryList from './components/CountryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState('kr');
  useEffect(() => {
    console.log("리랜더링됨:" + country);
  },[country])

  const getCountry = (from) => {
    setCountry(from);
    console.log("App:getCountry" + country);
  }

  return (
    <div className="App">
      <Header />
      <CountryList send={country} getCountry={getCountry} />
      <Contents send={country} />
    </div>
  );
}

export default App;
