import React, { Component } from 'react';

export default class PlaceHeader extends Component {

  constructor (props) {
     super(props)
     this.state = {
       categories: ""
     }
   }

   componentDidMount () {
     this.createCategory()
   }

   createCategory () {
     let string = this.props.mainPlace.category.join(", ")
     let capitalCategories = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     this.setState({categories:  capitalCategories})
   }



   render () {
     console.log("place", this.props);
     return (

       <div style={styles.container}>
         <p style={styles.textContainer}>{this.props.mainPlace.name}</p>
         <p style={styles.textContainer}>{this.props.mainPlace.city}</p>
         <p style={styles.textContainer}>{this.state.categories}</p>

       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 250 ,
    backgroundColor: '#F1F1F1',
    border: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    backgroundColor: '#ADD8E6',
    alignSelf: 'center',
    justifyContent: 'center'
  }

}
