import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState ("");

    function handleSubmit(event) {
        event.preventDefault();
        props.filterSongs(searchText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Search Songs" value={searchText} onChange={(event) => setSearchText(event.target.value)}></input>
            </div>
            <button type="submit">Search</button>
            <button type="button" onClick={props.getAllSongs}>Clear Filter</button>
        </form>
    );
}
 
export default SearchBar;