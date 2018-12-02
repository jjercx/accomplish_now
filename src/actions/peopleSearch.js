import GeoLib from 'geolib';
import { Alert } from 'react-native';
import PeopleServices from '../provider/people/PeopleServices';
import {
	GET_PEOPLE_SEARCH_RESULTS,
	START_SEARCHING_PEOPLE
} from './types';

import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';

const gpsError = ( dispatch ) => {
	Alert.alert( 'You need to grant location permissions to use this function' );
	dispatch( { type: GET_PEOPLE_SEARCH_RESULTS, payload: [] } );
};

export const actGetPeopleSearchResults = searchText => ( dispatch ) => {
	dispatch( { type: START_SEARCHING_PEOPLE } );
	PeopleServices.getPeople( ( people ) => {
		navigator.geolocation.getCurrentPosition( ( position ) => {
			if ( !position ) { gpsError( dispatch ); return; }
			const { coords: { latitude, longitude } } = position;
			// ─────────────────────────────────────────────────────────────────

			const peopleIds = Object.keys( people ).filter( personId => (
				people[ personId ].basicInfo
				&& people[ personId ].location
				&& people[ personId ].basicInfo.firstName
				&& people[ personId ].basicInfo.lastName
			) ).filter( ( personId ) => {
				searchText = searchText.toLowerCase();
				const { basicInfo: { firstName, lastName }, skills = [] } = people[ personId ];
				return (
					firstName.toLowerCase().includes( searchText )
					|| lastName.toLowerCase().includes( searchText )
					|| skills.some( skill => skill.name && skill.name.toLowerCase().includes( searchText ) )
				);
			} );

			const peopleInfo = peopleIds.map( ( personId ) => {
				const personData = people[ personId ];
				let {
					location: { coords },
					basicInfo: { firstName, lastName, profilePhotoUrl }
				} = personData;

				const skills = personData.skills && personData.skills.map( skill => (
					new ComputedSkill( new Skill( skill.id, skill.description, null ), 0 ) ) );

				const distance = GeoLib.convertUnit( 'mi', GeoLib.getDistance( { latitude, longitude },
					{ latitude: coords.latitude, longitude: coords.longitude } ) );

				const meetingsCount = personData.meetings && Object.keys( personData.meetings ).length;

				const expertise = personData.aboutMe && personData.aboutMe.expertise
					&& personData.aboutMe.expertise.pop().desc;

				const newPerson = new Person(
					personId,
					firstName,
					lastName,
					expertise,
					profilePhotoUrl,
					skills,
					null, '', [],
					PersonState.AVAILABLE
				);

				return {
					id: personId,
					distance,
					person: newPerson,
					meetingsCount,
					rating: 0
				};
			} ).sort( ( a, b ) => ( a.distance - b.distance ) );

			// ─────────────────────────────────────────────────────────────────
			dispatch( { type: GET_PEOPLE_SEARCH_RESULTS, payload: peopleInfo } );
		}, () => gpsError( dispatch ) );
	} );
};
