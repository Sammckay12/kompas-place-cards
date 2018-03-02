import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/headerContainer.js'
import TopBar from './components/topBar.js'
import Flexbox from 'flexbox-react'

class App extends Component {
  render() {
    return (
      <div className='main-container' style={styles.mainContainer}>
        <TopBar/>
        <HeaderContainer/>
      </div>
    );
  }
}

let styles = {
  mainContainer: {
    backgroundColor: '#1faa74'
  }
}

export default App;
