import React, { useState,useEffect } from "react";
import Card from "./card";
import searchIcon from "./search-button-svgrepo-com.svg"
import "./App.css"
//
const API_URL ="http://www.omdbapi.com?apikey=22eee3d";

const App = ()=>{

    const [searchTerm ,setSearchTerm] =useState("");
    const [movies,setMovies] =useState([]) ;

    useEffect(()=>{
        searchMovies("Batman")
    },[])

    const searchMovies =async(title)=>{

        const response =await fetch(`${API_URL}&s=${title}`);
        const data =await response.json() ;
        setMovies(data.Search) ;
    } ;
    return(
        <div className="app">
            <h1 className="header-text">Movies</h1>
            <div className="search">
                <input 
                    placeholder="Search Here"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                 <h2>No movies found</h2>
                </div>
            )}
                </div>
    ) ;
}
export default App ;