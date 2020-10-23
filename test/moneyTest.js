var _nbsp = function(text) {
    var separator = '&nbsp;';
    return text.split(' ').join('&nbsp;');
};

describe('money', function() {
    it('should be a function', function() {
        expect(typeof money).toBe('function');
    });

    it('should return string', function() {
        expect(typeof money(0)).toBe('string');
        expect(typeof money(0, 'PLN')).toBe('string');
        expect(typeof money(0, '')).toBe('string');
    });

    it('should return valid money format without currency', function() {
        expect(money(0)).toBe(_nbsp('0,00'));
        expect(money(1)).toBe(_nbsp('1,00'));
        expect(money(10.99)).toBe(_nbsp('10,99'));
        expect(money(1000.5)).toBe(_nbsp('1 000,50'));
    });

    it('should accept text values with "," as decimal separator', function() {
        expect(money('1,99')).toBe(_nbsp('1,99'));
    });
});

describe('PLN', function() {
    it('should return currency text', function() {
        expect(money(0, 'PLN')).toBe(_nbsp('0,00 zł'));
        expect(money(1, 'PLN')).toBe(_nbsp('1,00 zł'));
        expect(money(10.99, 'PLN')).toBe(_nbsp('10,99 zł'));
        expect(money(1000.5, 'PLN')).toBe(_nbsp('1 000,50 zł'));
        expect(money('1,99', 'PLN')).toBe(_nbsp('1,99 zł'));
    });
});

describe('EUR', function() {
    it('should return currency text', function() {
        expect(money(0, 'EUR')).toBe(_nbsp('0.00 €'));
        expect(money(1, 'EUR')).toBe(_nbsp('1.00 €'));
        expect(money(10.99, 'EUR')).toBe(_nbsp('10.99 €'));
        expect(money(1000.5, 'EUR')).toBe(_nbsp('1 000.50 €'));
    });
});

describe('USD', function() {
    it('should return currency text', function() {
        expect(money(0, 'USD')).toBe(_nbsp('$0.00'));
        expect(money(1, 'USD')).toBe(_nbsp('$1.00'));
        expect(money(10.99, 'USD')).toBe(_nbsp('$10.99'));
        expect(money(1000.5, 'USD')).toBe(_nbsp('$1,000.50'));
    });
});

