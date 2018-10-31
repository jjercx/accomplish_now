import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'react-native-blur';
import PropTypes from 'prop-types';
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
		const { viewRef } = this.props;

		return (
			<TouchableOpacity
				onPress={() => this.OpenCloseNavBar()}
				style={[ styles.container, open ? null : styles.containerClose ]}
				activeOpacity={1}
			>
				{ open
					? (
						<BlurView
							style={styles.blur}
							viewRef={viewRef}
							blurType="dark"
							blurAmount={3}
							blurRadius={5}
						/>
					)
					: null }
				{ open ? <NavBarOpen /> : <NavBarClosed /> }
			</TouchableOpacity>
		);
	}
}

NavBar.propTypes = {
	viewRef: PropTypes.any
};

NavBar.defaultProps = {
	viewRef: null
};

export default NavBar;
