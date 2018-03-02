import React, { Component } from 'react';

export default class PlaceHeader extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     console.log("place", this.props);
     return (

       <div style={styles.container}>
         <p style={styles.textContainer}>{this.props.mainPlace.name}</p>

       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 250 ,
    backgroundColor: '#ADD8E6',
    border: 'solid',
    borderWidth: 1,
    justifyContent: 'center'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    backgroundColor: '#ADD8E6',
    alignSelf: 'flex-start',
    justifyContent: 'center'
  }

}
