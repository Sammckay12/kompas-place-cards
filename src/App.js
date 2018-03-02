import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/headerContainer.js'
import TopBar from './components/topBar.js'
import Flexbox from 'flexbox-react'

class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <TopBar />
        <HeaderContainer />
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    height: 100,
    background: 'red',
    border: 'solid',
    borderWidth: 5,
    borderColor: 'blue'
  }
}

export default App;
