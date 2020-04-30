// mpg * fuelLeft must be greater than distanceToPump.
// if it is our function will return true
//  if not , our function will return false

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
