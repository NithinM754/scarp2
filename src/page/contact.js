import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    
    <div>
        contact<br></br>
        <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/Service">Service</Link></button> &nbsp;
        <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/home">Home</Link></button>

        </div>
  )
}

export default Contact