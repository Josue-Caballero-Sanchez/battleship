import { playerTurn } from "./gameLoop";
import { Battleship, Boat, Carrier, Destroyer, Submarine } from "./ships";

export function startGame(carrier, battleShip, destroyer, submarine, boat){
    let body = document.body;

    while(body.firstChild){
        body.removeChild(body.firstChild);
    }

    body.style.background = "rgb(255, 255, 255)";

    const titleText = document.createElement("h1");
    titleText.innerHTML = "Battleship";
    titleText.classList.add("title-text");
    body.appendChild(titleText);

    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");
    body.appendChild(flexContainer);

    const playerGrid = document.createElement("div");
    playerGrid.classList.add("player-grid");
    flexContainer.appendChild(playerGrid);
    
    for(let i = 0; i < 100; i++){
        const div = document.createElement("div");
        div.classList.add("player-grid-item");
        div.classList.add("player-grid-item" + i);
        playerGrid.appendChild(div);
    }

    const computerGrid = document.createElement("div");
    computerGrid.classList.add("player-grid");
    flexContainer.appendChild(computerGrid);
    
    for(let i = 0; i < 100; i++){
        const div = document.createElement("div");
        div.classList.add("computer-grid-item");
        div.classList.add("computer-grid-item" + i);
        div.addEventListener("click", playerTurn);
        computerGrid.appendChild(div);
    }

    carrier.drawShip();
    battleShip.drawShip();
    destroyer.drawShip();
    submarine.drawShip();
    boat.drawShip();

    createComputerShips();
}


function createComputerShips(){
    let grid = new Array(100).fill("empty");
    let orientation = Math.random() < 0.5;
    let randomArrayIndex = 0;
    let index = Math.floor(Math.random()* 99);
    let size = 4;
    let counter = 0;
    let length = 4;

    for(let i = 0; i < 5; i++){
        orientation = Math.random() < 0.5;
        length = size - i;
        
        if(length === 1 && counter === 0){
            length++;
            counter++;
        }

        if(length === 0 && counter === 1){
            length++;
        }

        while(checkPlacement(orientation, length, index, grid) === false){            
            randomArrayIndex = Math.floor(Math.random() * findEmptyCells(grid).length);
            index = findEmptyCells(grid)[randomArrayIndex];
        }

        const row = Math.floor(index / 10);
        const column = (index % 10);

        if(length === 4){
            createComputerCarrier(grid, orientation, index, row, column);
        }
        else if(length === 3){
            createComputerBattleship(grid, orientation, index, row, column);
        }
        
        else if(length === 2 && counter === 0){
            createComputerDestroyer(grid, orientation, index, row, column);
        }
        else if(length === 2 && counter === 1){
            createComputerSubmarine(grid, orientation, index, row, column);
        }
        else if(length === 1){
            createComputerBoat(grid, orientation, index);
        }
    }

    drawComputerShips(grid);

}

function createComputerCarrier(grid, orientation, index, row, column){
    if(orientation === true){
        let indexes = [];
        for(let i = 0; i < 5; i++){
            let num = index + i;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerCarrier.indexes = indexes;
        mainGame.computerCarrier.orientation = true;

        let coordinates = [
            {row: row - 1, col: column -1},
            {row: row -1, col: column},
            {row: row -1, col: column + 1},
            {row: row -1, col: column + 2},
            {row: row -1, col: column + 3},
            {row: row -1, col: column + 4},
            {row: row -1, col: column + 5},
            {row: row, col: column + 5},
            {row: row +1, col: column + 5},
            {row: row +1, col: column + 4},
            {row: row +1, col: column + 3},
            {row: row +1, col: column + 2},
            {row: row +1, col: column + 1},
            {row: row +1, col: column},
            {row: row +1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

    else{
        let indexes = [];
        for(let i = 0; i < 5; i++){
            let num = index + i * 10;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerCarrier.indexes = indexes;
        mainGame.computerCarrier.orientation = false;

        let coordinates = [
            {row: row - 1, col: column - 1},
            {row: row - 1, col: column},
            {row: row - 1, col: column + 1},
            {row: row, col: column + 1},
            {row: row + 1, col: column + 1},
            {row: row + 2, col: column + 1},
            {row: row + 3, col: column + 1},
            {row: row + 4, col: column + 1},
            {row: row + 5, col: column + 1},
            {row: row + 5, col: column},
            {row: row + 5, col: column - 1},
            {row: row + 4, col: column - 1},
            {row: row + 3, col: column - 1},
            {row: row + 2, col: column - 1},
            {row: row + 1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

}

function createComputerBattleship(grid, orientation, index, row, column){
    if(orientation === true){
        let indexes = [];
        for(let i = 0; i < 4; i++){
            let num = index + i;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerBattleship.indexes = indexes;
        mainGame.computerBattleship.orientation = true;

        let coordinates = [
            {row: row - 1, col: column -1},
            {row: row -1, col: column},
            {row: row -1, col: column + 1},
            {row: row -1, col: column + 2},
            {row: row -1, col: column + 3},
            {row: row -1, col: column + 4},
            {row: row, col: column + 4},
            {row: row +1, col: column + 4},
            {row: row +1, col: column + 3},
            {row: row +1, col: column + 2},
            {row: row +1, col: column + 1},
            {row: row +1, col: column},
            {row: row +1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

    else{
        let indexes = [];
        for(let i = 0; i < 4; i++){
            let num = index + i * 10;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerBattleship.indexes = indexes;
        mainGame.computerBattleship.orientation = false;

        let coordinates = [
            {row: row - 1, col: column - 1},
            {row: row - 1, col: column},
            {row: row - 1, col: column + 1},
            {row: row, col: column + 1},
            {row: row + 1, col: column + 1},
            {row: row + 2, col: column + 1},
            {row: row + 3, col: column + 1},
            {row: row + 4, col: column + 1},
            {row: row + 4, col: column},
            {row: row + 4, col: column - 1},
            {row: row + 3, col: column - 1},
            {row: row + 2, col: column - 1},
            {row: row + 1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

}

function createComputerDestroyer(grid, orientation, index, row, column){
    if(orientation === true){
        let indexes = [];
        for(let i = 0; i < 3; i++){
            let num = index + i;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerDestroyer.indexes = indexes;
        mainGame.computerDestroyer.orientation = true;

        let coordinates = [
            {row: row - 1, col: column -1},
            {row: row -1, col: column},
            {row: row -1, col: column + 1},
            {row: row -1, col: column + 2},
            {row: row -1, col: column + 3},
            {row: row, col: column + 3},
            {row: row +1, col: column + 3},
            {row: row +1, col: column + 2},
            {row: row +1, col: column + 1},
            {row: row +1, col: column},
            {row: row +1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

    else{
        let indexes = [];
        for(let i = 0; i < 3; i++){
            let num = index + i * 10;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerDestroyer.indexes = indexes;
        mainGame.computerDestroyer.orientation = false;

        let coordinates = [
            {row: row - 1, col: column - 1},
            {row: row - 1, col: column},
            {row: row - 1, col: column + 1},
            {row: row, col: column + 1},
            {row: row + 1, col: column + 1},
            {row: row + 2, col: column + 1},
            {row: row + 3, col: column + 1},
            {row: row + 3, col: column},
            {row: row + 3, col: column - 1},
            {row: row + 2, col: column - 1},
            {row: row + 1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }
}

function createComputerSubmarine(grid, orientation, index, row, column){
    if(orientation === true){
        let indexes = [];
        for(let i = 0; i < 3; i++){
            let num = index + i;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerSubmarine.indexes = indexes;
        mainGame.computerSubmarine.orientation = true;

        let coordinates = [
            {row: row - 1, col: column -1},
            {row: row -1, col: column},
            {row: row -1, col: column + 1},
            {row: row -1, col: column + 2},
            {row: row -1, col: column + 3},
            {row: row, col: column + 3},
            {row: row +1, col: column + 3},
            {row: row +1, col: column + 2},
            {row: row +1, col: column + 1},
            {row: row +1, col: column},
            {row: row +1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }

    else{
        let indexes = [];
        for(let i = 0; i < 3; i++){
            let num = index + i * 10;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerSubmarine.indexes = indexes;
        mainGame.computerSubmarine.orientation = false;

        let coordinates = [
            {row: row - 1, col: column - 1},
            {row: row - 1, col: column},
            {row: row - 1, col: column + 1},
            {row: row, col: column + 1},
            {row: row + 1, col: column + 1},
            {row: row + 2, col: column + 1},
            {row: row + 3, col: column + 1},
            {row: row + 3, col: column},
            {row: row + 3, col: column - 1},
            {row: row + 2, col: column - 1},
            {row: row + 1, col: column - 1},
            {row: row, col: column - 1},
        ];

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                grid[index] = "spacer";
            }
        }
    }
}

function createComputerBoat(grid, orientation, index){
    if(orientation === true){
        let indexes = [];
        for(let i = 0; i < 2; i++){
            let num = index + i;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerBoat.indexes = indexes;
        mainGame.computerBoat.orientation = true;
    }

    else{
        let indexes = [];
        for(let i = 0; i < 2; i++){
            let num = index + i * 10;
            indexes.push(num);
            grid[num] = "ship";
        }

        mainGame.computerBoat.indexes = indexes;
        mainGame.computerBoat.orientation = false;
    }
}

function checkPlacement(orientation, length, index, grid){
    const row = Math.floor(index / 10);
    const column = (index % 10);

    const endIndex = index + length;

    if(endIndex > 99){
        return false
    }

    else if(column > 5 && orientation === true && length === 4 || row > 5 && orientation === false && length === 4){
        return false;
    }
    else if(column > 6 && orientation === true && length === 3 || row > 6 && orientation === false && length === 3){
        return false;
    }
    else if(column > 7 && orientation === true && length === 2 || row > 7 && orientation === false && length === 2){
        return false;
    }
    else if(column > 8 && orientation === true && length === 1 || row > 8 && orientation === false && length === 1){
        return false
    }

    else if(length === 3 && orientation === true){
        let number = index -1;
        for(let i = 0; i < 4; i++){
            number++;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }
    else if(length === 3 && orientation === false){
        let number = index -10;
        for(let i = 0; i < 4; i++){
            number = number + 10;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }

    else if(length === 2 && orientation === true){
        let number = index -1;
        for(let i = 0; i < 3; i++){
            number++;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }
    else if(length === 2 && orientation === false){
        let number = index -10;
        for(let i = 0; i < 3; i++){
            number = number + 10;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }

    else if(length === 1 && orientation === true){
        let number = index -1;
        for(let i = 0; i < 2; i++){
            number++;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }
    else if(length === 1 && orientation === false){
        let number = index -10;
        for(let i = 0; i < 2; i++){
            number = number + 10;
            let square = grid[number];
            if(square === "spacer" || square === "ship"){
                return false;
            }
        }
    }

    return true;

}

function drawComputerShips(grid){
    for(let i = 0; i < grid.length; i++){
        if(grid[i] === "ship"){
            let square = document.querySelector(".computer-grid-item" + i);
            square.classList.add("ship");
        }
    }
}

function findEmptyCells(grid){
    let emptyCells = []
    for(let i = 0; i < grid.length; i++){
        if(grid[i] === "empty"){
            emptyCells.push(i);
        }
    }

    return emptyCells;
}

export const mainGame = (() =>{
    let computerCarrier = new Carrier();
    let computerBattleship = new Battleship();
    let computerDestroyer = new Destroyer();
    let computerSubmarine = new Submarine();
    let computerBoat = new Boat();

    return {
        computerCarrier: computerCarrier,
        computerBattleship: computerBattleship,
        computerDestroyer: computerDestroyer,
        computerSubmarine: computerSubmarine,
        computerBoat: computerBoat
    };
})();