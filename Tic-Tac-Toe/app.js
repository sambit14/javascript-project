console.log("welcome to tic tac game");


let music =  new Audio('8bitmusic.wav');
let gameStart =  new Audio('gameStart.wav');
let gameEnd =  new Audio('gameOver.wav');

let gameOver = false
// document.body.addEventListener("mousemove", function () {
//     music.play()
// })


let turn ='X'

//function to change turn

function changeTurn(){
    return turn === 'X'?'0':'X'
}


//function to check  win

function checkWin(){
   let boxtext =  document.getElementsByClassName('boxtext')    
   let winPossibilites = [
       [0,1,2,64,66,0],
       [3,4,5,64,198,0],
       [6,7,8,64,339,0],
       [0,3,6,-68,194,90],
       [1,4,7,72,194,90],
       [2,5,8, 205,194,90],
       [0,4,8,72,200,225],
       [2,4,6,72,200,132]
   ]
   winPossibilites.forEach(e =>{
       if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) 
         &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText) 
         && (boxtext[e[0]].innerText !== '')){
            let winer =  turn === 'X'?'0':'X'
            document.getElementsByClassName('info')[0].innerText = `${winer} Won`
            gameOver =  true;
            gameEnd.play();
            document.getElementsByClassName('line')[0].style.width ='20vw'
            document.getElementsByClassName('line')[0].style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '120px'
       }
   })
}

// Game logic

let boxes =  document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
    let boxText =  element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
          if(boxText.innerText === '') {
              boxText.innerText = turn;
              gameStart.play()
              turn = changeTurn();
              checkWin();
              if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`
              }
          }
    })
})

//code for reset 

document.getElementById('reset').addEventListener('click',e=>{
    let boxText =  document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(e=> e.innerText = '');
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
    document.getElementsByClassName('line')[0].style.width ='0'
})