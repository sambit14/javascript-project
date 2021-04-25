let textElem=   document.querySelector('#loading');

console.log(textElem)
let incrementText =  document.querySelector('#icr');
console.log(incrementText);
let speed = 1000

let textMsg =  'Loading the screen';
let idx= 1;

function  createTextEffect(){
    textElem.innerHTML =  textMsg.slice(0,idx);
     idx++;
     if(idx >textMsg.length){
         idx =1
     }
    setTimeout(createTextEffect,speed)
}
createTextEffect();
incrementText.addEventListener('change',(e)=>{
    console.log(e.target.value);
    speed = 300/e.target.value
})