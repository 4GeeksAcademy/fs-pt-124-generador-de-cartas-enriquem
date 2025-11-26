import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variables
const palo = [`♦`, `♥`, `♠`, `♣`]
const valorCard = [`A`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`]
const color = [`text-danger`, `text-dark`]
const firstDiv = document.querySelector(`div`)
const topNumber = document.createElement(`div`)
const midNumber = document.createElement(`div`)
const botNumber = document.createElement(`div`)


// funciones
const randomNumber = arr => arr[Math.floor(Math.random()*arr.length)]

const colorByPalo = (palo) => {
  return palo === `♥` || palo === `♦` ? `text-danger` : `text-dark`
} 

console.log(randomNumber(valorCard))




//Eventos
firstDiv.id = `card`;

topNumber.id = `topNumber`
topNumber.innerHTML = randomNumber(palo);
topNumber.classList = colorByPalo(topNumber.innerHTML)
firstDiv.appendChild(topNumber)

midNumber.id = `midNumber`
midNumber.innerHTML = randomNumber(valorCard);
firstDiv.appendChild(midNumber)

botNumber.id = `botNumber`
botNumber.innerHTML = topNumber.innerHTML
botNumber.classList = topNumber.classList
firstDiv.appendChild(botNumber)



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};