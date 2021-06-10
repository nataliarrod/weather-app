import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const api = async () => {
      if (consult) {
        const appId = "14285058d605a0c3f85c195c6b996193";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setConsult(false);

        if(result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }

      }
    };
    api();
  }, [consult]);

  let component;
  if(error) {
    component = <Error message="Not found results" />
  } else {
    component = <Weather result={result} />
  };

  return (
    <>
      <Header title="Weather App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
                consult={consult}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
