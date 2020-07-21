import React, {useState, useEffect} from 'react'
import AddNew from './components/AddNew'
import Filter from './components/Filter'
import Number from './components/Number'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)

    const hook = () => {
        personService 
            .getAll()
                .then(initialPersons => {
                    setPersons(initialPersons)
                })
    }
    useEffect(hook, [])

    const showMessage = (message) => {
        setMessage(message)
        setTimeout(() => {
            setMessage(null)
        }, 5000)
    }

    const add = (event) => {
        console.log('newname', newName)
        console.log('number', newNumber);
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            console.log('same name')
            if (window.confirm(`${newName} is already added to phonebook, want to replace the old number?`)) {
                const newObject = {
                    name: newName,
                    number: newNumber
                }
                const idOfReplacement = persons.find(person => person.name === newName).id
                personService.update(idOfReplacement, newObject)
                hook()
                showMessage('Number changed')
            }
        } else {
            const contact = {
                name: newName,
                number: newNumber
            }
            personService
                .create(contact)
                    .then(returned => {
                        setPersons(persons.concat(returned))
                    })
            showMessage('Contact added')
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

    const deletePerson = (id) => {
        console.log('delete ', id)
        const deleteObject = persons.find(person => person.id === id)
        const deleteName = deleteObject.name
        if (window.confirm('Are you sure you want to delete ' + deleteName)) {
            personService.deletePerson(id)
        }
        hook()
        showMessage('Contact deleted')
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={message} /> 
            <Filter filter={filter} filterChange={filterChange} /> 
            <AddNew add={add} newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} />
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map((persoona, i) => 
                    <Number 
                        key={i}
                        person={persoona}
                        deletePerson={() => deletePerson(persoona.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default App