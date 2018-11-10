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
		Firebase.ref( uri ).once( 'value', ( snapshot ) => {
			let snap = snapshot.val();
			resolve( snap );
		} );
	} catch ( e ) {
		reject( e );
	}
} );

remove = ( uri, id ) => {
	Firebase.ref( `${uri}/${id}` ).remove();
};

set = ( uri, obj, id ) => {
	Firebase.ref( `${uri}/${id}` ).set( obj );
};

setPush = ( uri, obj ) => {
	Firebase.ref( uri ).push( obj );
};

update = ( uri, obj ) => {
	Firebase.ref( `${uri}/${obj.ref}` ).update( obj );
};

listener = ( uri, callback ) => {
	Firebase.ref( uri ).on( 'value', ( snapshot ) => {
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
			user.getIdToken( true ).then( ( token ) => {
				let newToken = token;
				resolve( newToken );
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
