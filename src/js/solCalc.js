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
      return Math.floor(mercuryYears - this.lifeSpan)
    } else {
      return Math.floor(this.lifeSpan - mercuryYears);
    }
  }

  venusYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 225);
  }
  remainingVenusYears(venusYears) {
    if(venusYears > this.lifeSpan) {
      return Math.floor(venusYears - this.lifeSpan)
    } else {
      return Math.floor(this.lifeSpan - venusYears);
    }
  }
  
  marsYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 687);
  }
  remainingMarsYears(marsYears) {
    if(marsYears > this.lifeSpan) {
      return Math.floor(marsYears - this.lifeSpan)
    } else {
      return Math.floor(this.lifeSpan - marsYears);
    }
  }

  jupiterYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 4333);
  }



}

