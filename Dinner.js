class Dinner {
  constructor(total, rating, split){
    this.rating = rating
    this.total = total
    this.split = split || 0;
  }


  tipper(){

    var tip;
    if (this.rating === 1){
      tip = (.05 * this.total)
    }
    if (this.rating === 2){
      tip = (.10 * this.total)
    }
    if (this.rating === 3){
      tip = (.15 * this.total)
    }
    if (this.rating === 4){
      tip = (.20 * this.total)
    }
    if (this.rating === 5){
      tip = (.25 * this.total)
    }
    return Math.round(100*tip)/100
  }

  splitTotal(){
    var splitTotal = this.total / this.split
    return Math.round(100*splitTotal)/100;
  }

  splitTip(){
    var splitTip = this.tipper() / this.split
    return Math.round(100*splitTip)/100;
  }
}
