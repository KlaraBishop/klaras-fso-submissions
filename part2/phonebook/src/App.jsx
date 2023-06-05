import { useState } from 'react'
import Contacts from './components/contacts';
import NewContactForm from './components/new-contact-form';
import SearchBox from './components/search-box'; 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filterValue, setFilterValue] = useState('') 

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