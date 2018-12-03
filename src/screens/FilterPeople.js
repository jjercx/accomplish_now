/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View, StyleSheet, Modal, Image, Slider, Switch, TouchableOpacity
} from 'react-native';

import Button from '../components/button/Button';
import Spacing from '../components/spacing/Spacing';
import Typography from '../components/typography/Typography';
import { responsiveSize } from '../utils/dimensions';

import colors from '../theme/palette';

const styles = StyleSheet.create( {
	container: {
		backgroundColor: colors.paleGreyThree,
		flex: 1
	},
	modalBackdrop: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		flex: 1,
		justifyContent: 'center'
	},
	buttonWrapper: {
		marginTop: 40,
		paddingHorizontal: responsiveSize( 30 )
	},
	modalContent: {
		backgroundColor: colors.white,
		borderRadius: 15,
		marginHorizontal: responsiveSize( 20 )
	},
	optionsWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: responsiveSize( 20 )
	},
	modalHeader: {
		alignItems: 'center',
		borderBottomColor: colors.pinkishGrey,
		borderBottomWidth: 1,
		paddingVertical: responsiveSize( 30 )
	},
	modalBody: {
		paddingHorizontal: responsiveSize( 40 )
	},
	resizedComponent: {
		transform: [ { scaleX: 0.8 }, { scaleY: 0.8 } ]
	}
} );

const filterIcon = require( '../assets/images/icons/filterBig.png' );

/* eslint-disable react/prefer-stateless-function */
class FilterPeople extends Component {
	state = {
		modalVisible: false,
		filterDistance: 50,
		currentlyAvailable: false,
		paidMeetings: false
	};

	open = () => this.setState( { modalVisible: true } );

	close = () => this.setState( { modalVisible: false } );

	_onSubmit = () => {
		this.close();
		const { onSubmit } = this.props;
		const { filterDistance, currentlyAvailable, paidMeetings } = this.state;
		onSubmit( {
			filterDistance,
			currentlyAvailable,
			paidMeetings
		} );
	}

	_onResetOptions = () => {
		this.setState( {
			filterDistance: 50,
			currentlyAvailable: false,
			paidMeetings: false
		} );
	}

	slideChange( value ) {
		this.setState( { filterDistance: Math.round( value ) } );
	}

	render() {
		const {
			modalVisible, filterDistance, currentlyAvailable, paidMeetings
		} = this.state;

		return (
			<Modal
				animationType="fade"
				transparent={false}
				visible={modalVisible}
			>
				<View style={styles.modalBackdrop}>
					<View style={styles.modalContent}>
						<View style={styles.modalHeader}>
							<Image source={filterIcon} />
							<Spacing size="base" />
							<Typography variant="smallTitle" color="charcoalGrey">Filter People</Typography>
						</View>
						<Spacing size="medium" />
						<View style={styles.modalBody}>
							<View style={styles.optionsWrapper}>
								<Typography variant="midBody" color="charcoalGrey">Distance</Typography>
								<Typography variant="midBody" color="orange">{`Within ${filterDistance} Miles` }</Typography>
							</View>
							<View>
								<Slider
									maximumValue={500}
									minimumValue={0}
									onValueChange={this.slideChange.bind( this )}
									value={filterDistance}
								/>
							</View>
							<View>
								<View style={styles.optionsWrapper}>
									<TouchableOpacity
										onPress={() => this.setState( { currentlyAvailable: !currentlyAvailable } )}
									>
										<Typography variant="midBody" color="charcoalGrey">Currently Available</Typography>
									</TouchableOpacity>
									<Switch
										style={styles.resizedComponent}
										value={currentlyAvailable}
										onValueChange={value => this.setState( { currentlyAvailable: value } )}
									/>
								</View>
								<View style={styles.optionsWrapper}>
									<TouchableOpacity
										onPress={() => this.setState( { paidMeetings: !paidMeetings } )}
									>
										<Typography variant="midBody" color="charcoalGrey">Paid Meetings</Typography>
									</TouchableOpacity>
									<Switch
										style={styles.resizedComponent}
										value={paidMeetings}
										onValueChange={value => this.setState( { paidMeetings: value } )}
									/>
								</View>
							</View>
						</View>
						<View style={styles.buttonWrapper}>
							<Button
								text="Submit"
								textColor={colors.white}
								buttonColor={colors.orange}
								style={{ height: 50 }}
								onPress={() => this._onSubmit()}
							/>
							<Spacing size="smallPlus" />
							<Button
								text="Reset options"
								textColor={colors.darkSkyBlue}
								buttonColor={colors.paleGreyThree}
								style={{ height: 50 }}
								onPress={() => this._onResetOptions()}
							/>
						</View>
						<Spacing size="xLarge" />
					</View>
				</View>
			</Modal>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

FilterPeople.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default FilterPeople;
