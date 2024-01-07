    import { startGame } from "./game";
    import { Battleship, Boat, Carrier, Destroyer, Submarine } from "./ships";

    function loadGrid(){
        const grid = document.querySelector(".start-grid");
        
        for(let i = 0; i < 100; i++){
            const div = document.createElement("div");
            div.classList.add("start-grid-item");
            div.classList.add("start-grid-item" + i);
            div.addEventListener("mouseover",handleHover);
            div.addEventListener("click", drawShip);
            grid.appendChild(div);
        }
    }

    function handleHover(e){
        if(e.target.classList[2] === "ship"){
            return;
        }

        const index = Array.from(e.target.parentElement.children).indexOf(e.target);
        const row = Math.floor(index / 10);
        const column = (index % 10);
        clearGrid();
        showShip(index, row, column);
    }

    function handleUnhover(){
        clearGrid();
    }

    function checkPlacement(index, row, column){
        if(column > 5 && main.orientation === true && main.ship === 0){
            return true;
        }
        if(row > 5 && main.orientation === false && main.ship === 0){
            return true;
        }

        if(column > 6 && main.orientation === true && main.ship === 1){
            return true;
        }
        if(row > 6 && main.orientation === false && main.ship === 1){
            return true;
        }

        if(column > 7 && main.orientation === true && main.ship === 2){
            return true;
        }
        if(row > 7 && main.orientation === false && main.ship === 2){
            return true;
        }

        if(column > 7 && main.orientation === true && main.ship === 3){
            return true;
        }
        if(row > 7 && main.orientation === false && main.ship === 3){
            return true;
        }

        if(column > 8 && main.orientation === true && main.ship === 4){
            return true;
        }
        if(row > 8 && main.orientation === false && main.ship === 4){
            return true;
        } 


        if(main.ship === 1 && main.orientation === true){
            let number = index -1;
            for(let i = 0; i < 4; i++){
                number++;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        if(main.ship === 2 && main.orientation === true){
            let number = index -1;
            for(let i = 0; i < 3; i++){
                number++;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        if(main.ship === 3 && main.orientation === true){
            let number = index -1;
            for(let i = 0; i < 3; i++){
                number++;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        if(main.ship === 4 && main.orientation === true){
            let number = index -1;
            for(let i = 0; i < 2; i++){
                number++;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }


        if(main.ship === 1 && main.orientation === false){
            let number = index -10;
            for(let i = 0; i < 4; i++){
                number = number + 10;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        if(main.ship === 2 && main.orientation === false){
            let number = index -10;
            for(let i = 0; i < 3; i++){
                number = number + 10;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        
        if(main.ship === 3 && main.orientation === false){
            let number = index -10;
            for(let i = 0; i < 3; i++){
                number = number + 10;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        if(main.ship === 4 && main.orientation === false){
            let number = index -10;
            for(let i = 0; i < 2; i++){
                number = number + 10;
                let square = document.querySelector(".start-grid-item" + number);
                if(square.classList[2] === "spacer"){
                    return true;
                }
            }
        }

        return false;
    }

    function showShip(index, row, column){
        
        if(checkPlacement(index, row, column)){
            return;
        }

        if(main.ship === 0){
            if(main.orientation === true){
                for(let i = 0; i < 5; i++){
                    let num = index + i;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
        
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        
            else{
                for(let i = 0; i < 5; i++){
                    let num = index + i * 10;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        }

        else if(main.ship === 1){
            if(main.orientation === true){
                for(let i = 0; i < 4; i++){
                    let num = index + i;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        
            else{
                for(let i = 0; i < 4; i++){
                    let num = index + i * 10;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        }

        else if(main.ship === 2 || main.ship === 3){
            if(main.orientation === true){
                for(let i = 0; i < 3; i++){
                    let num = index + i;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        
            else{
                for(let i = 0; i < 3; i++){
                    let num = index + i * 10;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        }

        else if(main.ship === 4){
            if(main.orientation === true){
                for(let i = 0; i < 2; i++){
                    let num = index + i;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        
            else{
                for(let i = 0; i < 2; i++){
                    let num = index + i * 10;
                    let name = ".start-grid-item" + num;
                    let square = document.querySelector(name);
                    square.style.backgroundColor = "rgb(133, 255, 179)";
                    square.style.border = "none";
                }
            }
        }
        
    }

    function clearGrid(){
        for(let i = 0; i < 100; i++){
            let square = document.querySelector(".start-grid-item" + i);
            let classes = square.classList;
            
            if(classes[2] !== "ship"){
                square.style.backgroundColor = "white";
                square.style.border = "black 1px solid";
            }
            
        }
    }

    function rotateButtonClicked(){
        main.orientation = !main.orientation;
    }

    function drawShip(e){
        let index = Array.from(e.target.parentElement.children).indexOf(e.target);
        const row = Math.floor(index / 10);
        const column = (index % 10);

        if(checkPlacement(index, row, column)){
            return;
        }

        if(main.ship === 0){
            drawCarrier(index, row, column);
        }

        else if(main.ship === 1){
            drawBattleship(index, row, column);
        }

        else if(main.ship === 2){
            drawDestroyer(index, row, column);
        }

        else if(main.ship === 3){
            drawSubmarine(index, row, column);
        }

        else if(main.ship === 4){
            drawBoat(index, row, column);
        }

    }

    function drawCarrier(index, row, column){
        if(main.orientation === true){
            let indexes = [];
            for(let i = 0; i < 5; i++){
                let num = index + i;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.carrier.indexes = indexes;
            main.carrier.orientation = true;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }

        }

        else{
            let indexes = [];
            for(let i = 0; i < 5; i++){
                let num = index + i * 10;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.carrier.indexes = indexes;
            main.carrier.orientation = false;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        main.ship++;
    }

    function drawBattleship(index, row, column){
        if(main.orientation === true){
            let indexes = [];
            for(let i = 0; i < 4; i++){
                let num = index + i;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.battleShip.indexes = indexes;
            main.battleShip.orientation = true;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        else{
            let indexes = [];
            for(let i = 0; i < 4; i++){
                let num = index + i * 10;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.battleShip.indexes = indexes;
            main.battleShip.orientation = false;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        main.ship++;
    }

    function drawDestroyer(index, row, column){
        if(main.orientation === true){
            let indexes = []
            for(let i = 0; i < 3; i++){
                let num = index + i;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.destroyer.indexes = indexes;
            main.destroyer.orientation = true;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        else{
            let indexes = []
            for(let i = 0; i < 3; i++){
                let num = index + i * 10;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.destroyer.indexes = indexes;
            main.destroyer.orientation = false;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        main.ship++;
    }

    function drawSubmarine(index, row, column){
        if(main.orientation === true){
            let indexes = []
            for(let i = 0; i < 3; i++){
                let num = index + i;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.submarine.indexes = indexes;
            main.submarine.orientation = true;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        else{
            let indexes = []
            for(let i = 0; i < 3; i++){
                let num = index + i * 10;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }

            main.submarine.indexes = indexes;
            main.submarine.orientation = false;

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
                    let square = document.querySelector(".start-grid-item" + index);
                    square.classList.add("spacer");
                }
            }
        }

        main.ship++;
    }

    function drawBoat(index, row, column){
        if(main.orientation === true){
            let indexes = []
            for(let i = 0; i < 2; i++){
                let num = index + i;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }
            main.boat.indexes = indexes;
            main.boat.orientation = true;
        }

        else{
            let indexes = []
            for(let i = 0; i < 2; i++){
                let num = index + i * 10;
                indexes.push(num);
                let name = ".start-grid-item" + num;
                let square = document.querySelector(name);
                square.style.backgroundColor = "rgb(68, 68, 68)";
                square.style.border = "none";
                square.classList.add("ship");
            }
            main.boat.indexes = indexes;
            main.boat.orientation = false;
        }

        startGame(main.carrier, main.battleShip, main.destroyer, main.submarine, main.boat);
    }


    export const main = (() =>{
        const gridContainer = document.querySelector(".start-grid");
        const rotateButton = document.querySelector(".rotate-button");

        let orientation = true;
        let ship = 0;
        let carrier = new Carrier();
        let battleShip = new Battleship();
        let destroyer = new Destroyer();
        let submarine = new Submarine();
        let boat = new Boat();

        rotateButton.addEventListener("click", rotateButtonClicked);
        gridContainer.addEventListener("mouseout", handleUnhover);  

        loadGrid();

        return {
            orientation: orientation,
            ship: ship,
            carrier: carrier,
            battleShip: battleShip,
            destroyer: destroyer,
            submarine: submarine,
            boat: boat
        };
    })();


