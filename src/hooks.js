// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


import { useState } from "react";
import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//     const [color, setColor] = useState("Black");
    
//     return <h1>My favorite color is {color}!</h1>
// }
function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("Black")}
        >Black</button>
      </>
    )
  }
export default FavoriteColor