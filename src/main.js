import notify from './Notification';
import lib from './Library'

notify("Hello world!");
lib.anotherFn()
lib.randomFn()

// Check project output, this has been transpiled to something that works in browsers that don't use the class syntax
// Note: some browsers do support this natively, but not enough :)
class Form {
	constructor () {
		let squared = [1, 2, 4, 8].map(n => n * n);

		console.log(squared);
	}
}

new Form();
