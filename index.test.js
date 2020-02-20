const { describe, it, expect, matchers } = require('./test-framework');
const { add, subtract, divide, multiply } = require('./index');


describe('Addition', () => {
    it('adding a, b', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('adding a, b', () => {
        expect(add(1, 7)).toBe(8);
    });
});


describe('Subtraction', () => {
    it('subtract b from a', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});

describe('Division', () => {
    it('divide a by b', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
});

describe('Multiplication', () => {
    it('multiplying a and b', () => {
        expect(multiply(1, 2)).toBe(2);
    });
});