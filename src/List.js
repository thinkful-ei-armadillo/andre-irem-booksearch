import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="listOfBooks">
        {this.props.books.map(book =>
        { return (
          <li>
            <img src={book.thumbnail} />
            <h1>{book.title}</h1>
            <p>{book.authors}</p> 
            <p>{book.price}</p>
            <p>{book.description}</p>
          </li>
        );
      }
)}
      </ul>
    );
  }
}

export default List;