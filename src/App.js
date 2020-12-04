import React, { useState } from 'react';
import './App.css'
import DataRequestComponent from './Components/DataRequestComponent/DataRequestComponent';
import DataTableComponent from './Components/DataTableComponent/DataTableComponent';
import NewUserComponent from './Components/NewUserComponent/NewUserComponent';
import SearchBar from './Components/SearchBar/SearchBar';
import UserCardComponent from './Components/UserCardComponent/UserCardComponent';

function App() {
  const smallDataUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const bigDataUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  
  const [isReady, setIsReady] = useState(null);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [activeEntry, setActiveEntry] = useState(null);

  const dataRequestHandler = (url) => {
    setIsReady(false);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setIsReady(true);
        setData(json)
      });
  }

  const searchHandler = (searchQuery) => {
    if (searchQuery) {
      setFilteredData(
        data.filter(
          i => 
            i.id === +searchQuery ||
            i.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            i.lastName.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            i.email.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            i.phone.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 

        )
      );
    } else {
      setFilteredData(null);
    }
  }

  return (
    <div className="container">
      <DataRequestComponent isReady={ isReady } smallDataUrl={ smallDataUrl } bigDataUrl={ bigDataUrl } dataRequestHandler={ dataRequestHandler } />
      <NewUserComponent isReady={ isReady } data={ data } setData={ setData } />
      <SearchBar isReady={ isReady } searchHandler={ searchHandler } />
      <DataTableComponent isReady={ isReady } 
        data={ filteredData ? filteredData : data } 
        setData={ filteredData ? setFilteredData : setData } 
        setActiveEntry={ setActiveEntry } />
      <UserCardComponent activeEntry={ activeEntry } />
    </div>
  );
}

export default App;
