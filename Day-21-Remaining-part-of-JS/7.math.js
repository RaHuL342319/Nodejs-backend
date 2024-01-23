function mathMethods(value) {
  console.log("Original Value:", value);

  /**
   * Math.round(x: number): Returns a supplied numeric expression rounded to the nearest integer.
        parameter: 
            x — The value to be rounded to the nearest integer.
   */
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  /**
   * Math.ceil(x: number): Returns the smallest integer greater than or equal to its numeric argument.
        parameter:
            x —> A numeric expression.
   */
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  /**
   * Math.floor(x: number): Returns the greatest integer less than or equal to its numeric argument.
        parameter:  
            x — A numeric expression.
   */
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  /**
   * Math.random(): Returns a pseudorandom number between 0 and 1.
   */
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  /**
   * Math.max(values: number[]): Returns the larger of a set of supplied numeric expressions.
        parameter:
             values —> Numeric expressions to be evaluated
   */
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  /**
   * (method) Math.min(values: number[]): Returns the smaller of a set of supplied numeric expressions.
        parameter: 
            values — Numeric expressions to be evaluated.
   */
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  /**
   * Math.pow(x, y): Returns the value of a base expression taken to a specified power.
        parameter : 
            x — The base value of the expression.
            y — The exponent value of the expression.
   */
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  /**
   * Math.sqrt(x): Returns the square root of a number.
        parameter: 
             x -> A numeric expression.
   */
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
