/**
 * 	Imagine this is a library with multiple functions
 */

function randomFn() {
	console.log('randomFn from random lib :)');
}

function anotherFn() {
	console.log('Another fn from lib.');
}

export default {
	randomFn: randomFn,
	anotherFn: anotherFn
}