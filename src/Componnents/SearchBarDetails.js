import {useState} from 'react'
import SearchBar from '../Componnents/SearchBar';

function SearchBarDetails() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      console.log('Searching for:', searchTerm);
    };
  return (
    <div>
    <SearchBar
        value={searchTerm}
        onChange={handleSearchTermChange}
        onSearch={handleSearch}
      />
      <p>{searchTerm}</p>
    </div>
  )
}

export default SearchBarDetails