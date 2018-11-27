import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Person from '../../../entities/Person';
import ConnectionBox from '../../connection/connection-box/ConnectionBox';
import Spacing from '../../spacing/Spacing';
import TitleSection from '../title-section/TitleSection';

const MyConnectionsSection = ( { connections, onPress } ) => (
	<View style={styles.container}>
		<TitleSection title="My Connections" />
		<ScrollView horizontal style={styles.wrapperConnections} showsHorizontalScrollIndicator={false}>
			{
				connections.map( person => (
					<View key={person.id} style={{ flexDirection: 'row' }}>
						<ConnectionBox person={person} onPress={() => onPress( person.id )} />
						<Spacing size="medium" horizontal />
					</View>
				) )
			}
		</ScrollView>
	</View>
);


MyConnectionsSection.propTypes = {
	connections: PropTypes.arrayOf( PropTypes.instanceOf( Person ) ),
	onPress: PropTypes.func.isRequired
};

MyConnectionsSection.defaultProps = {
	connections: []
};


export default MyConnectionsSection;
