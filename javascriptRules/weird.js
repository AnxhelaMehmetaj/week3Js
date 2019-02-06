// Multiple ways to create Arrays and Objects. 
var object1 = { _id: '1234', title: 'Object 1', published: true };	// Object Literal
var object2 = new Object();  // Object Constructor 
object2._id = '1235';
object2.title = 'Object 2';
object2.published = false;

var array1 = [1, 2, 3, 4];	// Array Literal
var array2 = new Array(5, 6, 7, 8);  // Array Constructor 

// Event Listeners can be bound in a numer of fashions.
// Through Code reference 

document.querySelector('#button1').addEventListener('click', function (event) {
	alert('clicked button1');
});

// Can also assign event listeners to named functions through HTML attributes 
// (see #button2 on html)
function button2 (event) {
	alert('clicked button2');
}

// The Equality Operator (==) and Identity Operator (===) are similar but different.
// Both are used in logical expressions, but can sometimes return different results. 
var number = 3, string = '3';

console.log('number', number);
console.log('string', string);
// The number and string values will be equal if we use ==
console.log('is equal', number == string);
// The number and string are however, not identical
console.log('is identical', number === string);

var isNull = null, isUndefiened;

// Null and Undefined while they both are a lack of a value, are not quite the same
console.log('isNull', null);
console.log('isUndefiened', isUndefiened);
// null and undefined are both a lack of value, so roughly equate to false. 
// So in this case they are equal
console.log('is equal', isNull == isUndefiened);
// However even though null is an empty value, it is still some kind of value.
// Undefined is the equivlant of a Null Pointer Exception, nothing exists, not even a lack of a
// value. 
console.log('is identical', isNull === isUndefiened);