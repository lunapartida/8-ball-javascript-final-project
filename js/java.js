// import randomcolor from "randomcolor"

let adviceDisplay = document.getElementById ('adviceDisplay')
let button = document.getElementById('adviceBtn')

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

button.addEventListener ('click', () => {
    let randomAdvice = Math.floor (Math.random() * advice.length);
    adviceDisplay.textContent = advice[randomAdvice]
    adviceEye.style.backgroundColor = randomcolor ({luminosity: 'light'})
});


// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
