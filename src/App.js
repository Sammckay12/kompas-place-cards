import React, { Component } from 'react';
import './App.css';
import PictureContainer from './components/placePhotos/pictureContainer.js'
import TopBar from './components/topBar.js'
import PlaceHeader from './components/placeHeader.js'

class App extends Component {

  constructor (props) {
     super(props)
     this.state = {
       mainPlace: {},
     }
   }

   componentWillMount () {
     fetch(`http://localhost:3000/places/5a661b5f73f6ee972104e318`)
     .then((response) => response.json())
     .then((responseJson) => {
       console.log("place", responseJson)
       this.setState({mainPlace: responseJson})
     })
     .catch((error) => {
       console.error(error);
     });
   }

   getPlace() {

   }

  render() {
    return (
      <div className='main-container' style={styles.mainContainer}>
        <TopBar/>
        <PictureContainer mainPlace={this.state.mainPlace}/>
        <PlaceHeader mainPlace={this.state.mainPlace}/>
      </div>
    );
  }
}

let styles = {
  mainContainer: {
    backgroundColor: '#fff'
  }
}

export default App;
