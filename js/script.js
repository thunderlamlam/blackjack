function deal() {
	x = randomInteger(1, 52);
	y = randomInteger(1, 52);
	c = "#card"+x;
	b = "#card"+y;
	$(c).toggle();
	$(b).toggle();
	console.log(c,b);

}

function getLen( v ) { 
  return Math.abs( v ).toString().length; 
};

function randomInteger( min, max ) {
  return ( new Array( ++max - min ) )
    .join('.').split('.')
    .map(function( v,i ){ return [ Math.random(), min + i ] })
    .filter(function( v ){ return getLen( v[1] ) >= getLen( min ) })
    .sort().map(function( v ) { return v[1] }).pop();
}