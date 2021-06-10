import React, { useState } from "react";
import Error from "../components/Error";

const Form = ({search, setSearch, consult, setConsult}) => {
 
  const [error, setError] = useState(false);

  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Both fields are required" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Choose your country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country:</label>
      </div>
      <div>
        <input
          type="submit"
          value="search weather"
          className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
