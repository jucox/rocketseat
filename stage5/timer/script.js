const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')

playButton.addEventListener('click', function() {
    playButton.classList.add('hide')
    setButton.classList.add('hide')
    
    pauseButton.classList.remove('hide')
    stopButton.classList.remove('hide')
})

pauseButton.addEventListener('click', function() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
})

stopButton.addEventListener('click', function() {
    stopButton.classList.add('hide')
    pauseButton.classList.add('hide')

    playButton.classList.remove('hide')
    setButton.classList.remove('hide')
})

soundOnButton.addEventListener('click', function() {
    soundOnButton.classList.add('hide')
    soundOffButton.classList.remove('hide')
})

soundOffButton.addEventListener('click', function() {
    soundOffButton.classList.add('hide')
    soundOnButton.classList.remove('hide')
})