import React, { useEffect, useState } from "react";
import Navbar from "../components/Nabvar";
import Characters from "../components/Characters";
import "../css/global.scss";
import Pagination from "../components/Pagination";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <React.Fragment>
      <div className="main-container">
        <Navbar brand="Rick and Morty App" />
        <div className="container">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevius={onPrevius}
            onNext={onNext}
          />
          <Characters characters={characters} />
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevius={onPrevius}
            onNext={onNext}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
