import React from 'react';


const Weather = ({result}) => {

  const { name, main } = result;
  if(!name) return null;
  const kelvin = 273.15;

  return ( 
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2> The weather in {name} is:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin).toFixed(2)} <span> &#x2103; </span>
        </p>
        <p> Maximun Temperature:
          {parseFloat(main.temp_max - kelvin).toFixed(2)} <span> &#x2103; </span>
        </p>
        <p> Minimun Temperature:
          {parseFloat(main.temp_min - kelvin).toFixed(2)} <span> &#x2103; </span>
        </p>
      </div>
    </div>
 );
}

export default Weather;