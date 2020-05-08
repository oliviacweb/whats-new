import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     local,
     entertainment,
     health,
     science,
     technology,
     currentNews: local
    }
  }

  displayNewsType = (event, category) => {
    event.preventDefault();
    this.setState({currentNews: this.state[category]})
 }

filterArticles = (event, searchString) => {
  event.preventDefault();
  let specificNews = this.state.currentNews.filter(article => {
    return article.headline.toLowerCase().includes(searchString.toLowerCase()) || article.description.toLowerCase().includes(searchString.toLowerCase())
  })
  specificNews.length > 0 ?
  this.setState({ currentNews: specificNews }) :
  this.setState({ currentNews: local })
}

  render () {
    return (
      <div className="app">
        <section className="header">
        <h2>What's New</h2>
        <SearchForm filterArticles={this.filterArticles}/>
        </section>
        <section className="menu">
        <Menu displayNewsType={this.displayNewsType}/>
        </section>
        <section>
        <NewsContainer news={this.state.currentNews}/>
        </section>
      </div>
    );
  }
}

export default App;
