export class SolAge {
  constructor(earthAge, lifeSpan) {
    this.earthAge = earthAge;
    this.lifeSpan = lifeSpan;//average lifespan for humans on earth is 73 years
  }

  earthDays(earthYears) {
    let output = parseInt(earthYears) * 365;
    return output;
  }   

  remainingEarthYears(earthYears){
    if(earthYears > this.lifeSpan){
      return Math.floor(earthYears - this.lifeSpan)
    } else {
      return Math.floor(this.lifeSpan - earthYears);
    }
  }

  mercuryYears(earthYears){
    return Math.floor(this.earthDays(earthYears) / 88);
  }
  remainingMercuryYears(mercuryYears) {
    if(mercuryYears > this.lifeSpan) {
      return Math.floor(mercuryYears) - Math.floor(this.lifeSpan)
    } else {
      return Math.floor(this.lifeSpan) - Math.floor(mercuryYears);
    }
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

