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
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png"
    },
    {
        name: "Two of Spades",
        value: 2,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png"
    },
    {
        name: "Three of Spades",
        value: 3,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png"
    },
    {
        name: "Four of Spades",
        value: 4,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png"
    },
    {
        name: "Five of Spades",
        value: 5,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png"
    },
    {
        name: "Six of Spades",
        value: 6,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png"
    },
    {
        name: "Seven of Spades",
        value: 7,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png"
    },
    {
        name: "Eight of Spades",
        value: 8,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png"
    },
    {
        name: "Nine of Spades",
        value: 9,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png"
    },
    {
        name: "Ten of Spades",
        value: 10,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png"
    },
    {
        name: "Jack of Spades",
        value: 11,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png"
    },
    {
        name: "Queen of Spades",
        value: 12,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png"
    },
    {
        name: "King of Spades",
        value: 13,
        suit: "Spades",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png"
    },
    {
        name: "Ace of Clubs",
        value: 14,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png"
    },
    {
        name: "Two of Clubs",
        value: 2,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png"
    },
    {
        name: "Three of Clubs",
        value: 3,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png"
    },
    {
        name: "Four of Clubs",
        value: 4,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png"
    },
    {
        name: "Five of Clubs",
        value: 5,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png"
    },
    {
        name: "Six of Clubs",
        value: 6,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png"
    },
    {
        name: "Seven of Clubs",
        value: 7,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png"
    },
    {
        name: "Eight of Clubs",
        value: 8,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png"
    },
    {
        name: "Nine of Clubs",
        value: 9,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png"
    },
    {
        name: "Ten of Clubs",
        value: 10,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png"
    },
    {
        name: "Jack of Clubs",
        value: 11,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png"
    },
    {
        name: "Queen of Clubs",
        value: 12,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png"
    },
    {
        name: "King of Clubs",
        value: 13,
        suit: "Clubs",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png"
    },
    {
        name: "Ace of Diamonds",
        value: 14,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png"
    },
    {
        name: "Two of Diamonds",
        value: 2,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png"
    },
    {
        name: "Three of Diamonds",
        value: 3,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png"
    },
    {
        name: "Four of Diamonds",
        value: 4,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png"
    },
    {
        name: "Five of Diamonds",
        value: 5,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png"
    },
    {
        name: "Six of Diamonds",
        value: 6,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png"
    },
    {
        name: "Seven of Diamonds",
        value: 7,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png"
    },
    {
        name: "Eight of Diamonds",
        value: 8,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/800px-Playing_card_diamond_8.svg.png"
    },
    {
        name: "Nine of Diamonds",
        value: 9,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/800px-Playing_card_diamond_9.svg.png"
    },
    {
        name: "Ten of Diamonds",
        value: 10,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/800px-Playing_card_diamond_10.svg.png"
    },
    {
        name: "Jack of Diamonds",
        value: 11,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/800px-Playing_card_diamond_J.svg.png"
    },
    {
        name: "Queen of Diamonds",
        value: 12,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/800px-Playing_card_diamond_Q.svg.png"
    },
    {
        name: "King of Diamonds",
        value: 13,
        suit: "Diamonds",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/800px-Playing_card_diamond_K.svg.png"
    },
    {
        name: "Ace of Hearts",
        value: 14,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png"
    },
    {
        name: "Two of Hearts",
        value: 2,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/800px-Playing_card_heart_2.svg.png"
    },
    {
        name: "Three of Hearts",
        value: 3,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/800px-Playing_card_heart_3.svg.png"
    },
    {
        name: "Four of Hearts",
        value: 4,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/800px-Playing_card_heart_4.svg.png"
    },
    {
        name: "Five of Hearts",
        value: 5,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/800px-Playing_card_heart_5.svg.png"
    },
    {
        name: "Six of Hearts",
        value: 6,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/800px-Playing_card_heart_6.svg.png"
    },
    {
        name: "Seven of Hearts",
        value: 7,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/800px-Playing_card_heart_7.svg.png"
    },
    {
        name: "Eight of Hearts",
        value: 8,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/800px-Playing_card_heart_8.svg.png"
    },
    {
        name: "Nine of Hearts",
        value: 9,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/800px-Playing_card_heart_9.svg.png"
    },
    {
        name: "Ten of Hearts",
        value: 10,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/800px-Playing_card_heart_10.svg.png"
    },
    {
        name: "Jack of Hearts",
        value: 11,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/800px-Playing_card_heart_J.svg.png"
    },
    {
        name: "Queen of Hearts",
        value: 12,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/800px-Playing_card_heart_Q.svg.png"
    },
    {
        name: "King of Hearts",
        value: 13,
        suit: "Hearts",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/800px-Playing_card_heart_K.svg.png"
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

        let playerTopCard = player.hand.length-1;
        let cpuTopCard = cpu.hand.length-1;

        cpu.hand.push(cpuCard);
        player.hand.push(playerCard);

        $(".cpu__pic").attr("src", cpu.hand[cpu.hand.length-1].pic);
        $(".player__pic").attr("src", player.hand[player.hand.length-1].pic);

        $(".cpu__pic").css("display","block");
        $(".player__pic").css("display","block");

        console.log("Cpu Card:");
        console.log(cpu.hand[cpu.hand.length-1]);
        console.log("Player Card:");
        console.log(player.hand[player.hand.length-1]);
        console.log(`Cpu deck length: ${cpu.deck.length}, Player deck length: ${player.deck.length}`);

        $(".player__score").text(`Cards in player's deck: ${player.deck.length}`);
        $(".cpu__score").text(`Cards in cpu's deck: ${cpu.deck.length}`);
    }

    clear() {

        $(".cpu__pic").css("display","none");
        $(".player__pic").css("display","none");

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
            winner = "cpu";
        } else if(player.hand[playerTopCard].value === cpu.hand[cpuTopCard].value) {
            console.log("=== Prepare For War!! ===");
            player.compareCards();
            player.compareCards();
            player.compareCards();
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

            console.log(`Player deck: ${cpu.deck.length} cards`);

            /* for(let i = 0; i < cpu.hand.length; i++) {
                let card = player.hand.shift();
                cpu.deck.push(card);
                console.log(`Cpu deck: ${cpu.deck.length} cards`);
            } */
        }

        $(".player__score").text(`Cards in player's deck: ${player.deck.length}`);
        $(".cpu__score").text(`Cards in cpu's deck: ${cpu.deck.length}`);

    }
}

const isGameOver = () => {
    if(player.deck.length === 0) {
        return alert("Cpu Won the War");
        $(".player__deck__back").css("display","none");
        $(".cpu__deck__back").css("display","none");
    } else if(cpu.deck.length === 0) {
        return alert("Player Won the War");
        $(".player__deck__back").css("display","none");
        $(".cpu__deck__back").css("display","none");
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
    constructor(name,value,suit,pic){
        this.name = name;
        this.value = value;
        this.suit = suit;
        this.pic = pic;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
    generateDeck(cardsArr){
        cardsArr.forEach(fullDeck => {
            const card = new Card(fullDeck.name,fullDeck.value,fullDeck.suit,fullDeck.pic);
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

        $(".player__deck__back").css("display","block");
        $(".cpu__deck__back").css("display","block");
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
    player.deck = [];
    cpu.deck = [];
    console.log("=== Dealing! ===")
    deck.deal();
});

const $draw = $("#draw");
$draw.on("click",function(event){
    isGameOver();
    console.log("=== Drawing ===");
    player.compareCards();
});

const $clear = $("#clear");
$clear.on("click",function(event){
    
    console.log("=== Clearing Hands ===");
    player.clear();
    isGameOver();
});

const $instructions = $("#instructions");
$instructions.on("click",function(event){
    $(".instructions").toggle();
});