import React, { Component } from 'react';
import OpenInAppButton from './buttons/openInApp.js'
import PlaceOverview from './placeOverview.js'

export default class PlaceHeader extends Component {

  constructor (props) {
     super(props)
     this.state = {

     }
   }

   componentDidMount () {
   }

   render () {
     return (

       <div style={styles.container}>
         <p style={styles.textContainer}>{this.props.mainPlace.description}</p>
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'justify'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    width: '40vw',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20
  }
}
