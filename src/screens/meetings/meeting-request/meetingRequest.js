/* eslint-disable react/prefer-stateless-function,react/prop-types,no-plusplus */

import React, { Component } from 'react';
import {
	Platform, StatusBar, View, Image, TouchableOpacity, ScrollView
} from 'react-native';
import Switch from 'react-native-switch-pro';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Picker from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonIcon from '../../../components/button-icon/ButtonIcon';
import Colors from '../../../theme/palette';
import styles from './styles';
import Typography from '../../../components/typography/Typography';
import { responsiveSize } from '../../../utils/dimensions';
import Button from '../../../components/button/Button';

const iconMeeting = require( '../../../assets/images/meetings/meetingsRequest.png' );
const photo1 = require( '../../../assets/images/meetings/frankDoeCopia3.png' );
const photo2 = require( '../../../assets/images/meetings/jhonDoeCopia3.png' );

class MeetingRequest extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};


	constructor( props ) {
		super( props );
		this.state = {
			paidSwitch: false,
			dateTime: false,
			date: moment().format( 'DD/MM/YYYY' ),
			opc: 'date',
			time: '12:00 PM',
			durationList: [],
			duration: '15'
		};
		this._onPressBack = this._onPressBack.bind( this );
		this._onPressSwitch = this._onPressSwitch.bind( this );
		this._showDateTimePicker = this._showDateTimePicker.bind( this );
		this._hideDateTimePicker = this._hideDateTimePicker.bind( this );
		this._handleDateTimePicked = this._handleDateTimePicked.bind( this );
		this._onDurationSelected = this._onDurationSelected.bind( this );
		this._onPressRequestMeeting = this._onPressRequestMeeting.bind( this );
	}

	componentDidMount() {
		let count = 15;
		const durationList = Array( ...Array( 45 ) ).map( ( ) => {
			count++;
			return {
				value: count,
				label: `${count} Minutes`
			};
		} );
		this.setState( { durationList } );
	}

	_onPressBack() {
    	const { navigator } = this.props;
    	navigator.pop();
	}

	_onPressSwitch( paidSwitch ) {
		this.setState( { paidSwitch } );
	}

	_showDateTimePicker( opc ) {
		this.setState( { opc, dateTime: true } );
	}


	_handleDateTimePicked( dateTime ) {
		const { opc } = this.state;
		if ( opc === 'date' ) {
			const date = moment( dateTime ).format( 'DD/MM/YYYY' );
			this.setState( { date }, () => this._hideDateTimePicker() );
		} else {
			const time = moment( dateTime, 'hh:mm a' ).format( 'hh:mm a' );
			this.setState( { time }, () => this._hideDateTimePicker() );
		}
	}

	_hideDateTimePicker() {
		this.setState( { dateTime: false } );
	}

	_onDurationSelected( duration ) {
		this.setState( { duration } );
	}

	_onPressRequestMeeting() {
		const { navigator } = this.props;
		navigator.push( { screen: 'meetings' } );
	}

	render() {
		const {
			paidSwitch, dateTime, date, opc, time, durationList, duration
		} = this.state;

		return (
			<ScrollView style={styles.container}>
				<StatusBar
					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
				/>
				<DateTimePicker
					isVisible={dateTime}
					onConfirm={this._handleDateTimePicked}
					onCancel={this._hideDateTimePicker}
					mode={opc}
				/>

				<View style={styles.headerContainer}>
					<ButtonIcon
						iconName="arrow-back"
						iconStyle={{ color: Colors.charcoalGrey }}
						onPress={() => this._onPressBack()}
					/>
				</View>
				<View style={styles.innerContainer}>
					<View style={paidSwitch ? styles.paidMain : styles.freeMain}>

						<View style={styles.iconContainer}>
							<Image source={iconMeeting} resizeMode="contain" style={styles.icon} />
						</View>

						<View style={styles.titleContainer}>
							<Typography
								variant="midTitle"
								color="charcoalGrey"
								textAlign="center"
							>
								{'Meeting Request'}
							</Typography>
						</View>
					</View>
				</View>

				<View style={styles.formContainer}>
					<View style={styles.rowContainer}>
						<View style={styles.innerRow}>
							<Typography
								variant="midTitle"
								color="battleshipGrey"
								textAlign="center"
							>
								{'People'}
							</Typography>
							<View style={styles.imageContainer}>
								<Image source={photo2} resizeMode="contain" style={styles.image} />
								<View style={styles.imageOver}>
									<Image source={photo1} resizeMode="contain" style={styles.image} />
								</View>
							</View>

						</View>
					</View>
					<View style={styles.rowContainer}>
						<View style={styles.innerRow}>
							<Typography
								variant="midTitle"
								color="battleshipGrey"
								textAlign="center"
							>
								{'Paid conversation?'}
							</Typography>
							<View style={styles.switchContainer}>
								<Switch
									onSyncPress={this._onPressSwitch}
									backgroundActive="#fba104"
									height={responsiveSize( 35 )}
									width={responsiveSize( 65 )}
									circleStyle={styles.circle}
									value={paidSwitch}
								/>
							</View>
						</View>
					</View>
					{( paidSwitch ) ? (
						<View style={styles.rowContainer}>
							<View style={styles.innerRow}>
								<Typography
									variant="midTitle"
									color="battleshipGrey"
									textAlign="center"
								>
									{'Advisor'}
								</Typography>
								<View style={styles.imageContainer}>
									<View style={styles.imageOver}>
										<Image source={photo2} resizeMode="contain" style={styles.image} />
									</View>
								</View>

							</View>
						</View>
					) : (
						<View />
					)}
					<View style={styles.rowContainer}>
						<View style={styles.innerRow}>
							<Typography
								variant="midTitle"
								color="battleshipGrey"
								textAlign="center"
							>
								{'Date'}
							</Typography>
							<TouchableOpacity onPress={() => this._showDateTimePicker( 'date' )}>
								<Typography
									variant="midTitle"
									color="charcoalGrey"
									textAlign="center"
								>
									{date}
								</Typography>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.rowContainer}>
						<View style={styles.innerRow}>
							<Typography
								variant="midTitle"
								color="battleshipGrey"
								textAlign="center"
							>
								{'Time'}
							</Typography>
							<TouchableOpacity onPress={() => this._showDateTimePicker( 'time' )}>
								<Typography
									variant="midTitle"
									color="charcoalGrey"
									textAlign="center"
								>
									{time.toUpperCase()}
								</Typography>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.rowContainer}>
						<View style={styles.innerRow}>
							<Typography
								variant="midTitle"
								color="battleshipGrey"
								textAlign="center"
							>
								{'Duration'}
							</Typography>
							<View>
								<Picker
									placeholder={{
										label: '15 Minutes',
										value: null
									}}
									items={durationList}
									onValueChange={this._onDurationSelected}
									value={duration}
									hideIcon
								>
									<View style={{ justifyContent: 'center' }}>
										<Typography
											variant="midTitle"
											color="charcoalGrey"
											textAlign="center"
										>
											{`${duration} Minutes`}
										</Typography>
									</View>
								</Picker>

							</View>
						</View>


					</View>

					{( paidSwitch ) ? (
						<View style={styles.rowContainer}>
							<View style={styles.innerRow}>
								<Typography
									variant="midTitle"
									color="battleshipGrey"
									textAlign="center"
								>
									{'Address'}
								</Typography>
								<TouchableOpacity onPress={() => {
									const { navigator } = this.props;
									navigator.push( { screen: 'ScheduleAddress', navigatorStyle: { navBarHidden: true } } );
								}}
								>
									<Typography
										variant="midTitle"
										color="charcoalGrey"
										textAlign="center"
									>
										{'New York, 8 Street...'}
										<Icon name="ios-arrow-forward" size={responsiveSize( 20 )} />
									</Typography>
								</TouchableOpacity>
							</View>
						</View>
					) : (
						<View />
					)}

				</View>
				<View style={styles.bottomContainer}>

					{( paidSwitch ) ? (
						<View style={styles.paidCountConatiner}>
							<View style={styles.paidCount}>
								<Typography
									variant="profileUserTitleRegular"
									color="black"
									textAlign="center"
								>
									{'$25'}
								</Typography>
							</View>
							<Typography
								variant="smallBody"
								color="charcoalGrey"
								textAlign="center"
							>
								{'Accomplish takes a 13% transaction fee which covers charges for the Stripe payment gateway.'}
							</Typography>
						</View>
					) : (
						<View style={styles.freeCount}>
							<Typography
								variant="midTitle"
								color="charcoalGrey"
								textAlign="center"
							>
								{'Wating for '}

								<Typography
									variant="midTitle"
									color="black"
									textAlign="center"
								>
									{'Nicolas S '}
								</Typography>

								{'to accept your meeting request'}

							</Typography>
						</View>
					)}


					<View style={styles.buttonContainer}>
						<Button text="Request Meeting" buttonColor={Colors.darkSkyBlue} textColor={Colors.white} style={styles.button} onPress={this._onPressRequestMeeting} />
					</View>
				</View>

			</ScrollView>
		);
	}
}


export default MeetingRequest;
