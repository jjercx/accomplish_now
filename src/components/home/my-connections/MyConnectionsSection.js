import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Typography from '../../typography/Typography';
import Person from '../../../entities/Person';
import ConnectionBox from '../../connection/connection-box/ConnectionBox';
import Spacing from '../../spacing/Spacing';

const MyConnectionsSection = ( { connections } ) => (
	<View style={styles.container}>
		<View style={styles.wrapperTitle}>
			<View style={styles.wrapperMyConnections}>
				<Typography variant="midPlusTitle" color="blackLabels">My connections</Typography>
			</View>
			<View style={styles.wrapperSeeAll}>
				<Typography variant="smallTitle" color="darkSkyBlue">See all</Typography>
			</View>
		</View>
		<ScrollView horizontal style={styles.wrapperConnections} showsHorizontalScrollIndicator={false}>
			{
				connections.map( person => (
					<View key={person.id} style={{ flexDirection: 'row' }}>
						<ConnectionBox person={person} />
						<Spacing size="medium" horizontal />
					</View>
				)
				)
			}

		</ScrollView>
	</View>
);

MyConnectionsSection.propTypes = {
	connections: PropTypes.arrayOf( PropTypes.instanceOf( Person ) )
};

MyConnectionsSection.defaultProps = {
	connections: []
};

export default MyConnectionsSection;
