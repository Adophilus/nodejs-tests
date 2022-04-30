const ParentFunction = function () {
	this.construct = () => {
		this.name = "ParentFunction"
	}
}

ParentFunction.prototype.display = function () {
	console.log(this)
	console.log(this.name)
}

// const ChildFunction = function () {
// 	this.constructor = () => {
// 		this.name = "ChildFunction"
// 	}

// 	this.display = () => {
// 		console.log(this.name)
// 	}
// }

// Do not work
// console.log(ChildFunction.extend(ParentFunction))
// console.log(ChildFunction.extends(ParentFunction))

const parent = new ParentFunction()
parent.display()
// console.log(ChildFunction.apply(ParentFunction))