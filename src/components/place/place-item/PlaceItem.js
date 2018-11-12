import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Typography from '../../typography/Typography';
import s from './styles';

const location = require( '../../../assets/images/icons/locationGray.png' );
const fromNear = require( '../../../assets/images/icons/distanceGray.png' );

const PlaceItem = ( { ...places } ) => (
	<TouchableOpacity>
		<View style={{ flex: 1 }}>
			<Image
				style={s.widthImage}
				source={places.image}
			/>
			<Typography
				variant="midTitleBold"
				color="charcoalGrey"
				textAlign="left"
			>
				{places.name}
			</Typography>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					style={{ marginLeft: 10 }}
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
					style={{ marginLeft: 10 }}
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
		</View>
	</TouchableOpacity>
);


export default PlaceItem;
