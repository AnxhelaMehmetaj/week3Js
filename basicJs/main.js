// JavaScript Variables are typeless. 
// They still have a type, but aren't restricted to one.
var int = 0;
var float = 3.14;
var string = 'String Here';
var boolean = true;
var array = [1, 4.2, '2019', false];
var object = { _id: '1234', title: 'Example A', published: true };

// Whitespace doesn't matter in JavaScript. 
console.log('int', int, typeof int);
console
	.log('float', float, typeof float);
console           .log('string', string, typeof string);
console.log('boolean', boolean, typeof boolean) // You don't even need semi-colons
console.log('array', array, typeof array);
console.log('object', object, typeof object);

// Variables aren't set to a type and can be changed whenever
boolean = 13.37;
console.log('New Boolean', boolean, typeof boolean);

// JavaScript Functions work similar to most other languages
function isPublished (obj) {
	return obj && obj.published;
}

// Anyomous functions are functions without a name. Can be stored in variables
var isEven = function (number) {
	return number % 2 === 0;
}

console.log('Type of Anyomous Function', typeof isEven);

// Event Listeners are the main way JavaScript operates after the script is initially run.
// You can have functions that respond to events made within the 
// DOM (HTML Document, more on that later...)
var button1 = document.getElementById('button1');       // Get Reference to HTML element.
button1.addEventListener('click', function (event) {	// Say what event to listen for,
	console.log ('JavaScript Click Event', event);		// and provide a callback function for
	alert('You Clicked Button 1');						// when it is triggered
});

// All control statements work similarly to other languages 

// If/Else statements and their conditionals work as expected
if (object.published) {
	console.log('Mock Object is published!');
} else {
	console.log ('Mock Object is not published');
}

function gradeReport (letterGrade) {
	// Switch cases can match Strings as well as numbers
	switch (letterGrade) {
		case 'A':
			return 'Amazing Job';
			break;
		case 'B':
			return 'Great Job';
			break;
		case 'C':
			return 'Good Job';
			break;
		case 'D':
			return 'Needs Improvement';
			break;
		case 'F':
			return 'Fail';
			break;
		default:
			return 'Invalid Grade';
	}
}

console.log('Grade Report: B', gradeReport('B'));
console.log('Grade Report: D', gradeReport('B'));
console.log('Grade Report: LaserBeams', gradeReport('LaserBeams'));

// While loops work as expect.
// Watch out for infinite loops, they'll crash your browser tabs 
let count = 0;
while(count < 5) {
	console.log('Count is: ', count);
	count++;
}

var mockArr = [1, 2, 5, 8, 13, 20];

for (var i = 0; i < mockArr.length; i++) {
	console.log('Is Number Even', mockArr[i], isEven(mockArr[i]))
}




