import React from 'react'

const Number = (props) => {

    const person = props.person
    console.log(person.id)

    return (
        
        <div key={props.id}>
            {person.name} {person.number}
            <button onClick={props.deletePerson}>delete</button>
        </div>
        
    )
}

export default Number