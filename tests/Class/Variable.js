class ParentJohnDoe {
	firstName = "John"
	lastName = "Doe"
	fullName = this.firstName + " " + this.lastName

	newSelf() {
		return new this.constructor
	}
}

const parent = new ParentJohnDoe()
console.log(parent.fullName)
console.log(parent.newSelf())