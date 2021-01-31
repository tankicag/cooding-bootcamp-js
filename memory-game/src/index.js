const cardArray = [
  {
    name: "fries",
    img: "src/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/img/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "src/img/hotdog.png",
  },
  {
    name: "fries",
    img: "src/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/img/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "src/img/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
    cards[optionOneId].setAttribute("src", "src/img/blank.png");
    cards[optionTwoId].setAttribute("src", "src/img/blank.png");
  } else if (cardChosen[0] === cardChosen[1]) {
    alert("You have found a match!");
    cards[optionOneId].setAttribute("src", "src/img/white.png");
    cards[optionTwoId].setAttribute("src", "src/img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "src/img/blank.png");
    cards[optionTwoId].setAttribute("src", "src/img/blank.png");
    alert("Sorry, tray again");
  }

  cardChosen = [];
  cardChosenId = [];
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length / 2){
      resultDisplay.textContent = 'Congratulation! You have won!'
  }
}

createBoard();
