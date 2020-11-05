# Money - JavaScript currency formatting

## Basic usage
```javascript
money.print(1000.5, 'EUR');   // "1 000.50 €"
money.print(1000.5, 'USD');   // "$1,000.50"
money.print(1000.5, 'GBP');   // "£1,000.50"
money.print(1000.5, 'PLN');   // "1 000,50 zł"
money.print(1000.5, 'CZK');   // "1,000.50 Kč"
money.print(1000.5, 'SEK');   // "1,000.50 kr"

// use &nbsp; character instead of space:
money.print(10, 'EUR', true);   // "10.00&nbsp;€"
```

Supported currency: EUR, USD, GBP, PLN, JPY, CZK, SEK