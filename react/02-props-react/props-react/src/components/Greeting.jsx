import React from 'react'

const Greeting = (props) => {
    console.log(props);
  return (
    <div>Hola {props.name} {props.surname}</div>
  )
}

export default Greeting