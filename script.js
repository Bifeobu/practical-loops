// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(`${i}:Fizz`)
    } 
    if (i % 5 === 0) {
        console.log(`${i}:Buzz`)
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: Fizz Buzz`)
    }
    if (i % 1 === 0) {
        console.log(i)
    }
}

console.log("========================")

// Part 2: Prime Time

// function isPrime(n) {
//     if (n <= 1) return false;
// for (let i = 2; i < n; i++) {
//     if (n % i ===0) {
//         return false;
//     }
//   }
//   return true;
// }
// isPrime(4)

function checkPrime(n) {
    let i, flag = true;
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
checkPrime(4);
checkPrime(5);