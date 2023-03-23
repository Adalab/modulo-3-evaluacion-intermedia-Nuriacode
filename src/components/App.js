import "../styles/App.scss";
import { useState } from "react";
import data from "../components/data/data.json";

function App() {
  const [phrases, setPhrases] = useState(data);
  const [search, setSearch] = useState("");
  const [selectCharacter, setSelectCharacter] = useState('Todos');
  // const [newPhrase, setNewPhrase] = useState [

  // ]

  // i

  const renderListPhrases = () => {
    return data
      .filter((eachPhrase, i)=>{
        
        if (selectCharacter === 'Todos'){
          return true
          } else
            return eachPhrase.character.includes(selectCharacter)

      })
      .filter((eachPhrase) => {
        return (
        eachPhrase.quote.toLowerCase().includes(search.toLowerCase())
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
    setSelectCharacter(ev.target.value);
    
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
        <select name='character' onChange={handleCharacter} value={selectCharacter}>
          <option value='Todos'>Todos</option>
          <option value='Ross'>Ross</option>
          <option value='Monica'>Monica</option>
          <option value='Joey'>Joey</option>
          <option value='Phoebe'>Phoebe</option>
          <option value='Chandler'>Chandler</option>
          <option value='Rachel'>Rachel</option>
        </select>
        <ul>{renderListPhrases()}</ul>
        <h2>Añadir una nueva frase</h2>

        <from>
        <label>Frase</label>
        <input
          type="text"
          autoComplete="off"
          name="phrase"
          placeholder="Escribe aquí"
        />
        <label>Personaje</label>
        <input
          type="text"
          autoComplete="off"
          name="character"
          placeholder="Escribe aquí"
        />
        <input
          type="submit"
          autoComplete="off"
          name="search"
          value="Añadir nueva frase"
        />
        </from>
      </main>
    </div>
  );
}

export default App;
