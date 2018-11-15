/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import {
	View, StyleSheet, StatusBar, FlatList, Platform
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
import Header from '../components/header/Header';
import Place from '../entities/Place';

const iconOrder = require( '../assets/images/icons/orderSmall.png' );
const iconFiltter = require( '../assets/images/icons/filterSmall.png' );
const iconLocation = require( '../assets/images/icons/map.png' );

const styles = StyleSheet.create( {
	container: {
		flex: 1
	},
	subContainer: {
		flex: 1,
		marginTop: hp( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginLeft: wp( WTP( 15 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hp( HTP( 5 ) )
	}
} );

class Places extends Component {
    static navigatorStyle = {
    	navBarHidden: true
    };

    // eslint-disable-next-line react/sort-comp
    _onPressBack() {
    	const { navigator } = this.props;
    	navigator.pop();
    }

    // eslint-disable-next-line class-methods-use-this
    _filter() {
    	// eslint-disable-next-line no-console
    	console.log( 'Filter actions' );
    }

    // eslint-disable-next-line class-methods-use-this
    _order() {
    	// eslint-disable-next-line no-console
    	console.log( 'Order action' );
    }

    // eslint-disable-next-line class-methods-use-this
    _location() {
    	// eslint-disable-next-line no-console
    	console.log( 'Location action' );
    }


	_places = () => [
		 new Place( 1, 'Office Global 305', require( '../assets/images/places/office305.png' ), 'New York', '2 miles from you' ),
		 new Place( 2, 'Corner Corner SC', require( '../assets/images/places/cornersc.png' ), 'New York', '2 miles from you' ),
		 new Place( 3, 'Office Global 305', require( '../assets/images/places/cornersc.png' ), 'New York', '2 miles from you' ),
		 new Place( 4, 'Corner Corner SC', require( '../assets/images/places/cornersc.png' ), 'New York', '2 miles from you' )
	];

	_buttonIcons = () => [
		   { id: 1, icon: iconOrder, onPress: this._order },
		   { id: 2, icon: iconFiltter, onPress: this._filter },
		   { id: 3, icon: iconLocation, onPress: this._location }
	];

	render() {
		const { navigator: _navigator } = this.props;
    	return (
    		<View style={styles.container}>
    			<View style={styles.subContainer}>
    				<StatusBar
    					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
    				/>
					<Header
					    onPressBack={this._onPressBack.bind( this )}
						buttonIcons={this._buttonIcons()}
					/>
    				<Typography
    					variant="semiLargeTitle"
    					color="darkSkyBlue"
    					textAlign="left"
    				>
    					{'Places to work'}
    				</Typography>
					<FlatList
						style={styles.flatList}
						data={this._places()}
						keyExtractor={( item, index ) => index.toString()}
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
