export default function (){


const audioForest = new Audio("js/audio/Floresta.wav")
const audioRain = new Audio("js/audio/Chuva.wav")
const audioCoffee = new Audio("js/audio/Cafeteria.wav")
const audioFire = new Audio("js/audio/Lareira.wav")
 
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

buttonPressAudio.volume = 0.35
kitchenTimer.volume = 0.35


let soundsOff = (soundOne, soundTwo, soundThree) => {
  soundOne.pause()
  soundTwo.pause()
  soundThree.pause()
}

const soundForestStart = () => {
  soundsOff(audioRain, audioCoffee, audioFire)
  audioForest.play()
  audioForest.loop = true
}

const soundRainStart = () => {
  soundsOff(audioForest, audioCoffee, audioFire)
    audioRain.play()
    audioRain.loop = true
}

const soundCoffeeStart = () => {
  soundsOff(audioForest, audioRain, audioFire)
  audioCoffee.play()
  audioCoffee.loop = true
}

const soundFireStart = () => {
  soundsOff(audioCoffee, audioForest, audioRain)
  audioFire.play()
  audioFire.loop = true
}

function pressButton() {
  buttonPressAudio.play()
}

function timeUp() {
  kitchenTimer.play()
}

function stopSounds (){
  audioCoffee.pause()
  audioFire.pause()
  audioForest.pause()
  audioRain.pause()
}

// function playAudio(Sound, card){
//   Sound.loop = true
//   let isActive = card.classList.contains('sound'||'sound2')
//   isActive === false ? Sound.pause() : Sound.play
// }

// function adjustVolume(Sound, volume){
//   Sound.volume = volume
// }
  return{
    soundForestStart,
    soundRainStart,
    soundFireStart,
    soundCoffeeStart,
    soundsOff,
    pressButton,
    timeUp,
    audioCoffee,
    audioFire,
    audioForest,
    audioRain,
    stopSounds
    // playAudio,
    // adjustVolume
  }
}
