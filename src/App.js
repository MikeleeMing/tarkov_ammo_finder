import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList/cardlist.component';
import SearchBar from './components/SearchBar/searchbar.component';

function App() {
  const [bullets, setBullets] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredBullets, setFilteredBullets] = useState([]);

  useEffect(() => {
    const fetchBullets = async () => {
      try {
        const response = await axios('http://localhost:8000/bullets');
        setBullets(response.data);
      } catch (error) {
        console.error("Error fetching bullets:", error);
      }
      };
    fetchBullets();
}, []);

  useEffect(() => {
  let filtered = [];
  if (searchInput === "") {
  filtered = bullets
  } else {
  filtered = bullets.filter(bullet =>
  bullet.Name.toLowerCase().includes(searchInput.toLowerCase())
  );
  }
  setFilteredBullets(filtered);
  }, [bullets, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value)
    };

  

  return (
    <div className="App">
        <SearchBar
        placeholder='Search Bullets'
        handleInput={handleInput}
        />
        <CardList bullets={filteredBullets} />
    </div>
  );
}

export default App;
