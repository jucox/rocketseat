export default function Events({
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundOnButton,
    soundOffButton,
    controls,
    timer,
    sound
}) {

    playButton.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    pauseButton.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    stopButton.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    setButton.addEventListener('click', function() {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

    soundOnButton.addEventListener('click', function() {
        soundOnButton.classList.add('hide')
        soundOffButton.classList.remove('hide')
        sound.bgAudio.pause()
    })
    
    soundOffButton.addEventListener('click', function() {
        soundOffButton.classList.add('hide')
        soundOnButton.classList.remove('hide')
        sound.bgAudio.play()
    })
}