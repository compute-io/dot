'use strict';

var dot = require( './../lib' );

// Simulate some data...
var x = new Array( 100 ),
	y = new Array( 100 );

var val;
for ( var i = 0; i < x.length; i++ ) {
	val = Math.round( Math.random()*100 ) + 1;
	x[ i ] = val;
	if ( i % 2 === 0 ) {
		val = -val;
	}
	y[ i ] = 1 / val;
}

console.log( dot( x, y ) );
// returns ~0 (floating-point errors)
