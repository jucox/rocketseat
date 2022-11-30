import { elements } from './elements.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sound from './sounds.js'

const {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundOnButton,
    soundOffButton,
    minutesDisplay,
    secondsDisplay
} = elements

const controls = Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

const events = Events({
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundOnButton,
    soundOffButton,
    controls,
    timer,
    sound
})
