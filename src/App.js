import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

import { API_URL } from "./api";

const App = () => {     //Main functional component takes props as input and returns react elements
    
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {   
        searchMovies('');
    }, []);             //first argument in useEffect() is the side-effect function to be run, second argument is the array of dependencies aka the condition for the function to be re-ran
    
    return (
        <div className="app">
            <h1>Movie App</h1>

            <div className="search">
                <input
                    placeholder="Search here"
                    value={searchTerm}
                    onChange = {(event) => setSearchTerm(event.target.value)}
                    onKeyDown = {(event) => {
                        if (event.key === 'Enter') {
                            searchMovies(searchTerm)
                        }
                    }}
                
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
            
        </div>
        
    );
}

export default App;     //App can be exported to other module where it can be used