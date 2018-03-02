import React, { Component, Image } from 'react';

export default class SimilarPlace extends Component {

  constructor (props) {
     super(props)
     this.state = {
     }
   }

   componentWillReceiveProps = (nextProps) => {
     if (nextProps.place) {
       this.setState({photo: nextProps.place.photos_array[0]})
     }
   }

   render () {
     return (
       <div style={styles.container}>
         <img src={this.state.photo} className="similarPlace" alt="similarPlace"/>
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
