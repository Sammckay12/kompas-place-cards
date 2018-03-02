import React, { Component } from 'react';
import SimilarPlace from './similarPlace'
import MainPlace from './mainPlace'




export default class PictureContainer extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     return (

       <div style={styles.container}>
         <SimilarPlace />
         <MainPlace />
         <SimilarPlace />
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
