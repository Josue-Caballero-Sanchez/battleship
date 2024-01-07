import { mainGame } from "./game";
import { main } from ".";

export function playerTurn(e){
    if(e.target.classList[2] === "clicked" || e.target.classList[3] === "clicked"){
        return
    }

    if(e.target.classList[2] !== "ship"){
        e.target.innerHTML = "&#x2022;";
        e.target.style.backgroundColor = "rgb(133, 255, 179)";
        e.target.classList.add("clicked");
    }

    else if(e.target.classList[2] === "ship"){
        e.target.innerHTML = "x";
        e.target.style.backgroundColor = "rgb(255, 133, 133)";
        e.target.classList.add("clicked");

        let className = e.target.classList[1];
        let index = className.match(/\d+$/)[0];
        let hitShip = findComputerShip(index);

        hitShip.computerHit();
    }
    if(!checkWin()){
        computerTurn();
    }
    
}

function findComputerShip(index){
    index = parseInt(index);

    if(mainGame.computerCarrier.indexes.includes(index)){
        return mainGame.computerCarrier;
    }

    else if(mainGame.computerBattleship.indexes.includes(index)){
        return mainGame.computerBattleship;
    }

    else if(mainGame.computerDestroyer.indexes.includes(index)){
        return mainGame.computerDestroyer;
    }

    else if(mainGame.computerSubmarine.indexes.includes(index)){
        return mainGame.computerSubmarine;
    }

    else{
        return mainGame.computerBoat;
    }
}

function findPlayerShip(index){
    index = parseInt(index);

    if(main.carrier.indexes.includes(index)){
        return main.carrier;
    }

    else if(main.battleShip.indexes.includes(index)){
        return main.battleShip;
    }

    else if(main.destroyer.indexes.includes(index)){
        return main.destroyer;
    }

    else if(main.submarine.indexes.includes(index)){
        return main.submarine;
    }

    else{
        return main.boat;
    }
}

function computerTurn(){
    let randomArrayIndex = Math.floor(Math.random() * findEmptyCells().length);
    let index = findEmptyCells()[randomArrayIndex];
    let gridItem = document.querySelector(".player-grid-item" + index);

    if(gridItem.classList[2] !== "ship"){
        gridItem.innerHTML = "&#x2022;";
        gridItem.style.backgroundColor = "rgb(133, 255, 179)";
        gridItem.classList.add("clicked");
    }

    else if(gridItem.classList[2] === "ship"){
        gridItem.innerHTML = "x";
        gridItem.style.backgroundColor = "rgb(255, 133, 133)";
        gridItem.style.border = "solid black 1px";
        gridItem.classList.add("clicked");

        let hitShip = findPlayerShip(index);
        hitShip.playerHit();
    }
    checkWin();
}

function findEmptyCells(){
    let emptyCells = []
   
    for(let i = 0; i < 100; i++){
        let gridName = ".player-grid-item" + i;
        let gridItem = document.querySelector(gridName);
        if(gridItem.classList[2] !== "clicked" && gridItem.classList[3] !== "clicked"){
            emptyCells.push(i);
        }
    }

    return emptyCells;
}

function checkWin(){
    if(mainLoop.playerShips === 0){
        alert("You Lose!");
        location.reload();
        return true;
   }
   else if(mainLoop.computerShips === 0){
        alert("You Win!");
        location.reload();
        return true;
   }

   return false;
}


export const mainLoop = (() =>{
    let playerShips = 5;
    let computerShips = 5;

    return {
        playerShips: playerShips,
        computerShips: computerShips
    };
})();