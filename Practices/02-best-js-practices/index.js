// access to DOM elements

// define the variables using standard camelCase in JS
const initialText = document.getElementById('initialText_text')
const initialButton = document.getElementById('initialText_button')
const colorPalette = document.getElementById('colorPalette_panel')
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white']


// define a function to change the text using event on click
initialButton.addEventListener('click', function () {
    actionClickListener()
    changeColorPanel()
})


// function to change the text of paragraph
const actionClickListener = () => {
    initialText.innerHTML = `Button has been clicked. The color of the panel has changed.`
}

// function to change color of the panel 
// using a random color from the array
const changeColorPanel = () => {
    // get a random color from the array
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    // change the background color of the panel
    colorPalette.style.backgroundColor = randomColor
}