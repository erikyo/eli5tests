const { Animal, Dog, Cat } = require('./index')
const { test, expect } = require('@jest/globals')

test('has a name and a color attribute', () => {
  // the instance of the class
  const animal = new Animal()
  // an animal has a name
  animal.name = 'Fluffy'
  // and a color
  animal.color = 'blue'

  // the test
  expect(animal).toHaveProperty('name')
  // the test should pass because the name is Fluffy
  expect(animal.name).toBe('Fluffy')
  // the test should fail because the name is fluffy (lowercase)
  expect(animal.name).not.toBe('fluffy')
  // the test should pass because the color is blue
  expect(animal.color).toBe('blue')
  // the test should fail because the color is red
  expect(animal.color).not.toBe('red')
})

test('is a dog that barks', () => {
  // the instance of the class
  const dog = new Dog('Charlie', 'orange')

  // the test should fail because the name is Charlie but the return value of bark is "Woof woof!"
  expect(dog.bark()).not.toBe('Charlie')
  // the test should pass because the dog barks
  expect(dog.bark()).toBe('Woof woof!')
})


test('is a cat that meows', () => {
  const cat = new Cat( 'Kitty', 'black')
  // the test should pass because the cat meows
  expect(cat.meow()).toBe('Meow meow!')
  // the test should fail because the cat meows and not barks
  expect(() => cat.bark()).toThrow(TypeError);
})
