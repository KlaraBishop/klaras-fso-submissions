import { useState, useEffect } from 'react'
import Contacts from './components/contacts';
import NewContactForm from './components/new-contact-form';
import SearchBox from './components/search-box'; 
import database from './services/database';

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterValue, setFilterValue] = useState('')

  const getData = () => {
    database.getAll().then(initPersons => setPersons(initPersons))
  }
  
  useEffect (() => {
    getData()
  },[])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  const addPerson = (newPerson) => {
    
    const updateId = 1 + persons.findIndex(person => person.name === newPerson.name)
    console.log(updateId)

    if (updateId > 0) {
      if (window.confirm(`${newPerson.name} is already in contacts, replace number?`)) {
        database.updatePerson(updateId, newPerson)
        getData()
      }
      return
    }

    database.create(newPerson)
    getData()
  }

  const changeFilter = (value) => {
    setFilterValue(value)
  }

  const handleDelete = (id) => {
    if (window.confirm(`Delete ${persons[id - 1].name}?`)) {
      database.deletePerson(id)
      getData()
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