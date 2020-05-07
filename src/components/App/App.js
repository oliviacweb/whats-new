import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
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
     newsType: 'local'
    }
  }

  displayNewsType = (event, category) => {
    event.preventDefault();
    this.setState({newsType: category})
 }


  render () {
    return (
      <div className="app">
        <section>
        <Menu displayNewsType={this.displayNewsType}/>
        </section>
        <section>
        <NewsContainer news={this.state[this.state.newsType]}/>
        </section>
      </div>
    );
  }
}

export default App;
