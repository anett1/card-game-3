const bcgCollection = ['url(img/bmw.jpg)', 'url(img/mercedes.jpg)', 'url(img/fiat.jpg)'];
const cards = [...document.querySelectorAll('div.cards')];
const paragrafPixels = [...document.querySelectorAll('.cards p')];
const currentResult = document.querySelector('.currentResult span');
const totalResult = document.querySelector('.totalResult span');
const btn = document.querySelector('.btn');

let bcgForCards = [];

let CardIndex;
let bcgIndex;

let currentPoints = '';
let totalPoints = 0;


function resultGame(One, Two, Three) {
    currentResult.textContent = '';

    if (One === Two && One === Three) {

        currentPoints = 200;
        totalPoints = totalPoints + 200;

        currentResult.textContent = `+${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;

    } else if (One !== Two && One !== Three && Two !== Three) {
        currentPoints = -100
        totalPoints = totalPoints - 100;

        currentResult.textContent = `${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;

    } else {
        currentPoints = 100
        totalPoints = totalPoints + 100;

        currentResult.textContent = `+${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;
    }
}


function rotateCards() {
    //animation cards
    if (!this.classList.contains('rotateCards')) {

        this.classList.add('rotateCards');

        CardIndex = cards.indexOf(this);
        paragrafPixels[CardIndex].classList.remove('pixel');

        bcgIndex = Math.floor(Math.random() * bcgCollection.length);
        this.style.backgroundImage = bcgCollection[bcgIndex];

        //result of game
        bcgForCards.push(bcgCollection[bcgIndex]);
        console.log(bcgForCards)
        console.log(bcgForCards[0])
        console.log(bcgForCards[1])
        console.log(bcgForCards[2])

        //points
        if (bcgForCards[0] != undefined && bcgForCards[1] != undefined && bcgForCards[2] != undefined) {
            resultGame(bcgForCards[0], bcgForCards[1], bcgForCards[2]);
        }

    }

    //else {
    //     this.classList.remove('rotateCards');

    //     CardIndex = cards.indexOf(this);
    //     paragrafPixels[CardIndex].classList.add('pixel');

    //     this.style.backgroundImage = 'none';
    // }
}


cards.forEach(card => card.addEventListener('click', rotateCards))


function resetCards() {
    for (card of cards) {
        if (card.classList.contains('rotateCards')) {
            card.classList.remove('rotateCards');

            CardIndex = cards.indexOf(card);
            paragrafPixels[CardIndex].classList.add('pixel');

            card.style.backgroundImage = 'none';
        }
    }
    bcgForCards = [];
    currentResult.textContent = '';
}
btn.addEventListener('click', resetCards);