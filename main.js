// define drums array
const drums = [
  {
    key: 'a',
    imgUrl: './imgs/tom1.png',
    sound: './sounds/tom-1.mp3',
    boxShadow: "0 0 0 5px rgba(202, 16, 174, 0.476)"
  },
  {
    key: 'c',
    imgUrl: './imgs/tom2.png',
    sound: './sounds/tom-2.mp3',
    boxShadow: "0 0 0 5px rgba(159, 16, 202, 0.476)"
  },
  {
    key: 'd',
    imgUrl: './imgs/tom3.png',
    sound: './sounds/tom-3.mp3',
    boxShadow: "0 0 0 5px rgba(255, 251, 2, 0.396)"
  },
  {
    key: 'w',
    imgUrl: './imgs/tom4.png',
    sound: './sounds/tom-4.mp3',
    boxShadow: "0 0 0 5px rgba(202, 16, 174, 0.476)"
  },
  {
    key: 'm',
    imgUrl: './imgs/snare.png',
    sound: './sounds/snare.mp3',
    boxShadow: "0 0 0 5px rgba(159, 16, 202, 0.476)"
  },
  {
    key: 'Enter',
    imgUrl: './imgs/crash.png',
    sound: './sounds/crash.mp3',
    boxShadow: "0 0 0 5px rgba(255, 251, 2, 0.396)"
  },
  {
    key: ' ',
    imgUrl: './imgs/kick.png',
    sound: './sounds/kick-bass.mp3',
    boxShadow: "0 0 0 5px rgba(202, 16, 174, 0.476)"
  },
]

// access the relevant html elements
const drumKitContainer = document.querySelector('.drums')
const drumButtonsContainer = document.querySelector('.drums__buttons')
const footer = document.querySelector('.drums__footer')

// This function handles the play drum either on click or on key down
function playDrum(drum, button) {
  const audio = new Audio(drum.sound)
  audio.play()
  button.style.border = null
  button.style.boxShadow = drum.boxShadow
  setTimeout(() => {
    button.style.boxShadow = null
  }, 300)
}

// This creates the playable drum buttons and call playDrum in the onclick handler of each button
drums.forEach((drum, index) => {
  const button = document.createElement('button')
  button.setAttribute('class', 'drums__button')
  button.innerHTML = `<img src="${drum.imgUrl}" alt="Drum ${index + 1}">`
  drumButtonsContainer.appendChild(button)
  button.addEventListener('click', () => {
    playDrum(drum, button)
  })
})

// This creates audio elements for each drum
drums.forEach((drum) => {
  const audio = document.createElement('audio')
  audio.setAttribute('src', drum.sound)
  drumKitContainer.appendChild(audio)
})

// This allows you to play the drums on keydown
document.addEventListener('keydown', e => {
  const key = e.key.toLocaleLowerCase()
  const drumIndex = drums.findIndex(drum => drum.key.toLocaleLowerCase() === key)
  const drum = drums[drumIndex]
  const buttons = document.querySelectorAll('button.drums__button')
  const button = buttons[drumIndex]
  if (drumIndex !== -1) {
    playDrum(drum, button)
  }
})

// This takes care of the footer text
footer.innerHTML = `Copyright &copy; P.A.A ${new Date().getFullYear()}`