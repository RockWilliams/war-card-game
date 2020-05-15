# Project-0
The game
// == User Stories/game logic == //

User presses start button and the back of the cards appear in the deck pile on each players' sides, below the deck pile there is a count with the number of cards remaining. When the user clicks on their deck, the number remaining goes down, a random card is moved to the card in play "pile", [after a second or so] - changed to a clear button - the cards values are compared against each other, and moved to the bottom of the winners deck. The game ends when one player is out of cards.

Comparing the cards: 
- If the cards in play have the same value, then the player and computer must draw THREE more cards and the last card drawn for each will be evaluated for a win
- Otherwise the card with the highest value wins the battle.

on click function maybe calls another function to begin
create card class
build deck
deal cards to cpu and player

on clicking the deck, move card from hand into cards being played, and display it face up
maybe wait a second or two while displaying the cards in play
depending on who's card value is higher, move the pair of cards in play to the bottom of the winners deck

if one hand is 0 then they lose and the game is over

a stretch goal could be displaying all of the cards in a war instead of just stacking them on the cards in play

MVP: 4 cards on screen, two representing the cpu and player's hands, and two representing the cards in play
user is able to press start to begin game, then select the top card of their deck and the card with the higher value wins