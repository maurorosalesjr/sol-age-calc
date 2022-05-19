import solAge from '../src/js/solCalc.js';

describe('solAge', () => {

  test('should build solAge contructer', () => {
    const solAge = new solAge(earthAge, lifeSpan);
    expect(this.earthAge).toEqual(earthAge);
    expect(this.lifeSpan).toEqual(lifeSpan);
  });

  

});