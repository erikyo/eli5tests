class Animal {
  set emoji(value) {
    this._emoji = value;
  }

  constructor(name, color) {
    this.name = name
    this.color = color
    this._emoji = undefined;
  }

  me() {
    return this._emoji ?? '🐵'
  }
}

class Dog extends Animal {
  constructor(name, color, size = 'small') {
    super(name, color)
    this.size = size
    this._emoji = '🐶'
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
    return `Pu${"r".repeat(n)}...`
  }
}

module.exports = {Animal, Dog, Cat}
