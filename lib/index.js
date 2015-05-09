'use strict';

// DOT PRODUCT //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

/**
* FUNCTION: dot( x, y )
*	Computes the dot product between two numeric arrays.
*
* @param {Array} x - numeric array
* @param {Array} y - numeric array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number} dot product
*/
function dot( x, y, clbk ) {

	if ( !isArray( x ) ) {
		throw new TypeError( 'dot()::invalid input argument. First argument must be an array. Value: `' + x + '`.' );
	}
	if ( !isArray( y ) ) {
		throw new TypeError( 'dot()::invalid input argument. Second argument must be an array. Value: `' + y + '`.' );
	}

	if ( arguments.length > 2 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'dot()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}

	var len = x.length,
		sum = 0,
		i;

	if ( len !== y.length ) {
		throw new Error( 'dot()::invalid input argument. Arrays must be of equal length.' );
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			sum += clbk( x[ i ], i, 0 ) * clbk( y[ i ], i, 1 );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			sum += x[ i ] * y[ i ];
		}
	}

	return sum;
} // end FUNCTION dot()


// EXPORTS //

module.exports = dot;
