import React, { Component } from 'react';
import './App.css';
import PictureContainer from './components/placePhotos/pictureContainer.js'
import TopBar from './components/topBar.js'

class App extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   componentDidMount () {
     this.getPlace()
   }

   getPlace() {
     fetch(`http://localhost:3000/places/5a661b5f73f6ee972104e318`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("place", responseJson)
    })
    .catch((error) => {
      console.error(error);
    });

   }

  render() {
    return (
      <div className='main-container' style={styles.mainContainer}>
        <TopBar/>
        <PictureContainer/>


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
