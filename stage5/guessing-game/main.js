// VARIÁVEIS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
let randomNumber = Math.round(Math.random() * 10)
let numberOfAttempts = 0

console.log(randomNumber)
inputNumber.focus()

// EVENTOS -> O primeiro parâmetro é o evento adicionado, o segundo é a função que será executada
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', hitEnter)

// FUNÇÕES
function handleTryClick(event) {
    event.preventDefault() // Evita o recarregamento da página após o envio do formulário

    if (Number(inputNumber.value) > 0 && Number(inputNumber.value) < 11) {
        numberOfAttempts++
        
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen()
    
            if (numberOfAttempts > 1) {
                screen2.querySelector('.screen2 h1').innerText = `Acertou em ${numberOfAttempts} tentativas!`
            } else {
                document
                screen2.querySelector('.screen2 h1').innerText = `Acertou em ${numberOfAttempts} tentativa!`
            }
        }
    } else {
        alert('Insira um número entre 0 e 10!')
    }
    
    inputNumber.value = ''
    inputNumber.focus()
}

function handleResetClick() {
    toggleScreen()
    numberOfAttempts = 0

    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function hitEnter(event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}