
/* 

// STAGE 4: LÓGICA E ALGORITMOS COM JS

alert('Hello world!')


// CÁLCULO DE MÉDIA

let student = prompt("Qual é seu nome?")
let n1 = prompt("Digite sua primeira nota:")
let n2 = prompt("Digite sua segunda nota:")
let n3 = prompt("Digite sua terceira nota:")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

average = average.toFixed(2)

if (average > 6) {
    alert(`Você está aprovado! Sua média foi ${average}!`)
} else if (average > 4) {
    alert (`Você está de recuperação! Sua média foi ${average}!`)
} else {
    alert(`Você está reprovado! Sua média foi ${average}!`)
}

*/

// GUARDANDO DADOS EM UM ARRAY

let items = []

for (let i = 0; i < 4; i++) {
    let itemName = prompt(`Digite o ${i + 1}º item:`)

    items[i] = itemName
}

alert(items)