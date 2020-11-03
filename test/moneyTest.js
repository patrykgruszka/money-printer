describe('money', function() {
    it('should be a function', function() {
        expect(typeof money).toBe('object');
        expect(typeof money.print).toBe('function');
    });

    it('should return string', function() {
        expect(typeof money.print(0)).toBe('string');
        expect(typeof money.print(0, 'PLN')).toBe('string');
        expect(typeof money.print(0, '')).toBe('string');
    });

    it('should return valid money format without currency', function() {
        expect(money.print(0)).toBe('0,00');
        expect(money.print(1)).toBe('1,00');
        expect(money.print(10.99)).toBe('10,99');
        expect(money.print(1000.5)).toBe('1 000,50');
    });

    it('should accept text values with "," as decimal separator', function() {
        expect(money.print('1,99')).toBe('1,99');
    });
});

describe('PLN', function() {
    it('should return currency text', function() {
        expect(money.print(0, 'PLN')).toBe('0,00 zł');
        expect(money.print(1, 'PLN')).toBe('1,00 zł');
        expect(money.print(10.99, 'PLN')).toBe('10,99 zł');
        expect(money.print(1000.5, 'PLN')).toBe('1 000,50 zł');
        expect(money.print('1,99', 'PLN')).toBe('1,99 zł');
    });
});

describe('EUR', function() {
    it('should return currency text', function() {
        expect(money.print(0, 'EUR')).toBe('0.00 €');
        expect(money.print(1, 'EUR')).toBe('1.00 €');
        expect(money.print(10.99, 'EUR')).toBe('10.99 €');
        expect(money.print(1000.5, 'EUR')).toBe('1 000.50 €');
    });
});

describe('USD', function() {
    it('should return currency text', function() {
        expect(money.print(0, 'USD')).toBe('$0.00');
        expect(money.print(1, 'USD')).toBe('$1.00');
        expect(money.print(10.99, 'USD')).toBe('$10.99');
        expect(money.print(1000.5, 'USD')).toBe('$1,000.50');
    });
});

describe('nbsp', function() {
    it('should replace spaces with nbsp character', function() {
        expect(money.print(1, 'EUR', true)).toBe('1.00&nbsp;€');
        expect(money.print(1000.5, 'EUR', true)).toBe('1&nbsp;000.50&nbsp;€');
        expect(money.print(1000000.5, 'EUR', true)).toBe('1&nbsp;000&nbsp;000.50&nbsp;€');
    });
});
