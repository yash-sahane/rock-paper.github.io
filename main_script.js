let winOrLoose = document.getElementById('result')
const choices = document.querySelectorAll('.choice')
const choiceimg = document.querySelectorAll('.choiceimg')

const choiceArr = ['Rock', 'Paper', 'Scissor']

const getResult = (hChoice, mChoice) => {
    let score
    if (hChoice === mChoice) {
        score = 0
    } else if ((hChoice === 'Paper' && mChoice === 'Rock') || (hChoice === 'Rock' && mChoice === 'Scissor') || (hChoice === 'Scissor' && mChoice === 'Paper')) {
        score = 1
    } else {
        score = -1
    }
    return score
}

const points = {
    hPoints: 0,
    mPoints: 0
}

const showResult = (hChoice, mChoice, Score) => {
    let result = document.getElementById('result')
    let hPointshtml = document.getElementById('hPoints')
    let mPointshtml = document.getElementById('mPoints')
    switch (Score) {
        case -1:
            result.innerText = 'You Loose 👎'
            mPointshtml.innerText = points.mPoints += 1
            break;

        case 1:
            result.innerText = 'You won 🎉'
            hPointshtml.innerText = points.hPoints += 1
            break;

        case 0:
            result.innerText = "It's Draw ❌"
            break;
    }
    hChoicehtml = document.getElementById('hChoice')
    mChoicehtml = document.getElementById('mChoice')
    hChoicehtml.innerText = hChoice
    mChoicehtml.innerText = mChoice
}

const bothChoice = (choice) => {
    const mChoice = getMachineChoice()
    let Score = getResult(choice.value, mChoice)
    showResult(choice.value, mChoice, Score)
}

// get machine choice
const getMachineChoice = () => {
    const randomChoiceNumber = Math.floor(Math.random() * choiceArr.length)
    let mChoice = choiceArr[randomChoiceNumber]
    return mChoice
}

// animation on onclick
choiceimg.forEach(img => {
    img.onmousedown = () => {
        img.style.fontSize = '35px'
    }
})
choiceimg.forEach(img => {
    img.onmouseup = () => {
        img.style.fontSize = '40px'
    }
})
// animation ends

const mouseDown = () => {
    resetBtn = document.querySelector('#resetBtn')
    resetBtn.style.height = '20'
    resetBtn.style.width = '45'
}
const mouseUp = () => {
    resetBtn = document.querySelector('#resetBtn')
    resetBtn.style.height = '30'
    resetBtn.style.width = '60'
}

// get human choice
choices.forEach(choice => {
    choice.onclick = () => {
        bothChoice(choice)
    }
})

const reset = document.getElementById('resetBtn')
function resetfun() {
    let hPointshtml = document.getElementById('hPoints')
    let mPointshtml = document.getElementById('mPoints')
    hPointshtml.innerText = points.hPoints = 0
    mPointshtml.innerText = points.mPoints = 0
    document.getElementById('hChoice').innerText = ''
    document.getElementById('mChoice').innerText = ''
    document.getElementById('result').innerText = ''

}
reset.onclick = () => resetfun()
