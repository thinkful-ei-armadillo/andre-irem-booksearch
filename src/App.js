import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Filter from './Filter';
import List from './List';
// import ListItem from './ListItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: '',
      error: null,
      filterPrintType: '',
      filterBookType: '',
    };
  }

  getInput = (e) => {
    this.setState({query: e.target.value});
  };

  selectPrintType = (e) => {
    this.setState({filterPrintType: e.currentTarget.value});
    this.searchBooks();
  };

  selectBookType = (e) => {
    this.setState({filterBookType: e.currentTarget.value});
    this.searchBooks();
  };

  searchBooks = (e) => {
    if(typeof e !== 'undefined') {
      e.preventDefault();
    }

    /*
      items[0].volumeInfo.imageLinks.thumbnail
      items[0].volumeInfo.title
      items[0].volumeInfo.authors
      items[0].volumeInfo.printType
      items[0].volumeInfo.description

      items[0].saleInfo.isEbook
      items[0].saleInfo.listPrice.amount
    */

    let filterPrint = this.state.filterPrintType ? `&printType=${this.state.filterPrintType}`:'';
    let filterBook = this.state.filterBookType ? `&filter=${this.state.filterBookType}`:'';

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}${filterPrint}${filterBook}`)
      .then(res => {
        if(! res.ok) {
          this.setState({error: "Couldn't find anything that matches! Search for something else"});
        }

        return res.json()
      })
      .then(json => {
        let searchedBooks = json.items.map(item => {
          let price = (typeof item.saleInfo.listPrice !== 'undefined') ? item.saleInfo.listPrice.amount : 'N/A';

          return {
            thumbnail: item.volumeInfo.imageLinks.thumbnail,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            printType: item.volumeInfo.printType,
            description: item.volumeInfo.description,
            ebook: item.saleInfo.isEbook,
            price: price
          };
      })
      this.setState({books: searchedBooks});
    })
    .catch(err => {
      this.setState({error: err.message});
    });
  };

  render() {
    const error = (this.state.error) ? <div className="error">ERROR: {this.state.error}</div> : '';

    return (
      <div className="App">
        <header>
          Google Book Search
        </header>
        {error}
        <Search searchBooks={this.searchBooks} getInput={this.getInput} />
        <Filter selectPrintType={this.selectPrintType} selectBookType={this.selectBookType} />
        <List books={this.state.books}/>
      </div>
    );
  }
}

export default App;
