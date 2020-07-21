import React from 'react'
import Info from './Info'

const Countries = (props) => {

    const countriesToShow = props.countriesToShow
    const handleChoice = props.handleChoice

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countriesToShow.length !== 1) {
        return (
            <div>
                {countriesToShow.map( country => <p key={country.name}>{country.name}<button onClick={() => handleChoice(country)}>show</button></p> )}
            </div>
        )
    } else {
        return (
            <div>
                <Info country={countriesToShow[0]} /> 
            </div>
        )
    }

}

export default Countries