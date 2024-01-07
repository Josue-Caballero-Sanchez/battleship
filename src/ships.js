import { mainLoop } from "./gameLoop";

export class Ship{
    constructor(){
        this.indexes = [];
        this.orientation = true;
    }

    drawShip(){
        for(let i = 0; i < this.indexes.length; i++){
            let name = ".player-grid-item" + this.indexes[i];
            let square = document.querySelector(name);
            square.style.backgroundColor = "rgb(68, 68, 68)";
            square.style.border = "none";
            square.classList.add("ship");
        }
    }

    computerHit(){
        this.computerHits = this.computerHits -1;
        if(this.computerHits === 0){
            this.computerSunk();
            mainLoop.computerShips = mainLoop.computerShips -1;
        } 
    }

    playerHit(){
        this.playerHits = this.playerHits -1;
        if(this.playerHits === 0){
            this.playerSunk();
            mainLoop.playerShips = mainLoop.playerShips -1;
        }
    }

    
}

export class Carrier extends Ship{
    constructor(){
        super();
        this.computerHits = 5;
        this.playerHits = 5;
    }

    computerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".computer-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".computer-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }

    playerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".player-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".player-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }
}

export class Battleship extends Ship{
    constructor(){
        super();
        this.computerHits = 4;
        this.playerHits = 4;
    }

    computerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".computer-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".computer-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }

    playerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".player-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".player-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }
}

export class Destroyer extends Ship{
    constructor(){
        super();
        this.computerHits = 3;
        this.playerHits = 3;
    }

    computerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".computer-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".computer-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }

    playerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".player-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".player-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }
}

export class Submarine extends Ship{
    constructor(){
        super();
        this.computerHits = 3;
        this.playerHits = 3;
    }

    computerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".computer-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".computer-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }

    playerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".player-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
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
        }

        else{
            coordinates = [
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
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".player-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }
}

export class Boat extends Ship{
    constructor(){
        super();
        this.computerHits = 2;
        this.playerHits = 2;
    }

    computerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".computer-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
                {row: row - 1, col: column -1},
                {row: row - 1, col: column},
                {row: row - 1, col: column +1},
                {row: row - 1, col: column +2},
                {row: row, col: column +2},
                {row: row + 1, col: column +2},
                {row: row + 1, col: column +1},
                {row: row + 1, col: column},
                {row: row + 1, col: column -1},
                {row: row, col: column -1},
                
            ];
        }

        else{
            coordinates = [
                {row: row - 1, col: column -1},
                {row: row - 1, col: column},
                {row: row - 1, col: column +1},
                {row: row, col: column +1},
                {row: row + 1, col: column +1},
                {row: row + 2, col: column +1},
                {row: row + 2, col: column},
                {row: row + 2, col: column -1},
                {row: row + 1, col: column -1},
                {row: row, col: column -1},
            ];
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".computer-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }

    playerSunk(){
        for(let i = 0; i < this.indexes.length; i++){
            let gridName = ".player-grid-item" + this.indexes[i];
            let gridItem = document.querySelector(gridName);
            gridItem.style.backgroundColor = "lightpink";
        }

        let row = Math.floor(this.indexes[0] / 10);
        let column = (this.indexes[0] % 10);
        let coordinates = [];

        if(this.orientation === true){
            coordinates = [
                {row: row - 1, col: column -1},
                {row: row - 1, col: column},
                {row: row - 1, col: column +1},
                {row: row - 1, col: column +2},
                {row: row, col: column +2},
                {row: row + 1, col: column +2},
                {row: row + 1, col: column +1},
                {row: row + 1, col: column},
                {row: row + 1, col: column -1},
                {row: row, col: column -1},
                
            ];
        }

        else{
            coordinates = [
                {row: row - 1, col: column -1},
                {row: row - 1, col: column},
                {row: row - 1, col: column +1},
                {row: row, col: column +1},
                {row: row + 1, col: column +1},
                {row: row + 2, col: column +1},
                {row: row + 2, col: column},
                {row: row + 2, col: column -1},
                {row: row + 1, col: column -1},
                {row: row, col: column -1},
            ];
        }
        

        for (const coord of coordinates) {
            const { row, col } = coord;
            if (row >= 0 && row < 10 && col >= 0 && col < 10) {
                let index = row * 10 + col;
                let gridName = ".player-grid-item" + index;
                let gridItem = document.querySelector(gridName);
                if(gridItem.classList[2] !== "clicked" || gridItem.classList[3] !== "clicked"){
                    gridItem.innerHTML = "&#x2022;";
                    gridItem.style.backgroundColor = "rgb(133, 255, 179)";
                    gridItem.classList.add("clicked");
                }
            }
        }
    }
}