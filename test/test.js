'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	dot = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-dot', function tests() {

	it( 'should export a function', function test() {
		expect( dot ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not an array', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				dot( value, [] );
			};
		}
	});

	it( 'should throw an error if the second argument is not an array', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				dot( [], value );
			};
		}
	});

	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				dot( [ 1, 2, 3 ], [ 1, 2, 3 ], value );
			};
		}
	});


	it( 'should throw an error if the input arrays are not the same length', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			dot( [1,2,3], [1,2] );
		}
	});

	it( 'should compute the dot product', function test() {
		var x = [ 1, 2, 3 ],
			y = [ 4, 5, 6 ],
			expected = 32,
			actual;

		actual = dot( x, y );

		assert.strictEqual( actual, expected );
	});

	it( 'should compute the dot product using an accessor function', function test() {
		var dat1, dat2, expected, actual;

		dat1 = [
			{'x':2},
			{'x':4},
			{'x':5}
		];
		dat2 = [
			[1,3],
			[2,1],
			[3,5]
		];

		actual = dot( dat1, dat2, getValue );
		expected = 35;

		assert.strictEqual( actual, expected );

		function getValue( d, i, j ) {
			if ( j === 0 ) {
				return d.x;
			}
			return d[ 1 ];
		}
	});

});
