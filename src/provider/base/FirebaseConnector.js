import Firebase from 'react-native-firebase';

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

currentUserData = path => new Promise( ( resolve, reject ) => {
	const { currentUser } = Firebase.auth();
	const uid = currentUser._user.uid;
	try {
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

set = ( uri, obj, id ) => {
	Firebase.database().ref( `${uri}/${id}` ).set( obj );
};

setPush = ( uri, obj ) => {
	Firebase.database().ref( uri ).push( obj );
};

update = ( uri, obj ) => {
	Firebase.database().ref( `${uri}/${obj.ref}` ).update( obj );
};

listener = ( uri, callback ) => {
	Firebase.database().ref( uri ).on( 'value', ( snapshot ) => {
		let snap = snapshot.val();
		callback( snap );
	} );
};

login = ( user, pass ) => new Promise( async ( resolve, reject ) => {
	try {
		let auth = Firebase.auth();
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
			user.getIdToken( true ).then( ( ) => {
				resolve( user );
			} ).catch( ( error ) => {
				reject( error );
			} );
		}
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
}
