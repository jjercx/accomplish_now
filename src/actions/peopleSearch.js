import GeoLib from 'geolib';
import { Alert } from 'react-native';
import PeopleServices from '../provider/people/PeopleServices';
import {
	GET_PEOPLE_SEARCH_RESULTS,
	START_SEARCHING_PEOPLE
} from './types';

import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';

// id: k, ...people[ k ]
export const actGetPeopleSearchResults = searchText => ( dispatch ) => {
	dispatch( {
		type: START_SEARCHING_PEOPLE
	} );
	PeopleServices.getPeople( ( people ) => {
		searchText = searchText.toLowerCase();
		const peopleIds = Object.keys( people )
			.filter( ( personId ) => {
				if ( people[ personId ].basicInfo === undefined ) {
					return false;
				}

				if ( people[ personId ].location === undefined ) {
					return false;
				}

				const { firstName, lastName } = people[ personId ].basicInfo;
				return ( firstName !== undefined ) && ( lastName !== undefined );
			} )
			.filter( ( personId ) => {
				const {
					basicInfo: { firstName, lastName },
					skills = []
				} = people[ personId ];

				if (
					( firstName.toLowerCase().includes( searchText ) )
					|| ( lastName.toLowerCase().includes( searchText ) )
				) {
					return true;
				}

				if ( skills.some( ( skill ) => {
					const { name } = skill;
					return ( name !== undefined && name.toLowerCase().includes( searchText ) );
				 } ) ) {
					return true;
				}

				return false;
			} );

		navigator.geolocation.getCurrentPosition( ( position ) => {
			if ( !position ) {
				Alert.alert( 'You need to grant location permissions to use this function' );
				dispatch( {
					type: GET_PEOPLE_SEARCH_RESULTS,
					payload: []
				} );
				return;
			}

			const { coords: { latitude, longitude } } = position;
			const peopleInfo = peopleIds.map( ( k ) => {
				const peopleAux = { ...people[ k ] };
				let job = null;
				if ( peopleAux.aboutMe !== undefined ) {
					job = ( peopleAux.aboutMe.expertise !== undefined )
						? peopleAux.aboutMe.expertise.pop().desc
						: null;
				}

				let skills = null;
				const meetingsCount = ( peopleAux.meetings !== undefined )
					? Object.keys( peopleAux.meetings ).length
					: 0;
				if ( peopleAux.skills !== undefined ) {
					skills = peopleAux.skills
						.map( s => ( new ComputedSkill( new Skill( s.id, s.description, null ), 0 ) ) );
				}

				const { location: { coords } } = people[ k ];

				const distance = GeoLib.getDistance( {
					latitude,
					longitude
				},
				{ latitude: coords.latitude, longitude: coords.longitude } );
				const distanceMile = GeoLib.convertUnit( 'mi', distance );
				const p = new Person( k, peopleAux.basicInfo.firstName,
					peopleAux.basicInfo.lastName, job, peopleAux.basicInfo.profilePhotoUrl, skills, null, '', [], PersonState.AVAILABLE );
				return {
					id: k, distance: distanceMile, person: p, meetingsCount, rating: 0
				};
			} ).sort( ( a, b ) => ( a.distance - b.distance ) );

			dispatch( {
				type: GET_PEOPLE_SEARCH_RESULTS,
				payload: peopleInfo
			} );
		}, () => {
			Alert.alert( 'You need to grant location permissions to use this function' );
			dispatch( {
				type: GET_PEOPLE_SEARCH_RESULTS,
				payload: []
			} );
		 } );
	} );
};
