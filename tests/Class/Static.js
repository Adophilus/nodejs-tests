class Parent {
	static fields = {
		name: "John Doe",
		age: 30
	}

	constructor (param) {
		if (param)
			console.log(param)
	}

	static info () {
		return this.fields
	}

	info () {
		return this.constructor.fields
	}

	static info2 () {
		return this.fields
	}

	static info3 () {
		return new this("string")
	}

	info4 () {
		return this.constructor.fields
	}
}

class Child extends Parent {
	static fields = {
		name: "John Doe II",
		age: 6
	}

	static info2 () {
		return super.info2()
	}
}

class LittleOne extends Child {
	static fields = {
		name: "John Doe III",
		age: 3
	}
}

console.log("Calling class static methods...\n")
console.log("Without instantializing")
console.log(Parent.info())
console.log(Child.info())
console.log(Child.info2())
console.log(Child.info3())
console.log()

console.log("With instantializing")
const parent = new Parent()
const child = new Child()
const littleOne = new LittleOne()
console.log(parent.info())
console.log(child.info())
console.log(littleOne.info())