import React from 'react'

const Info = (props) => {

    const name = props.country.name
    const capital = props.country.capital
    
/*    
    Sääjuttu meni ainakin toistaseks vituiks joten olkoon kommentteina
    nii ja key = 
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState()

    const getWeather = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
            .then(response => {
                setWeather(response.data)
            })
    }

    getWeather()
    console.log(weather)    
    const temp = weather.temp - 273.15
    const weather_description = weather.main
    console.log(temp, weather_description)
    */

    const population = props.country.population
    const languages = props.country.languages
    const flag = props.country.flag


    return ( 
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h2>languages</h2>
            <ul>
                {languages.map(language => <p key={language.name}>{language.name}</p>)}
            </ul>
            <img src={flag} width='100' alt='flag of country'/> 
        </div>
    )

}

export default Info
