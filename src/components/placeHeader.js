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
         <p style={{...styles.textContainer, fontSize: 36}}>{this.props.mainPlace.name}</p>
         <hr style={styles.separator}></hr>
         <p style={{...styles.textContainer, fontSize: 20}}>{this.props.mainPlace.city}</p>
         <p style={{...styles.textContainer, fontSize: 18, fontFamily: 'HelveticaNeue-Light'}}>{this.state.categories}</p>

       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 250 ,
    backgroundColor: '#fff',
    border: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    fontFamily: 'HelveticaNeue-Medium',
    justifyContent: 'center'
  },
  separator: {
    border: 'solid',
    borderWidth: 1,
    width: 40,
    borderColor: '#1FAA74'
  }
}
