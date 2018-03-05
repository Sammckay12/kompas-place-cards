import React, { Component, Image } from 'react';

export default class SimilarPlace extends Component {


   render () {
     return (
       <div style={styles.container}>
         <img src={this.props.place.photos_array[0]} className="similarPlace" alt="similarPlace"/>
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    flex: 0.3,
  }
}
