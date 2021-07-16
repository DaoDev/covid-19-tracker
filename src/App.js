import { useState } from "react";
import { useEffect } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/ConutrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId);
      //call API
      getReportByCountry(Slug).then((res) => {
        //xoa item cuoi cung trong array res.data
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  return (
    <div className="App">
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </div>
  );
}

export default App;
