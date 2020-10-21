console.log('CodeStarted')

let diceOneEl = document.getElementById('dice1')
let diceTwoEl = document.getElementById('dice2')
let diceThreeEl = document.getElementById('dice3')
let diceFourEl = document.getElementById('dice4')
let diceFiveEl = document.getElementById('dice5')
let diceSixEl = document.getElementById('dice6')

let diceOneOneEl = document.getElementById('dice11')
let diceTwoTwoEl = document.getElementById('dice22')
let diceThreeThreeEl = document.getElementById('dice33')
let diceFourFourEl = document.getElementById('dice44')
let diceFiveFiveEl = document.getElementById('dice55')
let diceSixSixEl = document.getElementById('dice66')

let diceOneOneOneEl = document.getElementById('dice111')
let diceTwoTwoTwoEl = document.getElementById('dice222')
let diceThreeThreeThreeEl = document.getElementById('dice333')
let diceFourFourFourEl = document.getElementById('dice444')
let diceFiveFiveFiveEl = document.getElementById('dice555')
let diceSixSixSixEl = document.getElementById('dice666')

let oneDiceOneEl = document.getElementById('1dice1')
let twoDiceTwoEl = document.getElementById('2dice2')
let threeDiceThreeEl = document.getElementById('3dice3')
let fourDiceFourEl = document.getElementById('4dice4')
let fiveDiceFiveEl = document.getElementById('5dice5')
let sixDiceSixEl = document.getElementById('6dice6')

let oneDiceOneOneEl = document.getElementById('1dice11')
let twoDiceTwoTwoEl = document.getElementById('2dice22')
let threeDiceThreeThreeEl = document.getElementById('3dice33')
let fourDiceFourFourEl = document.getElementById('4dice44')
let fiveDiceFiveFiveEl = document.getElementById('5dice55')
let sixDiceSixSixEl = document.getElementById('6dice66')

let oneOneDiceOneOneEl = document.getElementById('11dice11')
let twoTwoDiceTwoTwoEl = document.getElementById('22dice22')
let threeThreeDiceThreeThreeEl = document.getElementById('33dice33')
let fourFourDiceFourFourEl = document.getElementById('44dice44')
let fiveFiveDiceFiveFiveEl = document.getElementById('55dice55')
let sixSixDiceSixSixEl = document.getElementById('66dice66')


let buttonEl = document.getElementById('roller')
let total = document.getElementById('total')
let clearButtonEl = document.getElementById('reroll')
let allDice = document.getElementById('allDice')
let scoreEl = document.getElementById('total')


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


function randomOne () {
    allDice.classList.remove('hide')
    let y = getRandomInt (6) + 1
    console.log(y)
    if (y === 1) {
        diceOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (y === 2) {
        diceTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (y === 3) {
        diceThreeEl.classList.remove('remove')
        scoreEl = scoreEl + 3
    }
    if (y === 4) {
        scoreEl = scoreEl + 4
        diceFourEl.classList.remove('remove')
    }
    if (y === 5) {
        scoreEl = scoreEl + 5
        diceFiveEl.classList.remove('remove')
    }
    if (y === 6) {
        scoreEl = scoreEl + 6
        diceSixEl.classList.remove('remove')
    }
}



function randomTwo () {
    allDice.classList.remove('hide')
    let x = getRandomInt (6) + 1
    console.log(x)
    if (x === 1) {
        diceOneOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (x === 2) {
        diceTwoTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (x === 3) {
        diceThreeThreeEl.classList.remove('remove')
        scoreEl = scoreEl + 3
    }
    if (x === 4) {
        scoreEl = scoreEl + 4
        diceFourFourEl.classList.remove('remove')
    }
    if (x === 5) {
        scoreEl = scoreEl + 5
        diceFiveFiveEl.classList.remove('remove')
    }
    if (x === 6) {
        scoreEl = scoreEl + 6
        diceSixSixEl.classList.remove('remove')
    }
}

function randomThree () {
    allDice.classList.remove('hide')
    let z = getRandomInt (6) + 1
    console.log(z)
    if (z === 1) {
        diceOneOneOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (z === 2) {
        diceTwoTwoTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (z === 3) {
        diceThreeThreeThreeEl.classList.remove('remove')
        scoreEl = scoreEl + 3
    }
    if (z === 4) {
        scoreEl = scoreEl + 4
        diceFourFourFourEl.classList.remove('remove')
    }
    if (z === 5) {
        scoreEl = scoreEl + 5
        diceFiveFiveFiveEl.classList.remove('remove')
    }
    if (z === 6) {
        scoreEl = scoreEl + 6
        diceSixSixSixEl.classList.remove('remove')
    }
}

function randomFour () {
    allDice.classList.remove('hide')
    let v = getRandomInt (6) + 1
    console.log(v)
    if (v === 1) {
        oneDiceOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (v === 2) {
        twoDiceTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (v === 3) {
        scoreEl = scoreEl + 3
        threeDiceThreeEl.classList.remove('remove')
    }
    if (v === 4) {
        scoreEl = scoreEl + 4
        fourDiceFourEl.classList.remove('remove')
    }
    if (v === 5) {
        scoreEl = scoreEl + 5
        fiveDiceFiveEl.classList.remove('remove')
    }
    if (v === 6) {
        scoreEl = scoreEl + 6
        sixDiceSixEl.classList.remove('remove')
    }
}

function randomFive () {
    allDice.classList.remove('hide')
    let k = getRandomInt (6) + 1
    console.log(k)
    if (k === 1) {
        oneDiceOneOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (k === 2) {
        twoDiceTwoTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (k === 3) {
        scoreEl = scoreEl + 3
        threeDiceThreeThreeEl.classList.remove('remove')
    }
    if (k === 4) {
        scoreEl = scoreEl + 4
        fourDiceFourFourEl.classList.remove('remove')
    }
    if (k === 5) {
        scoreEl = scoreEl + 5
        fiveDiceFiveFiveEl.classList.remove('remove')
    }
    if (k === 6) {
        scoreEl = scoreEl + 6
        sixDiceSixSixEl.classList.remove('remove')
    }
}

function randomSix () {
    allDice.classList.remove('hide')
    let w = getRandomInt (6) + 1
    console.log(w)
    if (w === 1) {
        oneOneDiceOneOneEl.classList.remove('remove')
        scoreEl = scoreEl + 1
    }
    if (w === 2) {
        twoTwoDiceTwoTwoEl.classList.remove('remove')
        scoreEl = scoreEl + 2
    }
    if (w === 3) {
        scoreEl = scoreEl + 3
        threeThreeDiceThreeThreeEl.classList.remove('remove')
    }
    if (w === 4) {
        scoreEl = scoreEl + 4
        fourFourDiceFourFourEl.classList.remove('remove')
    }
    if (w === 5) {
        scoreEl = scoreEl + 5
        fiveFiveDiceFiveFiveEl.classList.remove('remove')
    }
    if (w === 6) {
        scoreEl = scoreEl + 6
        sixSixDiceSixSixEl.classList.remove('remove')
    }
}


function clearDiceButton () {
    buttonEl.classList.add('remove')
    clearButtonEl.classList.remove('remove')
}

function clearDice() {
    clearButtonEl.classList.add('remove')
    buttonEl.classList.remove('remove')
    allDice.classList.add('hide')
}




buttonEl.addEventListener('click', randomOne)
buttonEl.addEventListener('click', randomTwo)
buttonEl.addEventListener('click', randomThree)
buttonEl.addEventListener('click', randomFour)
buttonEl.addEventListener('click', randomFive)
buttonEl.addEventListener('click', randomSix)
buttonEl.addEventListener('click', clearDiceButton)
clearButtonEl.addEventListener('click', clearDice)









console.log('CodeEnded')