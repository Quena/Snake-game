const grid = document.querySelector(".grid")
const startButton = document.getElementById("start")
const scoreDisplay = document.getElementById("score")
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9
let timerId = 0

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

   function startGame() {
    //reset everything    
    currentSnake.forEach(index => squares[index].classList.remove("snake")) //removes the snake
    squares[appleIndex].classList.remove("apple")//remove the apple
    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 1000
    createApple()
    currentSnake.forEach(index => squares[index].classList.add("snake")) //adds the class of snake again
    timerId = setInterval(moveSnake, intervalTime)
   }

   function moveSnake() {  
    if (
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains("snake") //if snake hits into itself
    )
    return clearInterval(timerId)

    const tail = currentSnake.pop() //removes last element from the array and stores it in a const
    squares[tail].classList.remove("snake") //removes styling from the last element
    currentSnake.unshift(currentSnake[0] + direction) //adds square in direction we are heading

    //snake head getting the apple
    if (squares[currentSnake[0]].classList.contains("apple")) {
        
        squares[currentSnake[0]].classList.remove("apple")//removes the class of apple
        squares[tail].classList.add("snake")//grow snake by adding class of snake to it
        currentSnake.push(tail) //grow the currentSnake array by adding the number stored in the tail
        createApple() //invoke function to generate a new apple
        score++ //inscreases the score by 1
        scoreDisplay.innerHTML = score //displays the score
        //speed up the snake
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(moveSnake, intervalTime)
    }
    squares[currentSnake[0]].classList.add("snake")
}

//generates an apple in a random place, but doesn't do it where there's a snake
function createApple() {
    do {
appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple")
}
createApple()


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
startButton.addEventListener("click", startGame)