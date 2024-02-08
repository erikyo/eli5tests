const { Animal } = require('./index.js')
const {Dog, Cat} = require("./index");

test('has a name', () => {
  const animal = new Animal()
  animal.name = 'Fluffy'
  animal.color = 'blue'

  expect(animal.name).toBe('Fluffy')
  expect(animal.name).not.toBe('red')
})

test('is a dog that barks', () => {
  const dog = new Dog()
  dog.name = 'Fluffy'
  dog.color = 'Fluffy'
  expect(dog.bark()).not.toBe('Fluffy')
  expect(dog.bark()).toBe('Woof woof!')
})


test('is a cat that meows', () => {
  const cat = new Cat()
  expect(cat.meow()).toBe('Meow meow!')
  expect(cat.meow()).not.toBe('Woof woof!')
})
