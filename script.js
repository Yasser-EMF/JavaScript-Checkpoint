// Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "Nero , Yasser !";
const reversedString = reverseString(originalString);
console.log(reversedString); 
 
// Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
    return str.length;
}

const myString = "NEROYASSER";
const characterCount = countCharacters(myString);
console.log(characterCount);


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
const mySentence = "yo salam, labas?";
const capitalizedSentence = capitalizeWords(mySentence);
console.log(capitalizedSentence); 

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [6, 11, 1, 7, 78];
const sum = sumArray(numbers);
console.log("Sum of Array:", sum); 

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
{
    return arr.filter(condition);
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isGreaterThanFive(num) {
    return num > 5;
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven)); 
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isOdd)); 
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isGreaterThanFive)); 



// function factorialRecursive(n) 
{
    if (n === 0) {
        return 1;
    }
    
    return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); 
console.log(factorialRecursive(0)); 
console.log(factorialRecursive(1));


// function isPrime(number) 
{
    if (number <= 1) {
        return false;
    }
    

    if (number <= 3) {
        return true;
    }
    
    
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(isPrime(1));    
console.log(isPrime(2));   
console.log(isPrime(3));   
console.log(isPrime(17));   
console.log(isPrime(25));   
console.log(isPrime(29));   


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(n) {
    let sequence = [];


    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// Test cases
console.log(fibonacciSequence(1));  
console.log(fibonacciSequence(2));  
console.log(fibonacciSequence(5));  
console.log(fibonacciSequence(10)); 