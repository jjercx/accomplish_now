import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Person from '../../../entities/Person';
import ConnectionBox from '../../connection/connection-box/ConnectionBox';
import Spacing from '../../spacing/Spacing';
import TitleSection from '../title-section/TitleSection';
import Button from '../../button/Button';
import colors from '../../../theme/palette';

const MyConnectionsSection = ( { connections } ) => {
	if ( connections.length > 0 ) {
		return (
			<View style={styles.container}>
				<TitleSection title="My Connections" />
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
	}

	  return (
		<View style={styles.container}>
			<View style={styles.containerLabel}>
				<Image
					style={styles.personIcon}
					source={require( '../../../assets/images/home/peoplePh.png' )}
				/>
				<Spacing size="smallPlus" horizontal />
				<Typography variant="midBody" color="placeholder">You don’t have any connections yet. </Typography>
			</View>
			<Button
				text="Find Conecctions"
				textColor={colors.darkSkyBlue}
				buttonColor={colors.veryLightPink}
				style={{ heigth: 10, backgroundColor: colors.veryLightPink, width: '90%' }}
				onPress={() => console.log( 'click' )}
			/>
		</View>
	  );
};

MyConnectionsSection.propTypes = {
	connections: PropTypes.arrayOf( PropTypes.instanceOf( Person ) )
};

MyConnectionsSection.defaultProps = {
	connections: []
};


export default MyConnectionsSection;
