/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
	View, Image, TouchableOpacity, Platform 
} from 'react-native';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';
import s from './styles';

const location = require( '../../../assets/images/icons/locationGray.png' );
const fromNear = require( '../../../assets/images/icons/distanceGray.png' );

const PlaceItem = ( { ...places } ) => (
	<TouchableOpacity>
		<View style={{ flex: 1 }}>
			<Image
				style={Platform.OS === 'ios' ? s.widthImage : s.widthAndroid}
				source={places.image}
			// eslint-disable-next-line react/jsx-no-comment-textnodes
			/>
			<Spacing size="smallPlus" />
			<Typography
				variant="midTitleBold"
				color="charcoalGrey"
				textAlign="left"
			>
				{places.name}
			</Typography>
			<View style={s.descriptionPlaces}>
				<Image
					style={s.sectionIcon}
					source={location}
				/>
				<Typography
					variant="smallBody"
					color="charcoalGrey"
					textAlign="left"
				>
					{places.location}
				</Typography>
				<Image
					style={s.sectionIcon}
					source={fromNear}
				/>
				<Typography
					variant="smallBody"
					color="charcoalGrey"
					textAlign="left"
				>
					{places.distance}
				</Typography> 
			</View>
			<Spacing size="smallPlus" />
		</View>
	</TouchableOpacity>
);


export default PlaceItem;
