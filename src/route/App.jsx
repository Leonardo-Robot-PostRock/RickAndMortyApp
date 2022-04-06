import React, { useEffect, useState } from "react";
import Navbar from "../components/Nabvar";
import Characters from "../components/Characters";
import '../css/global.scss';


const App = () => {
  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <React.Fragment>
      <Navbar brand="Rick and Morty App" />
      <div className="container">
        <Characters 
            characters={characters}
        />
      </div>
    </React.Fragment>
  );
};

export default App;