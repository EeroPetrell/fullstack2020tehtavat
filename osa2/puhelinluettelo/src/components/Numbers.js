import React from 'react'

const Numbers = (props) => {

    const personsToShow = props.personsToShow

    return (
        
        <div>
            {personsToShow.map( person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
        
    )
}

export default Numbers