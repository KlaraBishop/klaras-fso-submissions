import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [searchBox, setSearchBox] = useState('');

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchBox.toLowerCase()))

  const onSubmit = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name === newName)){
      window.alert(`${newName} is already in the phonebook`)
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      
      setPersons([...persons, newPerson])
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} type='text' onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} type='tel' onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={e => onSubmit(e)}>add</button>
        </div>
      </form>
      <h2>Search</h2>
      <div>
        search: <input value={searchBox} type='text' onChange={e => setSearchBox(e.target.value)} />
      </div>
      <h2>Numbers</h2>
      ...
      <ul>
        {filteredPersons.map(person => <li key={person.name}>{`${person.name} ${person.number}`}</li>)}
      </ul>
    </div>
  )
}

export default App