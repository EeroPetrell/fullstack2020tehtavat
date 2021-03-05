import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddNewForm from './components/AddNewForm'
import Search from './components/Search'
import Numbers from './components/Numbers'
import Notification from './components/Notification'


const App = () => {

    const [ persons, setPersons ] = useState([])
    const [ personsToShow, setPersonsToShow ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ search, setSearch ] = useState('')
    const [ message, setMessage ] = useState('')

    const baseUrl  = 'https://mysterious-harbor-75119.herokuapp.com/api/persons/'
    const loadData = () => {
        axios
            .get(baseUrl)
            .then(response => {
                setPersons(response.data)
                setPersonsToShow(response.data)
                console.log('data loaded', response.data)
            })
    }

    useEffect(loadData, [])

    const addName = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        if (persons.map(person=>person.number).includes(newNumber)) 
            window.alert(newNumber + ' is already on phonebook')
        else {
            axios
                .post(baseUrl, newPerson)
                .then(response => {
                    console.log(response)
                    setPersons(persons.concat(response.data))
                    setPersonsToShow(persons.concat(response.data))
                })
        }
        setNewName('')
        setNewNumber('')
        setMessage(newPerson.name + ' added')
        setTimeout(() => {
            setMessage(null)
        }, 5000)
    }

    const deletePerson = (id) => {
        console.log('delete', id)
        const deletesName = persons.filter(person => person.id === id)[0].name
        if (window.confirm('Do you really want to delete ' + deletesName)) {
            axios
            .delete(baseUrl + id)
            .then(response => {
                console.log(response)
                setPersons(persons.filter(person => person.id !== Number(id)))
                setPersonsToShow(persons.filter(person => person.id !== Number(id)))
            })
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setSearch('')
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setSearch('')
        setNewNumber(event.target.value)
    }

    const handleSearch = (event) => {
        const search = event.target.value.toLowerCase()
        console.log(search)
        setSearch(search)
        setPersonsToShow(persons.filter( person => person.name.toLowerCase().includes(search)))
    }

    return (
        <div>
            <h1>Phonebook</h1>

            <Search handleSearch={handleSearch} search={search} />
            
            <AddNewForm handleNameChange={handleNameChange} 
                handleNumberChange={handleNumberChange} 
                addName={addName} newName={newName} newNumber={newNumber} />
            
            <Notification message={message} />

            <h2>Numbers</h2>
            
            <Numbers personsToShow={personsToShow} deletePerson={deletePerson} /> 

        </div>
    )
}

export default App