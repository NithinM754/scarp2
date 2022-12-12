// import React from 'react'
// import { Link } from 'react-router-dom'


// const Home = () => {
//   return (
//     <div className='navbar_container'>
//         Home<br></br>
//         <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/Service">Service</Link></button>&nbsp;
//         <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'lightblue'}} to="/contact">Contact</Link></button>
//     </div>
//   )
// }

// export default Home
import React from "react";
import '../App.css'
import { Link } from "react-router-dom"
const Home = () =>{
    return(
        <div className="Page1">
            <h1>This is Home Page</h1>
            <div className="MyCard"><h1>Hello Sckt CSE Students !!</h1></div>
            <button className="Mybutton"> <Link to='/about'>Goto Page 2</Link></button>
        </div>
    )
}
export default Home