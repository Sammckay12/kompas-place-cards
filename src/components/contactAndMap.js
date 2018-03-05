import React, { Component } from 'react';
import ContactDetails from './contactDetails.js'
import PlaceLocation from './placeLocation.js'


export default class ContactAndMap extends Component {

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
         <ContactDetails mainPlace={this.props.mainPlace} />
         <PlaceLocation mainPlace={this.props.mainPlace} />
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 500,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
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
