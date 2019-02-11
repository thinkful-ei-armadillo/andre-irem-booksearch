import React, { Component } from 'react';
import './App.css';
import Search from './Search';
// import Filter from './Filter';
import List from './List';
// import ListItem from './ListItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
    this.state = {
      books: []
    };
  }

  handler(searchedBooks){
    this.setState({
      books: searchedBooks
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          Google Book Search
        </header>
        <Search handler={this.handler}/>
        {/* 
        <Filter />
        */}
        <List books={this.state.books}/>
      </div>
    );
  }
}

export default App;
