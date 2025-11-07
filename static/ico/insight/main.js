var nytg = nytg || {};

nytg.formatNumber = function(n, decimals) {
    var s, remainder, num, negativePrefix, negativeSuffix, prefix, suffix;
    suffix = ""
    negativePrefix = ""
    negativeSuffix = ""
    if (n < 0) {
        negativePrefix = "";
        negativeSuffix = " in income"
        n = -n
    };

    if (n >= 1000000000000) {
        suffix = " trillion"
        n = n / 1000000000000
        decimals = 2
    } else if (n >= 1000000000) {
        suffix = " billion"
        n = n / 1000000000
        decimals = 1
    } else if (n >= 1000000) {
        suffix = " million"
        n = n / 1000000
        decimals = 1
    }


    prefix = ""
    if (decimals > 0) {
        if (n < 1) {
            prefix = "0"
        };
        s = String(Math.round(n * (Math.pow(10, decimals))));
        if (s < 10) {
            remainder = "0" + s.substr(s.length - (decimals), decimals);
            num = "";
        } else {
            remainder = s.substr(s.length - (decimals), decimals);
            num = s.substr(0, s.length - decimals);
        }


        return negativePrefix + prefix + num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "." + remainder + suffix + negativeSuffix;
    } else {
        s = String(Math.round(n));
        s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return negativePrefix + s + suffix + negativeSuffix;
    }
};