const assert = require( "assert" );
const xtrak = require( "./xtrak.js" );

assert.deepEqual( xtrak( [ "hello", "world", 1, 2, 3, true, false, 5, 6 ], NUMBER ),
[ 1, 2, 3, 5, 6 ] );

console.log( "ok" );
