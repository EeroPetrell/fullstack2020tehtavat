import React from 'react'

const Course = (props) => {
    return (
      <>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} /> 
      </>
    )
  }
  
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        {props.parts.map( part => 
          <Part part={part} key={part.id} />  )}
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  
  const Total = (props) => {
    return (
      <p>Total number of exercises {props.parts.map( part => part.exercises).reduce((a,b)=>a+b)}</p>
    )
  }

  export default Course