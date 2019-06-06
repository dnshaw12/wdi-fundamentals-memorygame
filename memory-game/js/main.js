var cards = [
{
rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage:"images/king-of-diamonds.png"
},
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}
}

function flipCard() {
	const cardID = this.getAttribute('data-id')
	this.setAttribute('src',cards[cardID].cardImage)
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit)
	console.log(cards[cardID].cardImage)
	checkForMatch()
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click',flipCard);
}
}

createBoard();