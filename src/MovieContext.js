import React,{createContext, useState} from "react";

export const MovieContext = createContext();

export const  MovieProvider = (props) => {
    const [movies,setmovies]= useState([
        {
            name:"Thunivu",
            price: "Rs.250",
            id:"001",
        },
        {
            name:"Varisu",
            price: "Rs.250",
            id:"002",
        },
        {
            name:"VTK 2", 
            price: "Rs.150",
            id:"003",
        }

    ]);
    return (
        <MovieContext.Provider value={[movies,setmovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};