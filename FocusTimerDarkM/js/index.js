import Sound from "./sounds.js"
const sound = Sound()

const darkmode = document.querySelector('.darkmode')
const lightmode = document.querySelector('.lightmode')
const body = document.querySelector('body')
const timer = document.querySelector('.timer')

const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const coffee = document.querySelector('.coffee')
const fire = document.querySelector('.fire')
const cards = document.querySelectorAll('button')
const inputs = document.querySelectorAll('.cards input');

/* events */
lightmode.addEventListener('click', () => {
  body.classList.toggle('modeTwo')
  timer.classList.toggle('modeTwo')
  lightmode.classList.toggle('mode')
  darkmode.classList.toggle('mode')

  cards.forEach(button=>button.classList.toggle('modeTwo'))
  if (rain.classList.contains('sound')){
    rain.classList.replace('sound','sound2')
  }
  if (forest.classList.contains('sound')){
    forest.classList.replace('sound','sound2')
  }
  if (coffee.classList.contains('sound')){
    coffee.classList.replace('sound','sound2')
  }
  if (fire.classList.contains('sound')){
    fire.classList.replace('sound','sound2')
  }
  
  inputs.forEach(input => input.classList.toggle('modeTwo'));
})

darkmode.addEventListener('click', () => {
  body.classList.toggle('modeTwo')
  timer.classList.toggle('modeTwo')
  lightmode.classList.toggle('mode')
  darkmode.classList.toggle('mode')

  cards.forEach(button=>button.classList.toggle('modeTwo'))
  inputs.forEach(input => input.classList.toggle('modeTwo'))
  if (rain.classList.contains('sound2')){
    rain.classList.replace('sound2','sound')
  }
  if (forest.classList.contains('sound2')){
    forest.classList.replace('sound2','sound')
  }
  if (coffee.classList.contains('sound2')){
    coffee.classList.replace('sound2','sound')
  }
  if (fire.classList.contains('sound2')){
    fire.classList.replace('sound2','sound')
  }
})

forest.addEventListener('click', () => {
  forest.classList.add('sound')
  rain.classList.remove('sound')
  coffee.classList.remove('sound')
  fire.classList.remove('sound')
  if (forest.classList.contains('modeTwo')){
    forest.classList.replace('sound','sound2')
    rain.classList.replace('sound2','modeTwo')
    coffee.classList.replace('sound2','modeTwo')
    fire.classList.replace('sound2','modeTwo')
  }
    sound.soundForestStart()
})

rain.addEventListener('click', () => {
  rain.classList.add('sound')
  forest.classList.remove('sound')
  coffee.classList.remove('sound')
  fire.classList.remove('sound')
  if (rain.classList.contains('modeTwo')){
    rain.classList.replace('sound','sound2')
    forest.classList.replace('sound2','modeTwo')
    coffee.classList.replace('sound2','modeTwo')
    fire.classList.replace('sound2','modeTwo') 
  }
    sound.soundRainStart()
})

coffee.addEventListener('click', () => {
  coffee.classList.add('sound')
  forest.classList.remove('sound')
  rain.classList.remove('sound')
  fire.classList.remove('sound')
if (coffee.classList.contains('modeTwo')){
    coffee.classList.replace('sound','sound2')
    fire.classList.replace('sound2','modeTwo')
    forest.classList.replace('sound2','modeTwo')
    rain.classList.replace('sound2','modeTwo')
  }
  sound.soundCoffeeStart()
})

fire.addEventListener('click', () => {
  fire.classList.add('sound')
  forest.classList.remove('sound')
  rain.classList.remove('sound')
  coffee.classList.remove('sound')
  if (fire.classList.contains('modeTwo')){
    fire.classList.replace('sound','sound2')
    forest.classList.replace('sound2','modeTwo')
    rain.classList.replace('sound2','modeTwo')
    coffee.classList.replace('sound2','modeTwo')
  }
  sound.soundFireStart()
})

const forestSound = document.getElementById("forestSound");
const volumeControl = document.getElementById("volForest");

volumeControl.addEventListener("input", function() {
  forestSound.volume = volumeControl.value;
})
// console.log(volumeControl)
// console.log(forestSound)

/* Timer */
const Start = document.querySelector('.start')
const Stop = document.querySelector('.stop')
const Plus = document.querySelector('.plus')
const Minus = document.querySelector('.minus')

Start.addEventListener('click',() => {
  sound.pressButton()
})

Stop.addEventListener('click', () => {
  sound.pressButton()
})

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)

Plus.addEventListener('click', function(){
  minutes +=5
  minutesDisplay.innerText = minutes;
})

Minus.addEventListener('click', function(){
  minutes -= 5
  minutesDisplay.innerText = minutes;
})

let timerTimeOut

function updateDisplay (newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2,"0") 
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function reset() {
  updateDisplay(minutes, 0)
  hold()
  sound.stopSounds()
}

function countdown () {
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
    
    updateDisplay(minutes, 0)
    
    if (isFinished) {  
      updateDisplay()
      sound.timeUp()
      return
    }
    
    if(seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateDisplay(minutes, String(seconds -1))
  countdown() 
}, 1000)
}

function updateMinutes(newMinutes){
  minutes = newMinutes
}
function hold() {
  clearTimeout(timerTimeOut) // propriedade clear do JS, acha o timeout e para a função -> nesse caso função timeOut
}

Start.addEventListener('click', countdown)

Stop.addEventListener('click', reset)
