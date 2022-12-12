import React from "react";

const Movie= ({name,price,id})=>{
    return(
<div>
   <h1>{name}</h1>
    <h3>{price}</h3>
    <h3>{id}</h3>
</div>
    );
};

export default Movie;