import React, { useEffect, useState } from 'react'
import Finder from './components/Finder'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [finder, setFinder] = useState('')

  const hook = () => {
    axios 
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(finder.toLowerCase()))
  
  const finderChange = (event) => {
    setFinder(event.target.value)
  }

  const handleChoice = (props) => {
    setFinder(props.name)
  }


  return (
    <div>
      <h1>Countries</h1>
      <Finder finder={finder} finderChange={finderChange} />
      <Countries countriesToShow={countriesToShow} handleChoice={handleChoice}/> 
    </div>
  )
}

export default App;
