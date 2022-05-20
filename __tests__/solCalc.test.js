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


});