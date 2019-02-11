import React from 'react';

const Search = function(props) {
  return (
    <form onSubmit={(event) => props.searchBooks(event)}>
      <input type={'text'} name={'query'} onChange={(event) => props.getInput(event)}></input>
      <button type={'submit'}>Search</button>
    </form>
  );
};

export default Search;