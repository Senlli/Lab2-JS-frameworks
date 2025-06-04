// utilities.js

export function greet(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

export function convertMinutesToHours(minutes) {
    return minutes / 60;
}

export function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

export function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
