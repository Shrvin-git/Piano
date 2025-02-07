let audio = document.querySelector('audio')
let keysElem = document.querySelectorAll('.key')
let inputElem = document.querySelector('input')
let setVolumeInput = document.querySelector('.volume-slider input')
let hideChar = document.querySelector('.keys-checkbox input')

let keysArray = []


keysElem.forEach(function (key) {
  keysArray.push(key.dataset.key)
})
keysElem.forEach(function (k) {
  k.addEventListener('click', function (event) {
    let mainKey = event.target.dataset.key
    console.log(event.target.dataset.value);
    let audioSrc = `./public/tunes/${mainKey}.wav`
    audio.src = audioSrc
    audio.play()

    let sss = document.querySelector(`[data-key=${mainKey}]`)
    sss.classList.add('active')

    setTimeout(function () {
      sss.classList.remove('active')
    }, 150)
  })
})
function keyPress(event) {
  if (keysArray.includes(event.key)) {
    playNotes(event.key)
  }
}
function playNotes(key) {
  let audioSrc = `./public/tunes/${key}.wav`
  audio.src = audioSrc
  audio.play()

  let mainKey = document.querySelector(`[data-key=${key}]`)
  mainKey.classList.add('active')

  setTimeout(function () {
    mainKey.classList.remove('active')
  }, 150)
}











document.addEventListener('keypress', keyPress)
hideChar.addEventListener('click', function () {
  keysElem.forEach(function (K) {
    K.classList.toggle('hide')
  })
})
setVolumeInput.addEventListener('click', function () {
  audio.volume = setVolumeInput.value
})

