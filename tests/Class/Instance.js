class Parent {
	type = 'Parent'

	constructor () {
		this.type2 = this.type
	}

	getType2 () {
		return this.type2
	}
}

class Student extends Parent {
	type = 'Student'
}

const student = new Student()
console.log(student.getType2())