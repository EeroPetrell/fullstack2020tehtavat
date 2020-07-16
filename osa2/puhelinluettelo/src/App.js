import React, {useState} from 'react'
import AddNew from './components/AddNew'
import Filter from './components/Filter'
import Numbers from './components/Numbers'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const add = (event) => {
        console.log('newname', newName)
        console.log('number', newNumber);
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            alert(newName + ' is already added to phonebook')
        } else {
            const contact = {
                name: newName,
                number: newNumber,
            }
            setPersons(persons.concat(contact))
        }
        setNewName('')
        setNewNumber('')
        console.log(persons)
    }

    const nameChange = (event) => {
        console.log('name', event.target.value)
        setNewName(event.target.value)
    }

    const numberChange = (event) => {
        console.log('number', event.target.value)
        setNewNumber(event.target.value)
    }

    const filterChange = (event) => {
        console.log('filter', event.target.value)
        setFilter(event.target.value)
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} filterChange={filterChange} /> 
            <AddNew add={add} newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} />
            <h2>Numbers</h2>
            <Numbers personsToShow={personsToShow} /> 
        </div>
    )
}

export default App