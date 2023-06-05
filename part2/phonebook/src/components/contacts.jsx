const Contacts = ({ filteredPersons }) => {
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
            </tr>
            )}
        </tbody>
      </table>
    </div>
  }

  export default Contacts