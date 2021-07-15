import { useState } from "react";
import { useEffect } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/ConutrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=> { 
    getCountries()
    .then(res => { 
      setCountries(res.data) 
    })
  }, [])

  const handleOnChange = (e) => { 
    console.log('e', e);
    console.log('countries', countries);
    const {Slug}  = countries.find(country => country.ISO2.toLowerCase() === e.target.value)
    console.log(Slug);
    getReportByCountry(Slug)
    .then(res => console.log('getReportByCountry', res))
  }
  return (
    <div className="App">

      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;
