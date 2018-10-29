import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import NavBarClosed from './nav-bar-closed/NavBarClosed';
import NavBarOpen from './nav-bar-open/NavBarOpen';

class NavBar extends Component {
	state={
  	open: false
	}

	OpenCloseNavBar() {
		const { open } = this.state;
		this.setState( { open: !open } );
	}

	render() {
		const { open } = this.state;

		return (
			<TouchableOpacity
				onPress={() => this.OpenCloseNavBar()}
				style={[ styles.container, open ? null : styles.containerClose ]}
				activeOpacity={1}
			>
				{ open ? <View style={styles.overlay} /> : null }
				{ open ? <NavBarOpen /> : <NavBarClosed /> }
			</TouchableOpacity>
		);
	}
}

export default NavBar;
