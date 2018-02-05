// The Problem:
  // Write a program that prints the numbers from 1 to 100. 
  // For multiples of three print “Fizz” instead of the number 
  // For the multiples of five print “Buzz” instead of the number 
  // For numbers which are multiples of both three and five print “FizzBuzz”

// For loop + if, else

const fizzBuzzIfElse = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzzIfElse();

// For loop + swich

const fizzBuzzSwich = () => {
    for (let i = 1; i <=100; i++)
    switch (true) {

        case i % 3 === 0 && i % 5 === 0:
            console.log('FizzBuzz');
            break;
        
        case i % 3 === 0:
            console.log('Fizz');
            break;

        case i % 5 === 0:
            console.log('Buzz');
            break;

        default:
            console.log(i);
            break;
    }
}

fizzBuzzSwich();

// Ternary operator

const fizzBuzzTernary = () => {
    for (let i = 1; i <= 100; i++){
        const fizz = i % 3 === 0,
            buzz = i % 5 === 0;
        console.log(fizz ? buzz ? 'FizzBuzz' : 'Fizz' : buzz ? 'Buzz' : i);
    } 
}

fizzBuzzTernary();