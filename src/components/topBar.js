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
    flex: 0.075,
    background: 'red',
  }
}
