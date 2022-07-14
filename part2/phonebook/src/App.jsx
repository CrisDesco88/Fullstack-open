import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [allPersons, setAllPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedItem, setSearchedItem] = useState("");

  const addRegister = (event) => {
    event.preventDefault();
    if (newName.trim().length < 1) return;
    const registerObject = {
      name: newName.trim(),
      number: newNumber.trim()
    };

    const nameCoincidence = persons.find(
      (person) =>
        person.name.toLowerCase() === registerObject.name.toLowerCase()
    );

    if (nameCoincidence) {
      alert(`${registerObject.name} is already added to phonebook`);
      return;
    } else {
      setPersons([registerObject, ...persons]);
      setAllPersons([registerObject, ...allPersons]);
      setNewName("");
      setNewNumber("")
    }
  };

  const handleNameChange = ({ target }) => {
    setNewName(target.value);
  };

  const handleNumberChange = ({ target }) => {
    setNewNumber(target.value);
  };

  const handleSearch = ({ target }) => {
    setSearchedItem(target.value);
    const regex = new RegExp(target.value, "i");
    const filteredPersons = allPersons.filter((person) => person.name.match(regex));
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <input type="text" value={searchedItem} onChange={handleSearch}/>
      <form onSubmit={addRegister}>
        <div>
          name:
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.length === 0 ?
          allPersons.map((person) => {
            return (
              <div key={person.name}>
                {person.name} {person.number}
              </div>
            );
          }) : 
          persons.map((person) => {
            return (
              <div key={person.name}>
                {person.name} {person.number}
              </div>
            );
        })
      }
    </div>
  );
}

export default App;
