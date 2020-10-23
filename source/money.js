(function(global, money) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = money;
    } else if (typeof define === 'function' && define.amd) {
        define('money', [], function() {
            return money;
        });
    } else {
        global.money = money;
    }
})(this, function() {
    var defaults = {
        code: 'NONE',
        precision : 2,
        decimal: ',',
        thousand: '&nbsp;',
        format: '{{value}}'
    };

    var currencyList = {
        PLN: {
            code: 'PLN',
            thousand: '&nbsp;',
            decimal: ',',
            symbol: 'zł',
            format: '{{value}}&nbsp;{{symbol}}'
        },
        EUR: {
            code: 'EUR',
            thousand: '&nbsp;',
            decimal: '.',
            symbol: '€',
            format: '{{value}}&nbsp;{{symbol}}'
        },
        USD: {
            code: 'USD',
            decimal: '.',
            thousand: ',',
            symbol: '$',
            format: '{{symbol}}{{value}}'
        },
        GBP: {
            code: 'GBP',
            decimal: '.',
            thousand: ',',
            symbol: '£',
            format: '{{symbol}}{{value}}'
        },
        JPY: {
            code: 'JPY',
            decimal: '.',
            thousand: ',',
            symbol: '¥',
            format: '{{symbol}}{{value}}'
        },
        CZK: {
            code: 'CZK',
            decimal: '.',
            thousand: ',',
            symbol: 'Kč',
            format: '{{value}}&nbsp;{{symbol}}'
        },
        SEK: {
            code: 'SEK',
            decimal: '.',
            thousand: ',',
            symbol: 'kr',
            format: '{{value}}&nbsp;{{symbol}}'
        }
    };

    var money = function(value, iso) {
        iso = iso || '';

        var currency = currencyList[iso] || {},
            number = parseFloat(String(value).replace(',', '.')) || 0,
            places = currency.precision || defaults.precision,
            symbol = currency.symbol || iso || defaults.symbol,
            format = currency.format || defaults.format,
            decimal = currency.decimal || defaults.decimal,
            thousand = currency.thousand || defaults.thousand,
            negative = number < 0 ? '-' : '',
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;

        value = negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
        return format.replace('{{symbol}}', symbol).replace('{{value}}', value);
    };

    return money;
}());