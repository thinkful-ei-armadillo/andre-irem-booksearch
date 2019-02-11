import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <form>
          <label>Print Type: </label>
          <select name="printType" onChange={(event) => this.props.selectPrintType(event)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>

          <label>Book Type: </label>
          <select name="bookType" onChange={(event) => this.props.selectBookType(event)}>
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="full">Full</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="partial">Partial</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filter;