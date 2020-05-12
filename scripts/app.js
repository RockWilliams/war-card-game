console.log("=== Welcome To War! ===");

// // == User Stories/game logic == //

// User presses start button and the back of the cards appear in the deck pile on each players' sides, below the deck pile there is a count with the number of cards remaining. When the user clicks on their deck, the number remaining goes down, a random card is moved to the card in play "pile", after a second or so the cards values are compared against each other, and moved to the bottom of the winners deck.
// the game ends when one player is out of cards.

// if the cards in play have the same value, then the player and computer must draw THREE more cards and the last card drawn for each will be evaluated for a win

// on click function maybe calls another function to begin
// create card class
// build deck
// deal cards to cpu and player

// on clicking the deck, move card from hand into cards being played, and display it face up
// maybe wait a second or two while displaying the cards in play
// depending on who's card value is higher, move the pair of cards in play to the bottom of the winners deck

// if one hand is 0 then they lose and the game is over

// a stretch goal could be displaying all of the cards in a war instead of just stacking them on the cards in play

// MVP: 4 cards on screen, two representing the cpu and player's hands, and two representing the cards in play
// user is able to press start to begin game, then select the top card of their deck and the card with the higher value wins

const fullDeck = [
    {
        name: "Ace of Spades",
        value: 14,
        suit: "Spades"
    },
    {
        name: "Two of Spades",
        value: 2,
        suit: "Spades"
    },
    {
        name: "Three of Spades",
        value: 3,
        suit: "Spades"
    },
    {
        name: "Four of Spades",
        value: 4,
        suit: "Spades"
    },
    {
        name: "Five of Spades",
        value: 5,
        suit: "Spades"
    },
    {
        name: "Six of Spades",
        value: 6,
        suit: "Spades"
    },
    {
        name: "Seven of Spades",
        value: 7,
        suit: "Spades"
    },
    {
        name: "Eight of Spades",
        value: 8,
        suit: "Spades"
    },
    {
        name: "Nine of Spades",
        value: 9,
        suit: "Spades"
    },
    {
        name: "Ten of Spades",
        value: 10,
        suit: "Spades"
    },
    {
        name: "Jack of Spades",
        value: 11,
        suit: "Spades"
    },
    {
        name: "Queen of Spades",
        value: 12,
        suit: "Spades"
    },
    {
        name: "King of Spades",
        value: 13,
        suit: "Spades"
    },
    {
        name: "Ace of Clubs",
        value: 14,
        suit: "Clubs"
    },
    {
        name: "Two of Clubs",
        value: 2,
        suit: "Clubs"
    },
    {
        name: "Three of Clubs",
        value: 3,
        suit: "Clubs"
    },
    {
        name: "Four of Clubs",
        value: 4,
        suit: "Clubs"
    },
    {
        name: "Five of Clubs",
        value: 5,
        suit: "Clubs"
    },
    {
        name: "Six of Clubs",
        value: 6,
        suit: "Clubs"
    },
    {
        name: "Seven of Clubs",
        value: 7,
        suit: "Clubs"
    },
    {
        name: "Eight of Clubs",
        value: 8,
        suit: "Clubs"
    },
    {
        name: "Nine of Clubs",
        value: 9,
        suit: "Clubs"
    },
    {
        name: "Ten of Clubs",
        value: 10,
        suit: "Clubs"
    },
    {
        name: "Jack of Clubs",
        value: 11,
        suit: "Clubs"
    },
    {
        name: "Queen of Clubs",
        value: 12,
        suit: "Clubs"
    },
    {
        name: "King of Clubs",
        value: 13,
        suit: "Clubs"
    },
    {
        name: "Ace of Diamonds",
        value: 14,
        suit: "Diamonds"
    },
    {
        name: "Two of Diamonds",
        value: 2,
        suit: "Diamonds"
    },
    {
        name: "Three of Diamonds",
        value: 3,
        suit: "Diamonds"
    },
    {
        name: "Four of Diamonds",
        value: 4,
        suit: "Diamonds"
    },
    {
        name: "Five of Diamonds",
        value: 5,
        suit: "Diamonds"
    },
    {
        name: "Six of Diamonds",
        value: 6,
        suit: "Diamonds"
    },
    {
        name: "Seven of Diamonds",
        value: 7,
        suit: "Diamonds"
    },
    {
        name: "Eight of Diamonds",
        value: 8,
        suit: "Diamonds"
    },
    {
        name: "Nine of Diamonds",
        value: 9,
        suit: "Diamonds"
    },
    {
        name: "Ten of Diamonds",
        value: 10,
        suit: "Diamonds"
    },
    {
        name: "Jack of Diamonds",
        value: 11,
        suit: "Diamonds"
    },
    {
        name: "Queen of Diamonds",
        value: 12,
        suit: "Diamonds"
    },
    {
        name: "King of Diamonds",
        value: 13,
        suit: "Diamonds"
    },
    {
        name: "Ace of Hearts",
        value: 14,
        suit: "Hearts"
    },
    {
        name: "Two of Hearts",
        value: 2,
        suit: "Hearts"
    },
    {
        name: "Three of Hearts",
        value: 3,
        suit: "Hearts"
    },
    {
        name: "Four of Hearts",
        value: 4,
        suit: "Hearts"
    },
    {
        name: "Five of Hearts",
        value: 5,
        suit: "Hearts"
    },
    {
        name: "Six of Hearts",
        value: 6,
        suit: "Hearts"
    },
    {
        name: "Seven of Hearts",
        value: 7,
        suit: "Hearts"
    },
    {
        name: "Eight of Hearts",
        value: 8,
        suit: "Hearts"
    },
    {
        name: "Nine of Hearts",
        value: 9,
        suit: "Hearts"
    },
    {
        name: "Ten of Hearts",
        value: 10,
        suit: "Hearts"
    },
    {
        name: "Jack of Hearts",
        value: 11,
        suit: "Hearts"
    },
    {
        name: "Queen of Hearts",
        value: 12,
        suit: "Hearts"
    },
    {
        name: "King of Hearts",
        value: 13,
        suit: "Hearts"
    },
];

class Player {
    constructor(name) {
        this.name = name;
        this.deck = [];
        this.hand = [];
        this.points = 0;
    }
    compareCards(){
        // move cards to cards in play
        const cpuCard = player.deck.shift();
        const playerCard = cpu.deck.shift();

        cpu.hand.push(cpuCard);
        player.hand.push(playerCard);

        console.log("comparing");
        console.log(`Cpu deck length: ${cpu.deck.length}, Player deck length: ${player.deck.length}`);
    }
    clear() {
        let playerTopCard = player.hand.length;
        let cpuTopCard = cpu.hand.length;

        if(cpuTopCard > 0) {
            playerTopCard--;
        }
        if(cpuTopCard > 0) {
            cpuTopCard--;
        }

        let winner = "";

        if(player.hand[playerTopCard].value > cpu.hand[cpuTopCard].value) {
            console.log("player wins!");
            player.points++;
            winner = "player";
        } else if (player.hand[playerTopCard].value < cpu.hand[cpuTopCard].value) {
            console.log("cpu wins!");
            cpu.points++;
            winner = "cpu"
        } else {
            console.log("War!!!");
        }

        if(winner === "player"){
            // let moving = [];

            while(player.hand.length > 0) {
                let card = player.hand.shift();
                player.deck.push(card);
            }
            while(cpu.hand.length > 0) {
                let card = cpu.hand.shift();
                player.deck.push(card);
            }

            console.log(`Player deck: ${player.deck.length} cards`);

            /* for(let i = 0; i < player.hand.length; i++) {
                let card = player.hand.shift();
                player.deck.push(card);

                console.log(`Player deck: ${player.deck.length} cards`);
            } */
        } else if(winner === "cpu"){
            // let moving = [];

            while(player.hand.length > 0) {
                let card = player.hand.shift();
                cpu.deck.push(card);
            }
            while(cpu.hand.length > 0) {
                let card = cpu.hand.shift();
                cpu.deck.push(card);
            }

            /* for(let i = 0; i < cpu.hand.length; i++) {
                let card = player.hand.shift();
                cpu.deck.push(card);
                console.log(`Cpu deck: ${cpu.deck.length} cards`);
            } */
        }
    }
}

const setTimer = () => { // subroutine - constantly runs in background
    let time = 3;
    const timer = setInterval(() => {
        console.log(time);
        if(time === 0){
            clearInterval(timer);
        }
        time--;
    }, 1000);
    if(time === 0) {
        console.log("done")
    }
};

class Card {
    constructor(name,value){
        this.name = name;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
    generateDeck(cardsArr){
        cardsArr.forEach(fullDeck => {
            const card = new Card(fullDeck.name,fullDeck.value);
            this.cards.push(card);
        });
    }
    shuffle() {
        // https://bost.ocks.org/mike/shuffle/ Credit for shuffle algorithm
        let length = this.cards.length;
        let element;
        let index;
        while (length) {
            index = Math.floor(Math.random() * length--);
            element = this.cards[length];
            this.cards[length] = this.cards[index];
            this.cards[index] = element;
        }
    }
    deal() {
        this.shuffle();

        for(let i = 0;i < deck.cards.length;i++) {
            if(i < 26){
                player.deck.push(deck.cards[i]);
            } else {
                cpu.deck.push(deck.cards[i]);
            }
        }
    }
}
/* 
class Game {
    constructors() {

    }
    deal(){
        while()
    }
} */

const player = new Player("rock");
const cpu = new Player("cpu");

const deck = new Deck();
deck.generateDeck(fullDeck);

const $deal = $("#deal");
$deal.on("click",function(event){
    console.log("=== Dealing! ===")
    deck.deal();
});

const $draw = $("#draw");
$draw.on("click",function(event){
    console.log("=== Drawing ===");
    player.compareCards();
});

const $clear = $("#clear");
$clear.on("click",function(event){
    console.log("=== Clearing Hands ===");
    player.clear();
});