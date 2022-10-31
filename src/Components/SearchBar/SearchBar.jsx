import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState ("");

    function clearFilter() {
        props.getAllSongs();
        setSearchText("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.filterSongs(searchText);
    }

    return (
        <form onSubmit={handleSubmit} className="search-display">
            <div>
                <input type="text" className="search-input" placeholder="Search Songs" value={searchText} onChange={(event) => setSearchText(event.target.value)} data-cy='filter-input'></input>
            </div>
            <div>
                <button type="submit" className="filter-button" data-cy="filter-button">Search</button>
                <button type="button" className="filter-button" onClick={clearFilter}>Clear Filter</button>
            </div>
        </form>
    );
}
 
export default SearchBar;