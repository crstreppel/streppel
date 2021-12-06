import { soma } from "./func.js"

let myNumber = 1285

let formatter = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL'

})

console.log(formatter.format(myNumber))

let myDate = new Date('2021-12-31T12:00:00')

let formater = new Intl.DateTimeFormat('pt-BR')

console.log(formater.format(myDate))

let formater1 = new Intl.DateTimeFormat('pt-BR', {
    weekday: "long",
    year: 'numeric',
    month: "long",
    day: 'numeric'
})

console.log(formater1.format(myDate))

soma(2,5)

