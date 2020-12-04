import React, { useState } from 'react';
import classes from './SearchBar.module.css';

function SearchBar({ isReady, searchHandler }) {

  const [searchQuery, setSearchQuery] = useState('');

  if (!isReady) {
    return null;
  }
  
  return (
    <div className={ classes.searchBar }>
      <div className="nav-wrapper">
        <div className="input-field">
          <input id="search" type="search" onChange={ (event) => { setSearchQuery(event.target.value) } } value={ searchQuery } required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <button className={`btn red lighten-2 ${classes.searchBtn}`} onClick={ () => { searchHandler(searchQuery) } }>Search</button>
        </div>
      </div>
    </div>
          

  )
}

export default SearchBar;
