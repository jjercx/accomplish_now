import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View, Platform, Image, TextInput, TouchableOpacity
} from 'react-native';

import ButtonIcon from '../button-icon/ButtonIcon';
import ButtonSetting from '../button-setting/ButtonSetting';
import styles from './styles';

const iconFilter = require( '../../assets/images/icons/filterSmall.png' );

class Header extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			searchText: ''
		};

		this._onChangeText = this._onChangeText.bind( this );
		this._onPressClean = this._onPressClean.bind( this );
	}

	_onChangeText( searchText ) {
		this.setState( { searchText } );
	}

	_onPressClean() {
		this.setState( { searchText: '' } );
	}

	render() {
		const {
			onPressBack, onPressSetting, onSearchSubmit, notification
		} = this.props;
		const { searchText } = this.state;
		return (
			<View style={styles.headerContainer}>
				<View>
					<ButtonIcon
						iconName="arrow-back"
						style={{ top: Platform.OS === 'ios' ? '5%' : 0 }}
						onPress={onPressBack}
					/>
				</View>
				<View style={styles.inputSearch}>
					<Image
						style={styles.searchIcon}
						source={require( '../../assets/images/home/searchgray.png' )}
					/>
					<TextInput
						style={styles.textInput}
						value={searchText}
						onChangeText={this._onChangeText}
						returnKeyType="search"
						autoFocus
						onSubmitEditing={( searchText.length > 0 ) ? () => onSearchSubmit( searchText ) : null}
					/>
					<View style={styles.resetIconContainer}>
						{( searchText.length > 0 ) && (
							<TouchableOpacity onPress={this._onPressClean}>
								<Image
									style={styles.resetIcon}
									source={require( '../../assets/images/icons/clear.png' )}
								/>
							</TouchableOpacity>
						)}
					</View>
				</View>
				<View style={styles.iconSettingWrapper}>
					<TouchableOpacity onPress={onPressSetting}>
						<ButtonSetting
							onPress={onPressSetting}
							source={iconFilter}
							style={{ top: Platform.OS === 'ios' ? '5%' : 0 }}
						/>
					</TouchableOpacity>
					<View style={[ styles.notification, { opacity: notification ? 1 : 0 } ]} />
				</View>
			</View>
		);
	}
}

Header.propTypes = {
	onPressBack: PropTypes.func,
	onPressSetting: PropTypes.func,
	onSearchSubmit: PropTypes.func,
	notification: PropTypes.bool
};

Header.defaultProps = {
	onPressBack: () => {},
	onPressSetting: () => {},
	onSearchSubmit: () => {},
	notification: false
};

export default Header;
