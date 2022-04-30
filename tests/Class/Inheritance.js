class Person {
	constructor (name) {
		this.name = name
	}
}

class Student extends Person {
	constructor (name) {
		super(name)
	}

	info () {
		return {
			name: this.name
		}
	}
}

const student = new Student("John Doe")
console.log(student.info())