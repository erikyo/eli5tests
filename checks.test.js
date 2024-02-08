const { Animal, Dog, Cat } = require('./index')
const { test, expect } = require('@jest/globals')

test('has a name and a color attribute', () => {
  const animal = new Animal()
  animal.name = 'Fluffy'
  animal.color = 'blue'

  expect(animal.name).toBe('Fluffy')
  expect(animal.name).not.toBe('red')
})

test('is a dog that barks', () => {
  const dog = new Dog('fluffy', 'blue')
  expect(dog.bark()).not.toBe('Fluffy')
  expect(dog.bark()).toBe('Woof woof!')
})


test('is a cat that meows', () => {
  const cat = new Cat()
  expect(cat.meow()).toBe('Meow meow!')
  expect(cat.meow()).not.toBe('Woof woof!')
})
