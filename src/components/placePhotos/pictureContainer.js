import React, { Component } from 'react';
import SimilarPlace from './similarPlace'
import MainPlace from './mainPlace'
import './pictureContainer.css';




export default class PictureContainer extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     console.log("place", this.props);
     return (

       <div style={styles.container}>
         <SimilarPlace place={this.props.mainPlace} />
         <MainPlace place={this.props.mainPlace}  />
         <SimilarPlace place={this.props.mainPlace} />
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    backgroundColor: '#ADD8E6'
  },

}
