let audio = document.querySelector('audio')
let keysElem = document.querySelectorAll('.key')
let inputElem = document.querySelector('input')
let setVolumeInput = document.querySelector('.volume-slider input')
let hideChar = document.querySelector('.keys-checkbox input')

let keysArray = []


keysElem.forEach(function (key) {
  keysArray.push(key.dataset.key)
})

function keyPress(event) {
  if (keysArray.includes(event.key)) {
    keyNotes(event.key)
  }
}
function keyNotes(key) {
  let musicSrc = `./public/tunes/${key}.wav`
  audio.src = musicSrc
  audio.play()

  let mainKey = document.querySelector(`[data-key=${key}]`)
  mainKey.classList.add('active')
  setTimeout(function () {
    mainKey.classList.remove('active')
  }, 150)
}
function setVolume(event) {
  audio.volume = event.target.value
}




document.addEventListener('keypress', keyPress)
setVolumeInput.addEventListener('change', setVolume)
hideChar.addEventListener('click', function () {
  keysElem.forEach(function (key) {
    key.classList.toggle('hide')
  })
})