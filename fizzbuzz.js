function fizzBuzz(num) {
    if (num%3 === 0 && num%5 !== 0) {
        return 'FIZZ';
    } else if (num%5 === 0 && num%3 !== 0) {
        return 'BUZZ';
    } else if (num%3 === 0 && num%5 === 0) {
        return 'FIZZBUZZ'
    } else {
        return null;
    }
}

module.exports = fizzBuzz;