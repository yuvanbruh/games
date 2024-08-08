let score = 0;
let cross = true;

const audio = new Audio('music.mp3');
const audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    const dino = document.querySelector('.dino');
    if (e.keyCode == 38) {
        jump();
    }
    if (e.keyCode == 39) {
        moveRight();
    }
    if (e.keyCode == 37) {
        moveLeft();
    }
}

document.getElementById('jumpBtn').addEventListener('click', jump);
document.getElementById('rightBtn').addEventListener('click', moveRight);
document.getElementById('leftBtn').addEventListener('click', moveLeft);

function jump() {
    const dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino');
    }, 700);
}

function moveRight() {
    const dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 112 + "px";
}

function moveLeft() {
    const dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX - 112) + "px";
}

setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');

    const dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    const ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    const scoreCont = document.getElementById("scoreCount");
    scoreCont.innerHTML = "Your Score: " + score;
}
