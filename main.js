const myScore$$ = document.querySelector('.score');
const moles$$ = document.querySelectorAll('.mole');
const myBtn$$ = document.querySelector('button');


const hole1$$ = document.querySelector('.hole.hole1');
const hole2$$ = document.querySelector('.hole.hole2');
const hole3$$ = document.querySelector('.hole.hole3');
const hole4$$ = document.querySelector('.hole.hole4');
const hole5$$ = document.querySelector('.hole.hole5');
const hole6$$ = document.querySelector('.hole.hole6');

let totalScore = 0;
let timer = null;
let timeUp = true;
let holes = [hole1$$, hole2$$, hole3$$, hole4$$, hole5$$, hole6$$];

//para darle el evento a cada mole(topo)
for(const hole$$ of holes) {
    hole$$.addEventListener('click', clickMole);
}


function startGame() {
    stopGame();
    timer =  setInterval (moveMole, 1000);
    timeUp = false;
    totalScore = 0;
    updateTotalScore();
    setTimeout(stopGame, 15000); //termian el juego (stopGame) en 15 segundos
}

function randomHole() {
    return Math.floor(Math.random() * 6);
}

function moveMole() {
    for(let hole$$ of holes) {
        hole$$.classList.remove('up');
    }

    holes[randomHole()].classList.add('up');
}

//se quita la class de up cuando lo clicas
function clickMole() {
    if(!timeUp && this.classList.contains('up')) {
        this.classList.remove('up'); 
        sumScore();
    }
      
}

//me suma 1 cada vez que clico al mole
function sumScore() {
   totalScore++;
   updateTotalScore();
}

function updateTotalScore() {
    const score$$ = document.querySelector('.score');
    score$$.textContent = totalScore;
}

function stopGame() {
    if(timer !== null) {
        clearInterval(timer); //el intervalo de arriba en la funcion de comienzo
    }

    for(let hole$$ of holes) {
        hole$$.classList.remove('up');
    }

    timeUp = true;
}

