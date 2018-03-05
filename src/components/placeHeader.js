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
           <p style={styles.textContainer}>{this.props.mainPlace.category[0]}</p>

       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 250 ,
    backgroundColor: '#F1Fzx1F1',
    border: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    backgroundColor: '#ADD8E6',
    alignSelf: 'center',
    justifyContent: 'center'
  }

}
