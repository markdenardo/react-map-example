import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const arr = [
  "https://www.visitsealife.com/sydney/media/llepm5if/wuru.jpg",
  "https://education.sakshi.com/sites/default/files/images/2022/02/28/palkbaydugongreserve-1646051325.jpg",
  "https://conjour.world/wp-content/uploads/Dugong-Sea-Cow-Conservation-Journal-Conjour.jpg",
];

function App() {
  const [movies, setMovies] = useState([]);

  const hook = () => {
    axios.get("https://web-brut-api.herokuapp.com/movies/").then((response) => {
      console.log(response);
      setMovies(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div className="App">
      <header className="App-header">
        {arr.map((name) => (
          <li>{name}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
