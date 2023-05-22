import React from 'react'

const Button = (props) => {
const btn=<button className='run-btn' onClick={props.fillBar}>{props.type}</button>
  return (
    <div>
     {btn}
    </div>
  )
}

export default Button
