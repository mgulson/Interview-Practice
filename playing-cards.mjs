// In an Amazon interview they asked Poker Hands question
// Write a program that detects flush, two of a kind, three of a kind, full house ect.

class Card {
  constructor(card) {
    this.suit = card[0]
    this.number = card[1]
  }

  printCard() {
    return console.log(this.suit + this.number)
  }
}

class Hand {

  constructor(hand){
    this.cards = hand.map((card) => new Card(card))
    this.suitObj = {}
    this.numObj = {}
    this.#setSuits()
    this.#setNumbers()
  }

  printHand() {
    this.cards.map((card) => card.printCard())
  }
  
  #setSuits() {
    this.cards.map((card) => {
      if (this.suitObj[card.suit]) {
        this.suitObj[card.suit] = this.suitObj[card.suit] + 1
      } else {
        this.suitObj[card.suit] = 1
      }
    })
  }

  #setNumbers() {
    this.cards.map((card) => {
      if (this.numObj[card.number]) {
        this.numObj[card.number] = this.numObj[card.number] + 1
      } else {
        this.numObj[card.number] = 1
      }
    })
  }

  isFlush() {
    for(const property in this.suitObj) {
      if(this.suitObj[property] == 5){
        return true
      }
    }
    return false
  }

  isTwoKind() {
    for(const property in this.numObj) {
      if(this.numObj[property] == 2){
        return true
      }
    }
    return false
  }

}


const flush = ['A1', 'A2', 'A3', 'A4', 'A5']
const twoKind = ['A1', 'B1', 'C2', 'D3', 'F4']

let flushHand = new Hand(flush)
flushHand.printHand
console.log('suitOb', flushHand.suitObj)
console.log('numObj', flushHand.numObj)
console.log('isFlush', flushHand.isFlush())
console.log('isTwoOfAKind', flushHand.isTwoKind())

let twoKindHand = new Hand(twoKind)
console.log('isTwoOfAKind', twoKindHand.isTwoKind())