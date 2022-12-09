const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop')
const moreTimeButton = document.querySelector('.more')
const lessTimeButton = document.querySelector('.less')
const secondsTimer = document.querySelector('.seconds')
const minutesTimer = document.querySelector('.minutes')
let startCountdown

playButton.addEventListener('click', countdown)
stopButton.addEventListener('click', stopCountdown)
moreTimeButton.addEventListener('click', moreFiveMinutes)
lessTimeButton.addEventListener('click', lessFiveMinutes)

function countdown() {
    startCountdown = setInterval(function() {
        let newSecondsTimer = Number(secondsTimer.textContent)
        let newMinutesTimer = Number(minutesTimer.textContent)

        if (Number(minutesTimer.textContent) < 1 && Number(secondsTimer.textContent) < 1) {
            clearInterval(startCountdown)
            secondsTimer.textContent = '00'
            minutesTimer.textContent = '00'
            return
        }

        if (newSecondsTimer > 0) {
            newSecondsTimer = Number(secondsTimer.textContent) - 1
        } else {
            newSecondsTimer = 59
            newMinutesTimer = newMinutesTimer - 1
        }

        secondsTimer.textContent = String(newSecondsTimer).padStart(2,'0')
        minutesTimer.textContent = String(newMinutesTimer).padStart(2,'0')

    }, 10)

}

function stopCountdown() {
    clearInterval(startCountdown)

    secondsTimer.textContent = '00'
    minutesTimer.textContent = '25'
}

function moreFiveMinutes() {
    minutesTimer.textContent = String(Number(minutesTimer.textContent) + 5).padStart(2,'0')
}

function lessFiveMinutes() {
    minutesTimer.textContent = String(Number(minutesTimer.textContent) - 5).padStart(2,'0')
    
    if (Number(minutesTimer.textContent) < 0) {
        minutesTimer.textContent = '00'
        secondsTimer.textContent = '00'
    }
}

const natureSoundButton = document.querySelector('.nature')
const rainSoundButton = document.querySelector('.rain')
const coffeeSoundButton = document.querySelector('.coffee')
const fireSoundButton = document.querySelector('.fire')

natureSoundButton.addEventListener('click', togglePlayNatureSound)
rainSoundButton.addEventListener('click', togglePlayRainSound)
coffeeSoundButton.addEventListener('click', togglePlayCoffeeSound)
fireSoundButton.addEventListener('click', togglePlayFireSound)


const natureSound = new Audio('./audio/nature.wav')
const rainSound = new Audio('./audio/rain.wav')
const coffeeSound = new Audio('./audio/coffee.wav')
const fireSound = new Audio('./audio/fire.wav')

natureSound.loop = true
rainSound.loop = true
coffeeSound.loop = true
fireSound.loop = true

function togglePlayNatureSound() {
    if (natureSound.paused) {
        natureSound.play()
        natureSoundButton.classList.add('soundPlaying')
    } else {
        natureSound.pause()
        natureSoundButton.classList.remove('soundPlaying')
    }
}

function togglePlayRainSound() {
    if (rainSound.paused) {
        rainSound.play()
        rainSoundButton.classList.add('soundPlaying')
    } else {
        rainSound.pause()
        rainSoundButton.classList.remove('soundPlaying')
    }
}

function togglePlayCoffeeSound() {
    if (coffeeSound.paused) {
        coffeeSound.play()
        coffeeSoundButton.classList.add('soundPlaying')
    } else {
        coffeeSound.pause()
        coffeeSoundButton.classList.remove('soundPlaying')
    }
}

function togglePlayFireSound() {
    if (fireSound.paused) {
        fireSound.play()
        fireSoundButton.classList.add('soundPlaying')
    } else {
        fireSound.pause()
        fireSoundButton.classList.remove('soundPlaying')
    }
}