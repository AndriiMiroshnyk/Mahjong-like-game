"use strict";

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let primeNumArray = [2, 2, 3, 3, 5, 5, 7, 7, 11, 11, 13, 13, 17, 17, 19, 19, 23, 23, 29, 29, 31, 31, 37, 37, 41, 41, 43, 43, 47, 47];

shuffle(primeNumArray);

let cardValues = [];

const sleepNow = (delay) => new Promise ((resolve) => setTimeout (resolve, delay));

async function displayCard(text) {
    for (let i = 0; i < cardValues.length; i++) {
        for (let k = i + 1; k < cardValues.length; k++) {
            if (cardValues[i] !== cardValues[k]) {
                await sleepNow(1000);
                text.style.display = "none";
            }
            cardValues = [];
        }
    }
}

for (let i = 0; i < 30; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.className = "card";
    wrapper.appendChild(div);
    p.className = "text";
    p.innerHTML = primeNumArray[i];
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener('click', () => {
        p.style.display = "block";
        cardValues.push(div.textContent);
        console.log(cardValues);
        displayCard(p);
    });
}

// const cardList = document.querySelectorAll(".card");
// console.log(cardList);

// for (let cardIndex = 0; cardIndex < cardList.length; cardIndex++) {
//     let value = cardList[cardIndex].textContent;
//     console.log(value);
// }