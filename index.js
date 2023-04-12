function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

let diceNumber1 = getRandomNumber(1, 6);
let diceImg1 = `dice${diceNumber1}.png`;
let diceSource1 = `images/${diceImg1}`;

let player1 = document.querySelector(".img1");

player1.setAttribute("src", diceSource1);

let diceNumber2 = getRandomNumber(1, 6);
let diceImg2 = `dice${diceNumber2}.png`;
let diceSource2 = `images/${diceImg2}`;

let player2 = document.querySelector(".img2");

player2.setAttribute("src", diceSource2);

if (diceNumber1 > diceNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (diceNumber1 < diceNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!!";
}
