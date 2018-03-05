import React, { Component, Image } from 'react';

export default class MainPlace extends Component {


   render () {
     return (
       <div style={styles.container}>
         <img src={this.props.place.photos_array[0]} className="mainPlace" alt="mainPlace" />
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    flex: 0.4
  }
}
