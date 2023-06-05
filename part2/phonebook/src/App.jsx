import { useState, useEffect } from 'react'
import Contacts from './components/contacts';
import NewContactForm from './components/new-contact-form';
import SearchBox from './components/search-box'; 
import database from './services/database';

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterValue, setFilterValue] = useState('')
  
  useEffect (() => {
    database.getAll().then(initPersons => setPersons(initPersons))
  },[])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  const addPerson = (newPerson) => {
    if (persons.some((person) => person.name === newPerson.name)){
      window.alert(`${newPerson.name} is already in the phonebook`)
      return
    }

    database.create(newPerson)
    .then(res => {console.log(res)})

    setPersons([...persons, newPerson])
  }

  const changeFilter = (value) => {
    setFilterValue(value)
  }

  const handleDelete = (id) => {
    if (window.confirm(`Delete ${persons[id - 1].name}?`)) {
      database.deletePerson(id)
  
      setPersons(persons.toSpliced(id - 1, 1))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <NewContactForm addPerson={addPerson} />
      <SearchBox changeFilter={changeFilter} />
      <Contacts filteredPersons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App