const choices = document.querySelectorAll('.choice')

const count = { 'rock': 0, 'paper': 0, 'scissor': 0 }

choices.forEach(choice => {
    choice.onclick = () => {
        count[choice.value] += 1
        choice.innerText = count[choice.value]
    }
})

const reset = document.getElementById('resetBtn')

function resetfun() {
    choices.forEach(choice => {
        choice.innerText = count[choice.value] = 0
    })
}
reset.onclick = () => resetfun()