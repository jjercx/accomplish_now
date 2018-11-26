import GeoLib from 'geolib';
import PeopleServices from '../provider/people/PeopleServices';
import {
	GET_PEOPLE_NEARBY,
	START_SEARCHING_PEOPLE
} from './types';

import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';

// id: k, ...people[ k ]
export const actGetPeopleNearby = ( miles = 30 ) => ( dispatch ) => {
	dispatch( {
		type: START_SEARCHING_PEOPLE
	} );
	PeopleServices.getPeopleNearby( ( people ) => {
		navigator.geolocation.getCurrentPosition( ( position ) => {
			const { coords: { latitude, longitude } } = position;
			const keys = Object.keys( people );
			const peopleInfo = keys.map( ( k ) => {
				const peopleAux = { ...people[ k ] };
				if ( typeof peopleAux.location === 'undefined' ) return false;
				if ( typeof peopleAux.basicInfo === 'undefined' ) return false;
				let job = null;
				if ( typeof peopleAux.aboutMe !== 'undefined' ) {
					job = ( typeof peopleAux.aboutMe.expertise !== 'undefined' ) ? peopleAux.aboutMe.expertise.pop().desc : null;
				}

				let skills = null;
				const meetingsCount = ( typeof peopleAux.meetings !== 'undefined' ) ? Object.keys( peopleAux.meetings ).length : 0;
				if ( typeof peopleAux.skills !== 'undefined' ) {
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
				if ( distanceMile <= miles ) {
					const p = new Person( k, peopleAux.basicInfo.firstName,
						peopleAux.basicInfo.lastName, job, peopleAux.basicInfo.profilePhotoUrl, skills, null, '', [], PersonState.AVAILABLE );
					return {
						id: k, distance: distanceMile, person: p, meetingsCount, rating: 0
					};
				}
				return false;
			} )
				.filter( f => ( f !== false ) ).sort( ( a, b ) => ( a.distance - b.distance ) );

			dispatch( {
				type: GET_PEOPLE_NEARBY,
				payload: peopleInfo
			} );
		} );
	} );
};
