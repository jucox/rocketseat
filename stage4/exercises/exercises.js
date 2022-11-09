// EXERCÍCIO 1

const numberA = Number(prompt("Digite o primeiro número:"))
const numberB = Number(prompt("Digite o segundo número:"))

const sum = numberA + numberB
const subtraction = numberA - numberB
const multiplication = numberA * numberB
const division = numberA / numberB
const restOfDivision = numberA % numberB
const evenNumber = sum % 2 == 0
const sameNumbers = numberA == numberB

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${subtraction}`)
alert(`A multiplicação dos dois números é ${multiplication}`)
alert(`A divisão dos dois números é ${division}`)
alert(`O resto da divisão dos dois números é ${restOfDivision}`)
alert(`A soma dos dois números é par: ${evenNumber}`)
alert(`Os números digitados são iguais: ${sameNumbers}`)