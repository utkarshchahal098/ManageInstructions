import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";
import LandingPage from "./Component/Pages/LandingPage/LandingPage";
import axios from "axios";
import { MyContext } from "./Component/utilities/Context/context";

const baseurl = "https://localhost:7054/";
const CountryApi = baseurl + "api/Countries";

function App() {
  const [countries, setCountries] = useState(null);
  
  useEffect(() => {
    axios.get(CountryApi).then((response) => {
      setCountries(response.data);
    });
  }, []);

  if (!countries) {
    console.log("No data found");
  } else {
    console.log("Countries list, ", countries);
  }

  return (
    <div className="App">
      <div>
        <MyContext.Provider value={{countries}}>
          <Header toolname="Manage Instructions" advisorId="A12387" />
          <LandingPage></LandingPage>
          <Footer />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default App;
