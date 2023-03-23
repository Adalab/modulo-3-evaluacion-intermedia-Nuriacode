import "../styles/App.scss";
import { useEffect, useState } from "react";
import getData from '../../src/components/data/api.js'

function App() {
  const [dataList, setDataList] = useState([])
  const [search, setSearch] = useState("");
  const [selectCharacter, setSelectCharacter] = useState('Todos');
  const [newPhrase, setNewPhrase] = useState ({quote:"", character:""})

  useEffect(()=>{
    getData().then(response=>{
      setDataList(response)
    })
  },[])

  const renderListPhrases = () => {
    return dataList
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

  const handleInputsNewPhrase = (ev) =>{
    const inputValue = ev.target.value;
    const inputName = ev.targe.name;
    setNewPhrase({...newPhrase, [inputName]: inputValue})
  
  }

  const handleClick = (ev) =>{
    ev.preventDefaul();
    if (!(newPhrase.quote === '' || newPhrase.character === '')) {
      setDataList([...dataList, newPhrase]);
    }

  }

  return (
    <div className="App">
      <main>
        <h1>Frases de Friends</h1>
        <h2>Listado de frases</h2>
        <label htmlFor="searchPhrase">Filtra por frase</label>
        <input
          id="searchPhrase"
          type="search"
          autoComplete="off"
          name="search"
          placeholder="Escribe aquí"
          onInput={handleFilter}
          value={search}
        />
        <label htmlFor="searchName">Filtra por personaje</label>
        <select id="searchName" name='character' onChange={handleCharacter} value={selectCharacter}>
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
        <label htmlFor="quote">Frase</label>
        <input
          id= "quote"
          type="text"
          autoComplete="off"
          name="phrase"
          placeholder="Escribe aquí"
          value={newPhrase.quote}
          onChange={handleInputsNewPhrase}
        />
        <label htmlFor="character">Personaje</label>
        <input
          id="character"
          type="text"
          autoComplete="off"
          name="character"
          placeholder="Escribe aquí"
          value={newPhrase.character}
          onChange={handleInputsNewPhrase}
        />
        <input
          type="submit"
          autoComplete="off"
          name="search"
          value="Añadir nueva frase"
          onClick={handleClick}
        />
        </from>
      </main>
    </div>
  );
}

export default App;
