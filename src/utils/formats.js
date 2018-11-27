import moment from 'moment';

export function formatDate( unixTimestamp ) {
	const _15daysAgo = moment().subtract( 15, 'days' );
	const date = moment.unix( unixTimestamp / 1000 );

	if ( date.isAfter( _15daysAgo, 'days' ) ) {
		return date.fromNow();
	}

	return date.format( 'ddd[,] MMM DD h:mm A' );
}
