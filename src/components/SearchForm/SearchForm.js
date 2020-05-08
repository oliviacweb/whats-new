import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      search: ''
    }
  }

  createTerm = (event) => {
    this.setState({ search: event.target.value })
    console.log(this.state.search);
  }

  render () {
    return (
      <form className="search-form">
        <input
        type="text"
        className="search-field"
        name="searchField"
        placeholder="search for articles"
        onChange={ (event) => this.createTerm(event) }
        />
        <button className="search-btn" onClick={ (event) => this.props.filterArticles(event, this.state.search) }>find</button>
      </form>
    )
  }
}

export default SearchForm;
