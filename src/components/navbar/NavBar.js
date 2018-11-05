import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'react-native-blur';
import styles from './styles';
import NavBarClosed from './nav-bar-closed/NavBarClosed';
import NavBarOpen from './nav-bar-open/NavBarOpen';
import NavigatorPropType from '../../types/navigator';

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
		const { navigator: _navigator } = this.props;

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
							blurType="dark"
							blurAmount={3}
							blurRadius={5}
						/>
					)
					: null }
				{ open ? <NavBarOpen navigator={_navigator} /> : <NavBarClosed navigator={_navigator} /> }
			</TouchableOpacity>
		);
	}
}

NavBar.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default NavBar;
