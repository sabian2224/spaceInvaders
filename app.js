const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
let currentShooterIndex = 202
const width = 15
const aliensRemoved = []

//Game field would be 15 x 15
//So 225 squares (this one just creates 225 squares)
for (let i = 0 ; i < width * width; i++) {
  const square = document.createElement('div')
  square.id = i; 
  grid.appendChild(square)
}

//Creating an array 
//Array.from() so the array would be created by 
//querySelectorAll 
const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

//An array to control divs in the squares array
const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]
//classList.add , adds a new class
function draw () {
  for(let i = 0; i < alienInvaders.length; i++){ 
    if(!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}

draw()

//display the shooter
squares[currentShooterIndex].classList.add('shooter')


//move shooter function 
function moveShooter (e) {
  squares[currentShooterIndex].classList.remove('shooter')

  switch(e.key) {
    case 'ArrowLeft':
      if(currentShooterIndex % width !==0) {
        currentShooterIndex -=1
      }
      break
  }
  squares[currentShooterIndex].classList.add('shooter')

}

document.addEventListener('keydown', moveShooter)
