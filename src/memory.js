class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
    shuffleCards(cards) {
      if(!this.cards){
        return undefined
      }
      for(let i = 0; i < this.cards.length; i++){
          let random = Math.floor(Math.random() * i)
          let temp = this.cards[i]
          this.cards[i] = this.cards[random]//switching positions with temp
          this.cards[random] = temp//switching positions with random
      }
      return this.cards
    }
//could have also been cards, without this, b/c we're passing in a parameter
  checkIfPair(card1, card2){
    this.pairsClicked++;
    if (card1===card2){
      this.pairsGuessed++;
        return true;
    }
        return false;
  }
  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }else{
       return false;
    }
  }
}
//CheckIfFinished Notes:
//check if pairsGuessed = 12 (true/false)
//if true, end the game
//if false, do not end the game