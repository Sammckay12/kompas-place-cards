import React, { Component } from 'react';
import logo from '../images/Kompas_Logo.png'




export default class TopBar extends Component {

  constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
     return (
       <div style={styles.container}>
         <img src={logo} width='150' alt="kompasLogo"></img>
       </div>
     )
   }


};


const styles = {
  container: {
    height: 60,
    background: '#1faa74',
    display: 'flex',
    justifyContent: 'flex-start'
  }
}
