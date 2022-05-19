import { SolAge } from '../src/js/solCalc.js';

describe('SolAge', () => {

    let myAge;
    let earthYears;
    let earthDays;

    beforeEach(() => {
      
  
    });

  test('should build myAge object', () => {
    myAge = new SolAge(37, 73);
    expect(myAge.earthAge).toEqual(37);
    expect(myAge.lifeSpan).toEqual(73);
  });

  test('should calculate how many days are in a year', () =>{
    myAge.earthAge = 1;
    expect(myAge.earthDays(myAge.earthAge)).toEqual(365);
  })

  test('should calculate the age of someone on venus, using earth days')
  expect(10 year old on earth).toEqual(41 year old on venus)//psudocode for commit purposes

});