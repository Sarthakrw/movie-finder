import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// OmdB api key : 1c947b0b
const API_URL = 'http://www.omdbapi.com?apikey=1c947b0b';
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1c947b0b'

const movie1 = {
    "Title": "Neon Genesis Evangelion: The End of Evangelion",
    "Year": "1997",
    "imdbID": "tt0169858",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjU0MzQwMmMtMWU3OS00MDc0LWIzOTItZmE1MjZlYmExMGJiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
}

const App = () => {     //Main functional component takes props as input and returns react elements
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    console.log('hi');
    useEffect(() => {   
        searchMovies('The End of Evangelion');
    }, []);             //first argument in useEffect() is the side-effect function to be run, second argument is the array of dependencies aka the condition for the function to be re-ran
    
    return (
        <div className="app">
            <h1>Movie App</h1>

            <div className="search">
                <input
                    placeholder="Search here"

                    onChange = {() => {}}
                
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                        <div className="movie">
                            <div>
                                <p>{movie1.Year}</p>
                            </div>

                            <div>
                                <img
                                    src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"}
                                    alt={movie1.Title}
                                />
                            </div>

                            <div>
                                <span>{movie1.Type}</span>
                                <h3>{movie1.Title}</h3>
                            </div>

                        </div>
                    </div>
        </div>
        
    );
}

export default App;     //App can be exported to other module where it can be used