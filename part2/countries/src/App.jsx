import { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesheets/App.css';

const Country = ({ country }) => {
  return <div>
    <h1>{country.name.common}</h1>
    <div>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
    </div>
    <h3>Languages: </h3>
    <ul>
      {
        Object.values(country.languages).map(language => <li key={language}>{language}</li>)
      }
    </ul>
    <img src={country.flags.png} />
  </div>
}

function App() {
  const [countries, setCountries] = useState([]);
  const [searchBox, setSearchBox] = useState('');

  const filteredList = countries.filter(country => country.name.common.toLowerCase().includes(searchBox.toLowerCase()) )

  const onShowClick = (name) => {
    setSearchBox(name)
  }

  const display = filteredList.length > 10 ? 'Too many matches, specify another filter'
  : filteredList.length > 1 ? filteredList.map(country => <p>{country.name.common} <input type='button' onClick={() => onShowClick(country.name.common)} value={'show'} /></p>)
  : filteredList.length == 1 ? <Country country={filteredList[0]} />
  : 'No matches'

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => setCountries(res.data))
  }, []);

  return <>
    <div>
      <label>Find Countries: </label>
      <input type='text' value={searchBox} onChange={e => setSearchBox(e.target.value)} />
    </div>
    <div>
      <div>{display}</div>
    </div>
  </>
}

export default App;
