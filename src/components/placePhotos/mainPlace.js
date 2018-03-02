
import React, { Component } from 'react';



export default class MainPlace extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     return (
       <div style={styles.container}>
      main
       </div>
     )
   }
};

let styles = {
  container: {
    height: 300,
    display: 'flex',
    flex: 0.4,
    border: 'solid',
    borderWidth: 1
  },

}
