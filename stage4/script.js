
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


// GUARDANDO DADOS EM UM ARRAY

let items = []

for (let i = 0; i < 4; i++) {
    let itemName = prompt(`Digite o ${i + 1}º item:`)
    
    items[i] = itemName
}

alert(items)


// ADIVINHAR UM NÚMERO GERADO ALEATÓRIAMENTE

const randomNumber = Math.round(Math.random() * 10)

let typedNumber = prompt("Acabei de gerar um número entre 1 e 10. Consegue adivinhar qual foi?")
let numberOfAttempts = 1

while (typedNumber != randomNumber) {
    typedNumber = prompt("Você errou, tente novamente!")
    numberOfAttempts++
}

if (numberOfAttempts == 1) {
    alert(`Parabéns! Você descobriu que gerei o número ${randomNumber} após ${numberOfAttempts} tentativa. =)`)
} else {
    alert(`Parabéns! Você descobriu que gerei o número ${randomNumber} após ${numberOfAttempts} tentativas. =)`)
}


// CADASTRO E CONSULTA DE ITENS

let option
let itemsList = []

while (option != 3) {
    option = Number(prompt(`
Digite o número da opção desejada:

1. Cadastrar um item
2. Mostrar itens cadastrados
3. Sair do programa
    `))

    switch (option) {
        case 1:
            let newItem = prompt("Digite o item que deseja adicionar")
            itemsList.push(newItem)
            break
        
        case 2:
            if (itemsList.length == 0) {
                alert("Não existem itens cadastrados!")
            } else {
                alert(itemsList)
            }
            break

        case 3:
            alert('Até mais!')
            break
        
        default:
            alert('Opção inválida!')
    }
}


// LISTA DE IRMÃOS

const brothers = [
    {
        name: 'Andrey',
        age: 15,
        weight: 60,
        height: 185
    },
    {
        name: 'Guilherme',
        age: 17,
        weight: 75,
        height: 180
    },
    {
        name: 'Renato',
        age: 21,
        weight: 80,
        height: 185
    },
    {
        name: 'Vitor',
        age: 26,
        weight: 70,
        height: 175
    }
]

let brothersInformation = []

for (let brother of brothers) {
    const imc = (brother.weight / (brother.height / 100) ** 2).toFixed(2)

    brothersInformation.push(`O ${brother.name} tem ${brother.age} anos de idade, pesa ${brother.weight} kilos e mede ${brother.height}cm de altura! Seu IMC é de ${imc}`)
}

alert(brothersInformation)


// CÁLCULO DE IMC DOS IRMÃOS

const brothers = [
    {
        name: 'Andrey',
        age: 15,
        weight: 60,
        height: 185
    },
    {
        name: 'Guilherme',
        age: 17,
        weight: 75,
        height: 180
    },
    {
        name: 'Renato',
        age: 21,
        weight: 80,
        height: 185
    },
    {
        name: 'Vitor',
        age: 26,
        weight: 70,
        height: 175
    }
]

// Named function
function calculateIMC(weight, height) {
    const imc = (weight / (height / 100) ** 2).toFixed(2)
    return imc
}

// Arrow function
const printBrotherIMC = (brother) => {
    const imcBrother = calculateIMC(brother.weight, brother.height)
    return `O ${brother.name} tem um IMC de ${imcBrother}!`
}

for (let brother of brothers) {
    alert(printBrotherIMC(brother))
}

*/