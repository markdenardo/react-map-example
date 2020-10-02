import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const hook = () => {
    axios
      .get('https://web-brut-api.herokuapp.com/movies/')
      .then(response => {
        console.log(response)
        setMovies(response.data)
      })
  }
  
  useEffect(hook, [])

  return (
    <div className="App">
      <header className="App-header">
        {movies.map(movie => <li>{movie.name}</li>)}
      </header>
      <button onClick={hook}>get movies</button>
    </div>
  );
}

export default App;
