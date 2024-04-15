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