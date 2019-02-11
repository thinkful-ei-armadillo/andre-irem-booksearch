import React, { Component } from 'react';
import './App.css';
import Search from './Search';
// import Filter from './Filter';
import List from './List';
// import ListItem from './ListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Google Book Search
        </header>
        <Search />
        {/* 
        <Filter />
        */}
        <List>
          
        </List>
      </div>
    );
  }
}

export default App;
