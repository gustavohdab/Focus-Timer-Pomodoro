import { Controls }  from "./controls.js"
import { Timer } from "./timer.js"
import  Sound  from "./sounds.js";
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonVolumeOn,
    buttonVolumeOff,
    minutesDisplay,
    secondsDisplay, 
} from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonVolumeOff.addEventListener('click', () => {
    buttonVolumeOn.classList.remove('hide')
    buttonVolumeOff.classList.add('hide')
    sound.bgAudio.play()
    
})

buttonVolumeOn.addEventListener('click', () => {
    buttonVolumeOff.classList.remove('hide')
    buttonVolumeOn.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
    timer.reset()
    return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})


