/**
*
*	COMPUTE: dot
*
*
*	DESCRIPTION:
*		- Computes the dot product between two numeric arrays.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// DOT PRODUCT //

/**
* FUNCTION: dot( x, y )
*	Computes the dot product between two numeric arrays.
*
* @param {Array} x - numeric array
* @param {Array} y - numeric array
* @returns {Number} dot product
*/
function dot( x, y ) {
	if ( !Array.isArray( x ) ) {
		throw new TypeError( 'dot()::invalid input argument. First argument must be an array.' );
	}
	if ( !Array.isArray( y ) ) {
		throw new TypeError( 'dot()::invalid input argument. Second argument must be an array.' );
	}
	var len = x.length,
		sum = 0;
	if ( len !== y.length ) {
		throw new Error( 'dot()::invalid input argument. Arrays must be of equal length.' );
	}
	for ( var i = 0; i < len; i++ ) {
		sum += x[ i ] * y[ i ];
	}
	return sum;
} // end FUNCTION dot()


// EXPORTS //

module.exports = dot;
