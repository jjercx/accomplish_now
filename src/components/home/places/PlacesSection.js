import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Place from '../../../entities/Place';
import PlaceBox from '../../place/place-box/PlaceBox';
import Spacing from '../../spacing/Spacing';
import TitleSection from '../title-section/TitleSection';

const PlacesSection = ( {
	places, onPressShowPlacesList, title, placesDetailActive
} ) => (
	<View
		style={[
			styles.container,
			placesDetailActive ? styles.containerPlacesDetailActive : null ]}
	>
		<Spacing size="small" />
		<TitleSection
			title={title}
			placesDetailActive={placesDetailActive}
			onPressSeeAll={onPressShowPlacesList}
		/>
		<ScrollView
			horizontal
			style={[
				styles.wrapperPlaces,
				placesDetailActive
					? styles.wrapperPlacesPlacesDetailActive
					: null
			]}
			showsHorizontalScrollIndicator={false}
		>
			{
				places.map( place => (
					<View key={place.id} style={{ flexDirection: 'row' }}>
						<PlaceBox place={place} />
						<Spacing size="medium" horizontal />
					</View>
				) )
			}

		</ScrollView>
		<Spacing size="medium" />
	</View>
);

PlacesSection.propTypes = {
	places: PropTypes.arrayOf( PropTypes.instanceOf( Place ) ),
	onPressShowPlacesList: PropTypes.func,
	title: PropTypes.string,
	placesDetailActive: PropTypes.bool
};

PlacesSection.defaultProps = {
	places: [],
	onPressShowPlacesList: () => {},
	title: 'Places to work',
	placesDetailActive: false
};

export default PlacesSection;
