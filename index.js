class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
}

class Dog extends Animal {
  bark() {
    return "Woof woof!"
  }
}

class Cat extends Animal {
  meow() {
    return "Meow meow!"
  }
}

module.exports = { Animal, Dog, Cat }
