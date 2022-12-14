import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json()
    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
    
    
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;