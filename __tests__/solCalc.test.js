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

  test('should calculate the age of someone on murcury, using earth days', () => {
    expect(myAge.mercuryYears(myAge.earthAge)).toEqual(153);
  });

  test('should calculate the age of someone on Venus, using earthdays', () => {
    expect(myAge.venusYears(myAge.earthAge)).toEqual(60);
  })

test('should calculate the age of someone on mars, using earth days', () => {
  expect(myAge.marsYears(myAge.earthAge)).toEqual(19);
})

});