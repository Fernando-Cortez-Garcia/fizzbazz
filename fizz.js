function fizz(num) {
    if (num == 0) {
        return num;
    }
    if (num % 3 == 0 && num % 5 == 0) {
        return "fizzbuzz";
    }
    if (num % 3 == 0) {
        return "fizz";
    }
    if (num % 5 == 0) {
        return "buzz";
    }
    return num;
}

function printnum(num) {
    for (let i = 0; i <= num; i++) {
        console.log(`${i}: ${fizz(i)}`);
    }
}

printnum(16);
//exportamos el modulo
module.exports = fizz;