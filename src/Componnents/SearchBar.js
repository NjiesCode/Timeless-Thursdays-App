import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
      <button onClick={props.onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;