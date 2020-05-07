import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
// import NewsArticle from '../NewsArticle/NewsArticle';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer news={this.state.local}/>
      </div>
    );
  }
}

export default App;

