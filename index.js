const grid = document.querySelector(".grid")
const startButton = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2,1,0]

function createGrid() {
    for(let i = 0; i < 100; i++) { //loop to create 100 elements
        const square = document.createElement("div") //creates element
        
        square.classList.add("square")
        grid.appendChild(square) //places the element into the grid
        squares.push(square)//push the individual square into the squares array
        }
    }
    createGrid()
    
   currentSnake.forEach(index => squares[index].classList.add("snake"))