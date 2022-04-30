class Parent {
	fields = {
		name: "",
		age: 0
	}

	get (key) {
		return this.fields[key]
	}

	set (val) {
		for (let key in val) {
			this.fields[key] = val[key]
		}
	}
}

const parent = new Parent()

console.log(parent.get("name"), parent.get("age"))

parent.set({ name: "John" })

console.log(parent.get("name"), parent.get("age"))

parent.set({ age: 30 })

console.log(parent.get("name"), parent.get("age"))

parent.set({ name: "Joshua", age: 40 })

console.log(parent.get("name"), parent.get("age"))
