let timer = 60;
let randomNumber;
let score = 0;

function scoreIncrease(){
    score += 10;
    document.querySelector("#increaseScore").textContent = score;
}

function hitScore(){
    randomNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hitIncrease").textContent = randomNumber;
}

function makeBubble(){
    let clutter = "";
    for(let i = 1; i <= 80; i++){
        let randomNum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNum}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function decreaseTimer(){
    setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1 class = "over">Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === randomNumber){
        scoreIncrease();
        makeBubble();
        hitScore();
    }
});

decreaseTimer();
makeBubble();
hitScore();

// Make the number of bubbles responsive to window resizing
window.addEventListener("resize", makeBubble);
