class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
}

class Dog extends Animal {
  constructor(name, color, size = 'small') {
    super(name, color)
    this.size = size
  }

  bark() {
    if (this.size === 'big') {
      return "Woof woof!"
    }
    return "Yip yip!"
  }
}

class Cat extends Animal {
  meow() {
    return "Meow meow!"
  }

  purr(n = 3) {
    return "Pu" + "r".repeat(n) + "..."
  }
}

module.exports = {Animal, Dog, Cat}
