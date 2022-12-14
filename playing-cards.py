## In an Amazon interview they asked Poker Hands question
## Write a program that detects flush, two of a kind, three of a kind, full house ect.

flush = ['A1', 'A2', 'A3', 'A4', 'A5']



class Card:
  def __init__(self, card_string):
    self.suit = card_string[0]
    self.value = card_string[1]
  
  def print_card(self):
    print(self.suit + self.value)

class Hand:
  def __init__(self, hand_string):
    self.cards = []
    self.numDict = {}
    self.__create_hand(hand_string)

  def __create_hand(self, hand_string):
    for card in hand_string:
      self.cards.append(Card(card))
      ## create dictionary with numbers
      

  def print_hand(self):
    for card in self.cards:
      card.print_card() 

  def is_flush(self):
    first_suit = None
    for i in range(len(self.cards)):
      if i == 0:
        card = self.cards[i]
        first_suit = card.suit
      else: 
        if first_suit != card.suit:
          return False
    
    return True  

hand_flush = Hand(flush)
hand_flush.print_hand()
print(hand_flush.is_flush())
