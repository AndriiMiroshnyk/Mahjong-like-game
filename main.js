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
let cardId = [];

const sleepNow = (delay) => new Promise ((resolve) => setTimeout (resolve, delay));

async function checkCard(text) {
    for (let i = 0; i < cardValues.length; i++) {
        const elId = text.id;
        cardId.push(elId);
        console.log(cardId);
        for (let k = i + 1; k < cardValues.length; k++) {
            if (cardValues[i] !== cardValues[k]) {
                await sleepNow(1000);
                for (let item = 0; item < cardId.length; item++) {
                    let el = document.getElementById(cardId[item]);
                    console.log(el);
                    if (cardId.includes(elId)) {
                        el.style.display = "none";
                    }
                }
            }
            cardValues = [];
            cardId = [];
        }
    }
}

function Game() {
    for (let i = 0; i < 30; i++) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let btn = document.querySelector(".btn");
        div.className = "card";
        wrapper.appendChild(div);
        p.className = "text";
        p.id = i;
        p.innerHTML = primeNumArray[i];
        div.appendChild(p);
        btn.addEventListener('click', () => {
            p.style.display = "none";
            btn.style.display = "none";
        });
        div.addEventListener('click', () => {
            p.style.display = "block";
            cardValues.push(div.textContent);
            console.log(cardValues);
            checkCard(p);
        });
    }
}

Game();
