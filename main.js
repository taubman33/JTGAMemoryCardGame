//the cards

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts", 
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit:"diamonds", 
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

//starts score counter at 0
var counter = 0;


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
//adds 1 to score Counter if a match was found - JT		
    	counter += 1;
    	document.getElementById('counter').innerHTML = counter;
//changes medal (bronze, silver, gold) based on score -JT
    	if (counter >=1) {
   			rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/LXgQLMq.png" class="medal" title="Bronze Medal" alt="Bronze Medal">';
    	}

    	if (counter >=2) {
    		rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/6zCt0xe.png" class="medal" title="Silver Medal" alt="Silver Medal">';
    	};
    	if (counter >= 5) {
    		rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/143rs3f.png" class="medal" title="Gold Medal" alt="Gold Medal">';
    	};
	}
	else {
		alert("Sorry, try again!");
	}
};



var flipCard = function () {
//if statement only applies flipCard function if the card clicked has not been flipped  already flipped -JT
	if (this.getAttribute('class') === "unflipped") {
		var cardId = this.getAttribute('data-id');

		console.log("User flipped " + cards[cardId].rank);

		cardsInPlay.push(cards[cardId].rank);

		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);

		this.setAttribute('src', cards[cardId].cardImage);
		this.setAttribute('class', 'flipped');

		if (cardsInPlay.length === 2) {
			checkForMatch();
		}
	}
	else {
		return alert("Please click on an unflipped card.");
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'unflipped');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

//resets the cards
var reset = function () {
    for (var i = (cardsInPlay.length - 1); i > -1; i--) {
		document.querySelectorAll('.flipped')[i].setAttribute('src', 'images/back.png');
		document.querySelectorAll('.flipped')[i].setAttribute('class', 'unflipped');
		cardsInPlay.splice(i, 1);
  	};
  	console.log("User reset the game!");
};

//applies reset functionality to "reset" button
document.getElementById('reset').addEventListener('click', reset);

//resets the score, rank, and cards
var resetScore = function() {
//score reset 
	counter = 0;
	document.getElementById('counter').innerHTML = counter;
//rank reset -
	rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/LXgQLMq.png" class="medal" title="Bronze Medal" alt="Bronze Medal">';
//cards reset
	reset();
};

//applies resetScore functionality to "reset" button
document.getElementById('resetScore').addEventListener('click', resetScore);