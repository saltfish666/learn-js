let person = {
    sex: 'male'
}

let p1 = Object.create(person)
// Object.setPrototypeOf(person, p1) // err:Cyclic __proto__ value​​
