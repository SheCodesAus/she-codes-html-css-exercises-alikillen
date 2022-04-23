let myGlobalVariable = "hey there team"

window.onload = function() {
    // start
let starterDiv = document.getElementById('starter-div')
let firstHeading = document.createElement('h2')
firstHeading.innerText = 'This is an H2 created with Javascript!'
firstHeading.classList.add('js-header')

starterDiv.appendChild(firstHeading)

let secondHeading = document.createElement('h2')
secondHeading.innerText = "This is another H2 created with JS!"
secondHeading.classList.add('js-header')
secondHeading.id = "second-h2"

starterDiv.appendChild(secondHeading)

// console.log(myAwesomeVariable)
    // end
}


function showName(){

    console.log(myGlobalVariable);
    // start

    let name = document.getElementById('name').value
    console.log("this is your name variable: ", name)

    // var break = document.createElement('br')
    document.getElementById("greeting-text").innerText = "Hey! " + name + " you are cool";
    // end
}

function changeColour(parameter) {
    // start

    document.body.style.backgroundColor = parameter;
    console.log(parameter)
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    let lightbulb = document.getElementById('light')
    lightbulb.classList.toggle("on")

    // end
}
