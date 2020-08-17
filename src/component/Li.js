import React from 'react'
import './Li.css'
function Li(props) {


  return (
    <li>
      <p>{props.id + 1}</p>
      <p>{props.text}</p>
      <i className="fa fa-times" onClick={()=> {props.delete(props.id)}} />
    </li>
  )
}

export default Li