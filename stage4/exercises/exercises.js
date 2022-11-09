/*

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

*/

// EXERCÍCIO 2

const students = [
    {
        name: "Andrey",
        firstTestGrade: 10,
        secondTestGrade: 5
    },
    {
        name: "Guilherme",
        firstTestGrade: 5,
        secondTestGrade: 6
    },
    {
        name: "Renato",
        firstTestGrade: 4,
        secondTestGrade: 8
    },
    {
        name: "Vitor",
        firstTestGrade: 8,
        secondTestGrade: 7
    }
]

function averageCalculation(gradeA, gradeB) {
    const average = (gradeA + gradeB) / 2
    return average
}

for (let student of students) {
    const studentAverage = averageCalculation(student.firstTestGrade, student.secondTestGrade)

    if (studentAverage < 7) {
        alert(`A média do aluno ${student.name} é: ${studentAverage}\nSentimos muito, você não foi aprovado =(`)
    } else {
        alert(`A média do aluno ${student.name} é: ${studentAverage}\nParabéns, você foi aprovado! =)`)
    }
}