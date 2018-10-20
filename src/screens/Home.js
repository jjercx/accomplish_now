import React, { Component } from 'react';
import HeaderSection from '../components/home/header/HeaderSection';

/* eslint-disable react/prefer-stateless-function */
class Home extends Component {
  static navigatorStyle = { navBarHidden: true };

  render() {
  	return (
  		<HeaderSection />
  	);
	}
}
/* eslint-enable react/prefer-stateless-function */


export default Home;
