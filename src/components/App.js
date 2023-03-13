import "../styles/App.scss";
import { useState } from "react";
import data from "../components/data/data.json";

function App() {
  const [phrases, setPhrases] = useState(data);
  const [search, setSearch] = useState("");
  const [selectCharacter, setselectCharacter] = ('Todos');

  const renderListPhrases = () => {
    return data
      .filter((eachPhrase) => {
        return (
        eachPhrase.quote.toLowerCase().includes(search.toLowerCase()) &&
        eachPhrase.character.includes(selectCharacter())
        );
      })

      .map((eachPhrase, i) => (
        <li key={i}>
          {eachPhrase.quote} - {eachPhrase.character}
        </li>
      ));
  };

  const handleFilter = (ev) => {
    setSearch(ev.target.value);
  };

  const handleCharacter =(ev)=>{
    setselectCharacter(ev.target.value);
    setPhrases([...data]);
  }

  return (
    <div className="App">
      <main>
        <h1>Frases de Friends</h1>
        <h2>Listado de frases</h2>
        <label>Filtra por frase</label>
        <input
          type="search"
          autoComplete="off"
          name="search"
          placeholder="Escribe aquí"
          onInput={handleFilter}
          value={search}
        />
        <label>Filtra por personaje</label>
        <select name='character' onChange={handleCharacter}>
          <option>Todos</option>
          <option>Ross</option>
          <option>Monica</option>
          <option>Joey</option>
          <option>Phoebe</option>
          <option>Chandler</option>
          <option>Rachel</option>
        </select>
        <lu>{renderListPhrases()}</lu>
      </main>
    </div>
  );
}

export default App;
