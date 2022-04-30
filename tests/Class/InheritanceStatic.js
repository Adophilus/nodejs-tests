class Parent {
	type = "Parent"

	getType () {
		return this.type
	}
}

class Student extends Parent {
	type = "Student"
}

const student = new Student()
console.log(student.getType())