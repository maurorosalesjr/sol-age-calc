export class SolAge {
  constructor(earthAge, lifeSpan) {
    this.earthAge = earthAge;
    this.lifeSpan = lifeSpan;//average lifespan for humans on earth is 73 years
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
  
  marsYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 687);
  }

  jupiterYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 4333);
  }



}

