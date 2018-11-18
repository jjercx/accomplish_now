import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Place from '../../../entities/Place';
import PlaceBox from '../../place/place-box/PlaceBox';
import Spacing from '../../spacing/Spacing';
import TitleSection from '../title-section/TitleSection';

const PlacesSection = ( { places, onPressShowPlacesList } ) => (
	<View style={styles.container}>
		<TitleSection title="Places to work" onPressSeeAll={onPressShowPlacesList} />
		<ScrollView horizontal style={styles.wrapperPlaces} showsHorizontalScrollIndicator={false}>
			{
				places.map( place => (
					<View key={place.id} style={{ flexDirection: 'row' }}>
						<PlaceBox place={place} />
						<Spacing size="medium" horizontal />
					</View>
				)
				)
			}

		</ScrollView>
		<Spacing size="medium" />
		<TitleSection title="Places" />
	</View>
);

PlacesSection.propTypes = {
	places: PropTypes.arrayOf( PropTypes.instanceOf( Place ) ),
	onPressShowPlacesList: PropTypes.func
};

PlacesSection.defaultProps = {
	places: [],
	onPressShowPlacesList: () => {}
};

export default PlacesSection;
