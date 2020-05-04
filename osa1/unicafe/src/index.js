import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, number}) => (
  <><td>{text}:</td><td>{number}</td></>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (all === 0) ? 0 : (good - bad) / all
  const positive = (all === 0) ? 0 : (good / all) * 100

  if (all === 0) return <div>No feedback given</div>
  else return (
    <table>
      <tbody>
        <tr><StatisticLine text="Good" number={good} /></tr>
        <tr><StatisticLine text="Neutral" number={neutral} /></tr>
        <tr><StatisticLine text="Bad" number={bad} /></tr>
        <tr><StatisticLine text="All" number={all} /></tr>
        <tr><StatisticLine text="Average" number={average} /></tr>
        <tr><StatisticLine text="Positive" number={positive} /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Results</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)