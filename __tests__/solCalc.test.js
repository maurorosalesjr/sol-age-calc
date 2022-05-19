import { SolAge } from '../src/js/solCalc.js';

describe('SolAge', () => {

    let earthAge;
    let lifeSpan;
    let myAge;


    beforeEach(() => {
      myAge = new SolAge(37, 73);
    });

  test('should build myAge object', () => {
    expect(myAge.earthAge).toEqual(37);
    expect(myAge.lifeSpan).toEqual(73);
  });

  test('should calculate how many days are in a year', () =>{
    expect(earthYear).toEqual(earthDays === 365);
  })

});