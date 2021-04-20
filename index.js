const grid = document.querySelector(".grid")
const startButton = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2,1,0]
let direction = 1

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

   function moveSnake() {  

    const tail = currentSnake.pop() //removes last element from the array and stores it in a const
    squares[tail].classList.remove("snake") //removes styling from the last element
    currentSnake.unshift(currentSnake[0] + direction) //adds square in direction we are heading
    squares[currentSnake[0]].classList.add("snake")
}
moveSnake()
