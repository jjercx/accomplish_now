/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import {
	View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Platform
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import Typography from '../components/typography/Typography';
import PlaceItem from '../components/place/place-item/PlaceItem';
import Place from '../entities/Place';

const logoAccomplish = require( '../assets/images/messages/isoGray.png' );
const iconOrder = require( '../assets/images/icons/orderSmall.png' );
const iconFiltter = require( '../assets/images/icons/filterSmall.png' );
const iconLocation = require( '../assets/images/icons/map.png' );

const s = StyleSheet.create( {
	container: {
		flex: 1
	},
	subContainer: {
		flex: 1,
		marginTop: hp( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginLeft: wp( WTP( 15 ) )
	},
	headerButtonsContainer: {
		flexDirection: 'row'
	},
	headerButtonNotificationsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		position: 'relative'
	},
	headerButtonAccomplishContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	logo: {
		width: wp( WTP( 18 ) ),
		height: hp( HTP( 18 ) )
	},
	iconsSettings: {
		width: wp( WTP( 18 ) ),
		height: hp( HTP( 18 ) )
	},
	buttonAccomplish: {
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 5 ) ),
		paddingRight: wp( WTP( 10 ) )
	},
	buttonIconSettings: {
		marginRight: hp( HTP( 5 ) ),
		marginLeft: hp( HTP( 5 ) ),
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 5 ) ),
		paddingRight: wp( WTP( 10 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hp( HTP( 5 ) )
	}
} );

// eslint-disable-next-line react/prefer-stateless-function
class Places extends Component {
    static navigatorStyle = {
    	navBarHidden: true
    };

    // eslint-disable-next-line react/sort-comp
    _onPressBack() {
    	const { navigator } = this.props;
    	navigator.pop();
    }

	_places = () => [
		 new Place( 1, 'Office Global 305', require( '../assets/images/places/office305.png' ), 'New York', '2 miles from you' ),
		 new Place( 2, 'Corner Corner SC', require( '../assets/images/places/cornersc.png' ), 'New York', '2 miles from you' )
	];

	render() {
    	const { navigator: _navigator } = this.props;
    	return (
    		// eslint-disable-next-line react/jsx-indent
    		// eslint-disable-next-line react/jsx-no-comment-textnodes
    		<View style={s.container}>
    			<View style={s.subContainer}>
    				<StatusBar
    					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
    				/>
    				<View style={s.headerButtonsContainer}>
    					<View style={s.headerButtonAccomplishContainer}>
    						<TouchableOpacity onPress={() => this._onPressBack()}>
    							<View style={s.buttonAccomplish}>
    								<Image
    									style={s.logo}
    									// eslint-disable-next-line no-undef
    									source={logoAccomplish}
    								/>
    							</View>
    						</TouchableOpacity>
    					</View>
    					<View style={s.headerButtonNotificationsContainer}>
    						<TouchableOpacity onPress={() => this._onPressBack()}>
    							<View style={s.buttonIconSettings}>
    								<Image
    									// eslint-disable-next-line no-undef
    									source={iconOrder}
    								/>
    							</View>
    						</TouchableOpacity>
    						<TouchableOpacity onPress={() => this._onPressBack()}>
    							<View style={s.buttonIconSettings}>
    								<Image
    									// eslint-disable-next-line no-undef
    									source={iconFiltter}
    								/>
    							</View>
    						</TouchableOpacity>
    						<TouchableOpacity onPress={() => this._onPressBack()}>
    							<View style={s.buttonIconSettings}>
    								<Image
    									// eslint-disable-next-line no-undef
    									source={iconLocation}
    								/>
    							</View>
    						</TouchableOpacity>
    					</View>
    				</View>
    				<Typography
    					variant="semiLargeTitle"
    					color="darkSkyBlue"
    					textAlign="left"
    				>
    					{'Places to work'}
    				</Typography>
					<FlatList
						style={s.flatList}
						data={this._places()}
						keyExtractor={item => item.id}
						renderItem={( { item } ) => (
							<PlaceItem {...item} />
						)}
					/>

    			</View>
    			<NavBar navigator={_navigator} />
    		</View>

    	);
	}
}

Places.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Places;
