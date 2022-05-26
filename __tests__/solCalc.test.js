import { SolAge } from '../src/js/solCalc.js';

describe('SolAge', () => {

    let myAge;

    beforeEach(() => {
      myAge = new SolAge(37, 73);
  
    });

  test('should build myAge object', () => {
    expect(myAge.earthAge).toEqual(37);
    expect(myAge.lifeSpan).toEqual(73);
  });

  test('should calculate how many days are in a year', () =>{
    myAge.earthAge = 1;
    expect(myAge.earthDays(myAge.earthAge)).toEqual(365);
  });

  test('should calculate the age of someone on murcury and thier life expectancy, using earth days', () => {
    expect(myAge.mercuryYears(myAge.earthAge)).toEqual(153);
    expect(myAge.mercuryYears(myAge.lifeSpan)).toEqual(302);
  });

  test('should calculate the age of someone on Venus and thier life expectancy, using earthdays', () => {
    expect(myAge.venusYears(myAge.earthAge)).toEqual(60);
    expect(myAge.venusYears(myAge.lifeSpan)).toEqual(118);
  })

test('should calculate the age of someone on mars and thier life expectancy, using earth days', () => {
  expect(myAge.marsYears(myAge.earthAge)).toEqual(19);
  expect(myAge.marsYears(myAge.lifeSpan)).toEqual(38);
})

test('should calculate the age of someone on Jupiter and thier life expectancy, using earth days', () => {
  expect(myAge.jupiterYears(myAge.earthAge)).toEqual(3);
  expect(myAge.jupiterYears(myAge.lifeSpan)).toEqual(6);
})

test('should calculate the age of someones life expectancy on mercury', () => {
  expect(myAge.mercuryYears(myAge.lifeSpan)).toEqual(302);
})

test('should subract someones age from life expectancy on earth and return the remaining years they have left', () => {
  expect(myAge.lifeSpan - myAge.earthAge).toEqual(36);
})

test('should subtract someones mercury age from their murcury life span', () => {
  expect(myAge.mercuryYears(myAge.lifeSpan) - myAge.mercuryYears(myAge.earthAge)).toEqual(149);
})

test('should subtract someones venus age from their venus life expectancy', () => {
  expect(myAge.venusYears(myAge.lifeSpan) - myAge.venusYears(myAge.earthAge)).toEqual(58);
})

test('should subtract somones mars age from life expectamcy', () => {
  expect(myAge.marsYears(myAge.lifeSpan) - myAge.marsYears(myAge.earthAge)).toEqual(19);
})

test('should subtract someones jupiters age from their life expectancy', () => {
  expect(myAge.jupiterYears(myAge.lifeSpan) - myAge.jupiterYears(myAge.earthAge)).toEqual(3);
})

test('should subtract someones life expectancy, on earth, from their age if they are older than the earths average life expectancy', () => {
  myAge = new SolAge(100, 73);
  expect(myAge.earthAge - myAge.lifeSpan).toEqual(27);
})

test('should subtract someones life expectancy from their age, if theyre older than the life expectancy, depending on the planet', () => {
  myAge = new SolAge(100, 73);
  expect(myAge.mercuryYears(myAge.earthAge) - myAge.mercuryYears(myAge.lifeSpan)).toEqual(112);
  expect(myAge.venusYears(myAge.earthAge) - myAge.venusYears(myAge.lifeSpan)).toEqual(44);
  expect(myAge.marsYears(myAge.earthAge) - myAge.marsYears(myAge.lifeSpan)).toEqual(15);
  expect(myAge.jupiterYears(myAge.earthAge) - myAge.jupiterYears(myAge.lifeSpan)).toEqual(2);
})

test('should determine soneones remaining life', () => {
  myAge = new SolAge(37, 73);
  expect(myAge.remainingEarthYears(37, 73)).toEqual(36);
})

test('should determine how many years someone has passed the average life expecatncy', () => {
  myAge = new SolAge(100, 73);
  expect(myAge.remainingEarthYears(100, 73)).toEqual(27);
})

test('should calculate the age of someones life expectancy on mercury with new function', () => {
  expect(myAge.mercuryYears(remainingEarthYears(37, 73))).toEqual(149);
})

});