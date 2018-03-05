import React, { Component } from 'react';

export default class PlaceLocation extends Component {

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
    backgroundColor: '#1faa74',
    width: '20vw',
    height: 350,
    padding: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'justify'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    width: '20vw',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
    color: '#fff'
  },
  separator: {
    border: 'solid',
    borderWidth: 1,
    width: 40,
    borderColor: '#1FAA74'
  }
}
