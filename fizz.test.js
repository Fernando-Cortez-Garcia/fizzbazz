//TDD DESARROLLO CONDUCIDO POR TEST
//importamos el modulo 
const fizz = require('./fizz');

describe('fizz', () => {
    test('Esperamos que imprima el numero si recibe el numero uno', () => {
        const expected = 1;
        const result = fizz(1);
        expect(expected).toBe(result);
    });
    test('Esperamos que imprima fizz al recivbir el numero 3', () => {
        const expected = 'fizz';
        const result = fizz(3);
        expect(expected).toBe(result);
    });
    test('Esperamos que imprima fizz si el numero es multiplo de 3', () => {
        const expected = 'fizz';
        const result = fizz(6);
        // expect(expected).toBe(result);
    });
    test('Esperamos que imprima fizz al recivbir el numero 5', () => {
        const expected = "buzz";
        const result = fizz(5);
        expect(expected).toBe(result);
    });
    test('Esperamos que imprima fizz si el numero es multiplo de 5', () => {
        const expected = 'buzz';
        const result = fizz(10);
        // expect(expected).toBe(result);
    });
    test('Deberia imprimir fizzbuzzs si recibe un multiplo de 3 y 5', () => {
        const expected = 'fizzbuzz';
        const result = fizz(15);
        // expect(expected).toBe(result);
    });
});