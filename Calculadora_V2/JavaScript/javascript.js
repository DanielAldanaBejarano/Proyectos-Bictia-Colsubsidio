function getScreen() {
    const screen = document.getElementById('screen-container').innerHTML
    return screen 
}

function setScreen(value) {
    document.getElementById('screen-container').innerHTML = value
}

function printNumber(number) {    
    let screen = getScreen()
    if (screen != '0' || isNaN(number) ) {
        setScreen(screen + number)
    } else {
        setScreen(number) 
    }
}

function calculate() {  
    let screen = eval(getScreen()) 
    setScreen (screen) 
    if (screen === Infinity){
        alert("No es posible dividir por 0")
    }
}

function clean() {
    setScreen(0)
}