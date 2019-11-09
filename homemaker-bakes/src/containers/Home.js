import React, { Component } from 'react';
import profile from '../profile.jpeg';

class Home extends Component {
 
  render() {
    return(
    <>
        <p>Homemaker Bakes</p>
        <img src={profile} className="App-logo" alt="logo" />
    </>
    )
  }
}


export default Home;

