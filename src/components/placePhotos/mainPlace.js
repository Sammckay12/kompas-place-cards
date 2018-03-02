import React, { Component, Image } from 'react';

export default class MainPlace extends Component {

  constructor (props) {
     super(props)
     this.state = {
     }
   }

   componentWillReceiveProps = (nextProps) => {
     console.log("this Props", this.props);
     console.log("nextProps", nextProps);
     if (nextProps.place) {
       this.setState({photo: nextProps.place.photos_array[0]})
     }
   }

   render () {
     return (
       <div style={styles.container}>
         <img src={this.state.photo} className="mainPlace" alt="mainPlace" />
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
