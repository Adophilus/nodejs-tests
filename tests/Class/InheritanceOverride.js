class Parent {
	type = "Parent"

	getType () {
		return this.type
	}
}

class Student extends Parent {
	type = "Student"

	getType () {
		return `my type is ${this.type}`
	}
}

const student = new Student()
console.log(student.getType())