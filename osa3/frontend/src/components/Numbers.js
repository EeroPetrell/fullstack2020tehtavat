import React from 'react'

const Numbers = ({ personsToShow, deletePerson }) => {

    return (
        <ul>
            {personsToShow.map( person => <li key={person.id}>{person.name}: {person.number} <button onClick={() => deletePerson(person.id)}>delete</button> </li>)}
        </ul>
    )
}

export default Numbers