const exercise1 = require('../exercise1');

describe('FizzBuzz', () => {
  it('should throw an exception if input not a number', () => {
    const args = ['a', null, undefined, {}];
    args.forEach(ele => {
      expect(() => {
        exercise1.fizzBuzz(ele);
      }).toThrow();
    });
  });

  it('should return FizzBuzz if input divisible by 3 and 5', () => {
    let result = exercise1.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return Fizz if input only divisible by 3', () => {
    let result = exercise1.fizzBuzz(3);
    expect(result).toBe('Fizz');
  });

  it('should return Buzz if input only divisible by 5', () => {
    let result = exercise1.fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('should retun input if input not divisible by 3 or 5', () => {
    let result = exercise1.fizzBuzz(7);
    expect(result).toBe(7);
  });
});
