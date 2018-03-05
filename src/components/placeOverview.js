import React, { Component } from 'react';
import StarOutline from 'react-icons/lib/fa/star-o';
import TrainStation from 'react-icons/lib/md/train';
import ShirtOutline from '../images/shirt.svg'
import LightPound from '../images/pound_sign_light.svg'
import DarkPound from '../images/pound_sign_dark.svg'
var _ = require('lodash');

export default class PlaceOverview extends Component {

  constructor (props) {
     super(props)
     this.state = {

     }
   }

   componentDidMount () {

   }

   createCategory () {
     let string = this.props.mainPlace.category.join(", ")
     let capitalCategories = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     this.setState({categories:  capitalCategories})
   }

   renderPrice (price) {
      console.log(price, "heeeeey");

      let poundSings = price - 1
      let remainder = 3 - poundSings
      let priceArray = []

      _.times(poundSings, function() {
        priceArray.push(DarkPound)
      })

      _.times(remainder, function() {
        priceArray.push(LightPound)
      })


     return (
      <div style={{display: 'flex', flexDirection: 'row', marginRight: 20, marginTop: 5}}>
          { priceArray.map(el => {
            return <img src={el} style={{width: 18}} alt="price"></img>
          })
          }
      </div>
     )
   }



   render () {
     console.log("place", this.props);
     return (
      <div style={styles.container}>
       <div style={styles.leftContainer}>
         <StarOutline size={20} style={styles.icons} />
         <p style={styles.textContainer}>{this.props.mainPlace.rating}/5</p>
       </div>
       <div style={styles.rightContainer}>
         {this.renderPrice(this.props.mainPlace.price)}
         <img src={ShirtOutline} style={styles.icons} alt="dress_code"></img>
         <p style={styles.textContainer}>{this.props.mainPlace.dress_code}</p>
         <TrainStation size={20} style={styles.icons} />
         <p style={styles.textContainer}>{this.props.mainPlace.station}</p>
       </div>
      </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '40vw',
    border: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderColor: '#dedede'
  },
  leftContainer: {
    display: 'flex',
    width: '40vw',
    flexDirection: 'row'
  },
  rightContainer: {
    display: 'flex',
    width: '60vw',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  textContainer: {
    display: 'flex',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
    alignSelf: 'center'
  },
  icons: {
    alignSelf: 'center',
    marginTop: -2,
    marginRight: 5,
    marginLeft: 20,
    color: '#484848'
  }
}
