import React, { Component } from 'react';

class Search extends Component {
  // https://www.googleapis.com/books/v1/volumes?q={search terms}
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      books: []
    };
  }

  getInput = (e) => {
    this.setState({query: e.target.value});
  };

  searchBooks = (e) => {
    e.preventDefault();

    /*
      items[0].volumeInfo.imageLinks.thumbnail
      items[0].volumeInfo.title
      items[0].volumeInfo.authors
      items[0].volumeInfo.printType
      items[0].volumeInfo.description

      items[0].saleInfo.isEbook
      items[0].saleInfo.listPrice.amount
    */

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`)
      .then(res => res.json())
      .then(json => {
        let searchedBooks = json.items.map(item => {  
          return {
            thumbnail: item.volumeInfo.imageLinks.thumbnail,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            printType: item.volumeInfo.printType,
            description: item.volumeInfo.description,
            ebook: item.saleInfo.isEbook,
            // price: item.saleInfo.listPrice.amount
          };
      })
      this.setState({books: searchedBooks});
      this.props.handler(searchedBooks);
    });
  };

  render() {
    return (
      <form onSubmit={(event) => this.searchBooks(event)}>
        <input type={'text'} name={'query'} onChange={(event) => this.getInput(event)}></input>
        <button type={'submit'}>Search</button>
      </form>
    );
  }
}

export default Search;