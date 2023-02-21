import React from "react";          //imports React library used for creating and managing react applications
import ReactDOM  from "react-dom";  //imports ReactDOM library used for rendering react components in browser

import App from './App';            //imports custom component named App located in App.js

ReactDOM.render(<App />, document.getElementById('root'));  //renders the component <App /> and getElementById triggers div by Id of 'root'