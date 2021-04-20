const grid = document.querySelector(".grid")
const startButton = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10

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
    if (
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits into itself
    )
    return clearInterval(timerId)

    const tail = currentSnake.pop() //removes last element from the array and stores it in a const
    squares[tail].classList.remove("snake") //removes styling from the last element
    currentSnake.unshift(currentSnake[0] + direction) //adds square in direction we are heading
    squares[currentSnake[0]].classList.add("snake")
}
moveSnake()

const timerId = setInterval(moveSnake, 1000)

function apples() {
    do {
appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple")
}
apples()


function control(e) {
    if (e.key === "ArrowRight") {
        direction = 1
    } else if (e.key === "ArrowUp") {
        direction = -10
    } else if (e.key === "ArrowLeft") {
        direction = -1
    } else if (e.key === "ArrowDown") {
        direction = 10
    }
}
document.addEventListener("keyup", control)
