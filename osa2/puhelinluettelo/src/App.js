import React, {useState, useEffect} from 'react'
import AddNew from './components/AddNew'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const hook = () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }
    useEffect(hook, [])

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