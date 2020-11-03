(function (global, money) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = money;
    } else if (typeof define === 'function' && define.amd) {
        define('money', [], function () {
            return money;
        });
    } else {
        global.money = money;
    }
})(this, function () {

    var Money = function () {
        this.currencyList = Money.defaults.currencyList;
    };

    Money.defaults = {
        currencyList: {
            NONE: {
                code: 'NONE',
                precision: 2,
                thousand: ' ',
                decimal: ',',
                symbol: 'zł',
                format: '{{value}}'
            },
            PLN: {
                code: 'PLN',
                precision: 2,
                thousand: ' ',
                decimal: ',',
                symbol: 'zł',
                format: '{{value}} {{symbol}}'
            },
            EUR: {
                code: 'EUR',
                precision: 2,
                thousand: ' ',
                decimal: '.',
                symbol: '€',
                format: '{{value}} {{symbol}}'
            },
            USD: {
                code: 'USD',
                precision: 2,
                decimal: '.',
                thousand: ',',
                symbol: '$',
                format: '{{symbol}}{{value}}'
            },
            GBP: {
                code: 'GBP',
                precision: 2,
                decimal: '.',
                thousand: ',',
                symbol: '£',
                format: '{{symbol}}{{value}}'
            },
            JPY: {
                code: 'JPY',
                precision: 2,
                decimal: '.',
                thousand: ',',
                symbol: '¥',
                format: '{{symbol}}{{value}}'
            },
            CZK: {
                code: 'CZK',
                precision: 2,
                decimal: '.',
                thousand: ',',
                symbol: 'Kč',
                format: '{{value}} {{symbol}}'
            },
            SEK: {
                code: 'SEK',
                precision: 2,
                decimal: '.',
                thousand: ',',
                symbol: 'kr',
                format: '{{value}} {{symbol}}'
            }
        }
    };

    Money.prototype.print = function (value, iso, nbsp) {
        iso = iso || 'NONE';
        nbsp = nbsp || false;

        var currency = this.currencyList[iso] || this.currencyList.NONE,
            number = parseFloat(String(value).replace(',', '.')) || 0,
            places = currency.precision,
            symbol = currency.symbol,
            format = currency.format,
            decimal = currency.decimal,
            thousand = currency.thousand,
            negative = number < 0 ? '-' : '',
            i, j;

        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "";
        j = (j = i.length) > 3 ? j % 3 : 0;

        value = negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j)
            .replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i)
            .toFixed(places).slice(2) : "");

        value = format
            .replace('{{symbol}}', symbol)
            .replace('{{value}}', value);

        return nbsp ? value.split(' ').join('&nbsp;') : value;
    };

    return new Money();
}());