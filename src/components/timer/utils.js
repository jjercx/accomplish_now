


const format = time => ( time < 10 ? `0${time}` : `${time}` );

export const formatTime = ( count, hours ) => {
	const min = Math.trunc( count / 60 );
	const sec = Math.trunc( count - ( min * 60 ) );

	return {
		hour: format( hours ),
		min: format( min ),
		sec: format( sec )
	};
};


export const statusTime = {
	default: 'START',
	started: 'PAUSE',
	pause: 'RESUME'
};
