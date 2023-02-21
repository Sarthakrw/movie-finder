import { useEffect } from "react";

// OmdB api key : 1c947b0b
const API_URL = 'http://www.omdbapi.com?apikey=1c947b0b';
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1c947b0b'

const App = () => {     //Main functional component takes props as input and returns react elements
    return (
        <h1>Hello !</h1>
    );
}

export default App;     //App can be exported to other module where it can be used