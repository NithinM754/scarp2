import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
      <div className="Page2">
          Service<br></br>
               <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/contact">Contact</Link></button>&nbsp;
               <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/home">Home</Link></button>
    </div>
  )
}

export default Service