const Contacts = ({ filteredPersons, handleDelete }) => {
    const handleClick = (event) => {
        handleDelete(event.target.id)
    }

    return <div>
      <h2>Contacts</h2>
      ...
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            {filteredPersons.map(person => 
            <tr key={person.name}>
                <td>{person.name} </td>
                <td>{person.number}</td>
                <td><input id={person.id} type="button" value='delete' onClick={e => handleClick(e)}/></td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  }

  export default Contacts