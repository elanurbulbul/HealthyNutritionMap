import React, {useState} from 'react';
import './index.scss';


const SearchBar = ({ onSearchTermChange, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          onSearch(searchTerm);
      }
  };

    
  return (
    <section className="search-bar">
      <input
        className='recipe-search-input'
        type="text"
        placeholder="Search for recipes"
        onChange={(e) => onSearchTermChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className='recipe-search-button'
        onClick={() => onSearch(searchTerm)}>Search</button>
    </section>
  );
};

export default SearchBar;