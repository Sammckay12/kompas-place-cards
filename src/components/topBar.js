import React, { Component } from 'react';




export default class TopBar extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     return (
       <div style={styles.container}> hi</div>
     )
   }


};


const styles = {
  container: {
    background: '#1FAA74',
    border: 'solid',
    borderWidth: 5,
    borderColor: 'red'
  }
}
