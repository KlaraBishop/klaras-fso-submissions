import { useState, useEffect } from 'react'
import Contacts from './components/contacts';
import NewContactForm from './components/new-contact-form';
import SearchBox from './components/search-box'; 
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterValue, setFilterValue] = useState('')
  
  useEffect (() => {
    axios.get('http://localhost:8009/persons')
    .then(res => setPersons(res.data))
  },[])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  const addPerson = (newPerson) => {
    if (persons.some((person) => person.name === newPerson.name)){
      window.alert(`${newPerson.name} is already in the phonebook`)
      return
    }

    setPersons([...persons, newPerson])
  }

  const changeFilter = (value) => {
    setFilterValue(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <NewContactForm addPerson={addPerson} />
      <SearchBox changeFilter={changeFilter} />
      <Contacts filteredPersons={filteredPersons} />
    </div>
  )
}

export default App