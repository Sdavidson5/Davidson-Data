let hour = 23;
let name ='shane';

if (hour >= 6 & hour <=12) {
    console.log(`good morning ${name}!`)
} else if( hour >=13 & hour <=17) {
    console.log(`good afternoon ${name}!`)
} else
    console.log(`good night ${name}!`)

let age = 5;
const isHoliday = true ;

if (age <=6 & isHoliday === false || age >= 65 & isHoliday === false) {
    console.log(`Discount`)
} else
    console.log(`No discount`)

let random = Math.random();

console.log(random)
let result = '';
if (random<.5) {
    result = 'heads'
} else {
    result = 'tails'
}

console.log(result)

let guess = 'tails';

if (result === guess) {
    console.log('you win')
} else {
    console.log('you lose')
}

function greet(name) {
    if (name === undefined) {
        console.log('Hi there!')
    }
    else return console.log(`Hello ${name}!`)
}

greet('shane');

function convertToFahrenheit(degrees,unit) {
    let f = (degrees*9/5)+32;
    let c = (degrees-32)*5/9;
    if (unit==='F') {
        console.log(c)
    } else {
        console.log(f)
    }
}

convertToFahrenheit(52,'F')

function convertLength(length, from, to) {
    let km = 
}










