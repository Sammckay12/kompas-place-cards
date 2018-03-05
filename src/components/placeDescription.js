import React, { Component } from 'react';

export default class PlaceDescription extends Component {

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
         <hr style={styles.separator}></hr>
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
  },
  separator: {
    border: 'solid',
    borderWidth: 1,
    width: 40,
    borderColor: '#1FAA74'
  }
}
