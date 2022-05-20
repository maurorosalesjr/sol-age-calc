export class SolAge {
  constructor(earthAge, lifeSpan) {
    this.earthAge = earthAge;
    this.lifeSpan = lifeSpan;

  }

  earthDays(earthYears) {
    let output = parseInt(earthYears) * 365;
    return output;
  }   

  mercuryYears(earthYears){
    return Math.floor(this.earthDays(earthYears) / 88);
  }
  
  venusYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 225);
  }
  
};

//business logic