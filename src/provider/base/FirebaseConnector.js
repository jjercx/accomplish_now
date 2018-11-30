import Firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';

export default class FirebaseConnector {
	constructor( options = {} ) {
		const { apikey = '', timeout = 0, trackingId = '' } = options;
		this._defaultHeaders = {};
		if ( apikey ) this._defaultHeaders[ 'X-ApiKey' ] = apikey;
		if ( trackingId ) this._defaultHeaders[ 'X-TrackingId' ] = trackingId;
		if ( timeout ) this._timeout = timeout;
	}

get = ( uri, id ) => new Promise( ( resolve, reject ) => {
	try {
		if ( id ) { uri = `${uri}/${id}`; }
		Firebase.database().ref( uri ).once( 'value', ( snapshot ) => {
			let snap = snapshot.val();
			resolve( snap );
		} );
	} catch ( e ) {
		reject( e );
	}
} );

getByQuery = ( base, orderBy, equalTo, callback ) => {
	try {
		Firebase
			.database()
			.ref( base )
			.orderByChild( orderBy )
			.equalTo( equalTo )
			.on( 'value', ( snapshot ) => {
				const data = snapshot.val();
				let itemsList = [];
				if ( data ) {
					let objData = Object.keys( data );
					objData.map( ( eachKey ) => {
						let itemKey = data[ eachKey ];
						return itemsList.push( itemKey );
					} );
				}
				callback( itemsList );
			} );
	} catch ( e ) {
		callback( e );
	}
}

currentUserData = path => new Promise( ( resolve, reject ) => {
	try {
		const auth = Firebase.auth();
		const { uid } = auth.currentUser;
		if ( uid ) { path = `${path}/${uid}`; }
		Firebase.database().ref( path ).once( 'value', ( snapshot ) => {
			let snap = snapshot.val();
			resolve( snap );
		} );
	} catch ( e ) {
		reject( e );
	}
} );

remove = ( uri, id ) => {
	Firebase.database().ref( `${uri}/${id}` ).remove();
};

set = ( uri, obj, id ) => new Promise( ( resolve, reject ) => {
	Firebase.database().ref( `${uri}/${id}` ).set( obj, ( error ) => {
		if ( error ) {
			reject( error );
		} else {
			resolve( 'ok' );
		}
	} );
} );

setPush = ( uri, obj ) => new Promise( ( resolve, reject ) => {
	Firebase.database().ref( uri ).push( obj, ( error ) => {
		if ( error ) {
			reject( error );
		} else {
			resolve( 'ok' );
		}
	} );
} );

update = ( path, data ) => new Promise( ( resolve, reject ) => {
	console.log('sellama al update', path, data);
	try {
		Firebase.database().ref( `${path}` ).update( data ).then( () => {
			console.log('me updatea al user');
			resolve( 'ok' );
		} );
	} catch ( e ) {
		reject( e );
	}
} );

listener = ( uri, callback ) => {
	Firebase.database().ref( uri ).on( 'value', ( snapshot ) => {
		let snap = snapshot.val();
		callback( snap );
	} );
};

login = ( user, pass ) => new Promise( async ( resolve, reject ) => {
	try {
		let res = auth.signInWithEmailAndPassword( user, pass );
		resolve( res );
	} catch ( error ) {
		reject( error );
	}
} );

createUserWithEmailAndPassword = ( user, onSuccess, onError ) => {
	Firebase
		.auth()
		.createUserWithEmailAndPassword( user.userName, user.password )
		.then( ( res ) => {
			if ( onSuccess ) onSuccess( res );
		} )
		.catch( ( error ) => {
			if ( onError ) onError( error );
		} );
};

verifyLogin = () => new Promise( async ( resolve, reject ) => {
	Firebase.auth().onAuthStateChanged( ( user ) => {
		if ( user ) {
			user.getIdToken( true ).then( ( token ) => {
				this.setDeviceToken().then( () => {
					resolve( token );
				} );
			} ).catch( ( error ) => {
				reject( error );
			} );
		}
	} );
} )

setDeviceToken = () => new Promise( async ( resolve, reject ) => {
	const auth = Firebase.auth();
	const { uid } = auth.currentUser;
	let deviceId = DeviceInfo.getUniqueID();
	Firebase
		.messaging()
		.getToken( true )
		.then( ( fcmToken ) => {
			if ( fcmToken ) {
				this.set( `/users/${uid}/devicesToken`, { pushToken: fcmToken }, deviceId ).then( () => {
					resolve( 'ok' );
				} ).catch( ( e ) => {
					reject( e );
				} );
			}
		} ).catch( ( e ) => {
			reject( e );
		} );
} )

signWithCustomToken = token => new Promise( async ( resolve, reject ) => {
	try {
		let resp = Firebase.auth().signInWithCustomToken( token );
		resolve( resp );
	} catch ( error ) {
		reject( error );
	}
} )

uploadImg = ( file, path ) => new Promise( async ( resolve, reject ) => {
	try {
		let storageRef = Firebase.storage().ref();
		let filename = new Date().getTime();
		let metadata = {
			contentType: 'image/jpeg'
		};
		let uploadTask = storageRef
			.child( `images/${path}/${filename}.jpg` )
			.put( file, metadata );
		uploadTask.on(
			'state_changed',
			( snapshot ) => {
				let progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
				console.log( progress, ' %' );
				switch ( snapshot.state ) {
					case Firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log( 'Upload is paused' );
						break;
					case Firebase.storage.TaskState.RUNNING: // or 'running'
						console.log( 'Upload is running' );
						break;
					default: console.log( 'Upload is running' );
				}
			},
			( error ) => {
			// Handle unsuccessful uploads
				reject( error );
				console.log( 'Has been occurred an error.', error );
			},
			( snapshot ) => {
				resolve( snapshot.downloadURL );
			}
		);
	} catch ( e ) {
		console.log( 'looog', e );
		reject( e );
	}
} );
}
