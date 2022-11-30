export default function Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
}
) {

    function play() {
        playButton.classList.add('hide')
        setButton.classList.add('hide')
        pauseButton.classList.remove('hide')
        stopButton.classList.remove('hide')
    }

    function pause() {
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }
    
    function reset() {
        stopButton.classList.add('hide')
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
        setButton.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')

        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        play,
        pause,
        reset,
        getMinutes
    }
}