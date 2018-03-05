import React, { Component } from 'react';
import './openInAppButton.css';

export default class OpenInAppButton extends Component {

  render () {
    return (
      <button
        className="openInAppButton"
        style={styles.buttonStyle}
        onClick={this.handleClick}>
        OPEN PLACE ON APP
      </button>
    );
  }
};

let styles = {
  buttonStyle: {
    margin: '10px 10px 10px 0',
    width: 175,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#1FAA74',
    border: 'solid',
    borderColor: '#1FAA74',
    borderWidth: 0.5,
    color: '#fff',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 13
  }
}
