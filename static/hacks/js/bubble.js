var format = d3.format(".2f");

var legends = [];
var legendCounters = new Object();

var colors = [];

var country = "";

var btcCounter = 0;
var ethCounter = 0;
var etcCounter = 0;
var ltcCounter = 0;
var xlmCounter = 0;
var eosCounter = 0;
var nxtCounter = 0;
var nemCounter = 0;
var nanoCounter = 0;
var fiatCounter = 0;

var BTC_2_FIAT = 3600;
var ETH_2_FIAT = 130;
var ETC_2_FIAT = 4;
var LTC_2_FIAT = 43;
var XLM_2_FIAT = 0.077;
var EOS_2_FIAT = 2.83;
var NXT_2_FIAT = 0.022;
var NEM_2_FIAT = 0.041;
var NANO_2_FIAT = 0.85;

var mode = 'btc';

function GetUrlValue(VarSearch) {
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for (var i = 0; i < VariableArray.length; i++) {
        var KeyValuePair = VariableArray[i].split('=');
        if (KeyValuePair[0] === VarSearch) {
            return KeyValuePair[1];
        }
    }
}

function getParamWithDefault(urlParam, defaulValue) {
    var divClass = defaulValue;
    var divClassParam = GetUrlValue(urlParam);
    if (typeof divClassParam !== 'undefined') {
        divClass = divClassParam;
    }
    return divClass;
}

function redraw() {
    const withLegend = getParamWithDefault('legend', 'true');
    country = getParamWithDefault('country', 'all');
    const divClass = getParamWithDefault('divClass', '.svg');
    const autoscale = getParamWithDefault('autoscale', 'true');
    const width = getParamWithDefault('width', '1024');
    const height = getParamWithDefault('height', '768');
    const legendNumber = getParamWithDefault('legendNumber', 'true');
    const year = getParamWithDefault('year', '');
    const category = getParamWithDefault('category', '');
    mode = getParamWithDefault('mode', 'btc');

    main(country, divClass, withLegend, autoscale, width, height, legendNumber, year, category);
}

function filterYear(year, d) {
    if (year !== '') {
        if (d.end.indexOf(year) !== -1) {
            return true;
        }
    }
    return false;
}

function filterCategory(category, d) {
    if (category !== '') {
        if (d.cat1 === category) {
            return true;
        }
    }
    return false;
}

Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

function main(country, divClass, displayLegend, autoscale, width = 1024, height = 768,
              legendNumber, year = '', category = '', fileType = 'index.html') {
    var lines = 0;
    var totalLost = 0;
    var margin = {top: 0, right: 0, bottom: 0, left: 0};

    category = category.replace("%20", " ");
    country = country.replace("%20", " ");

    const doNotFilter = year === '' && category === '';
    const filterByYear = year !== '';
    const filterByCategory = category !== '';
    const filterByYearAndCategory = filterByYear && filterByCategory;

    const file = "https://hacks.tokens-economy.com/generated/" + country + ".csv";

    if (autoscale === 'true') {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        var width = (x - margin.right - margin.left),
            height = .8 * (y - margin.top - margin.bottom);
    }

    var svg = d3.select(divClass).attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform)
        }))
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    ;

    var pack = d3.pack()
        .size([width, height])
        .padding(1.5);

    d3.csv(file, function (d) {
        var nodeIsSelected = false;

        if (doNotFilter) {
            nodeIsSelected = true;
        } else if (filterByYearAndCategory) {
            nodeIsSelected = filterYear(year, d) && filterCategory(category, d);
        } else if (filterYear(year, d)) {
            nodeIsSelected = true;
        } else if (filterCategory(category, d)) {
            nodeIsSelected = true;
        }

        if (nodeIsSelected) {

            if (mode === 'fiat') {
                if (d.lost != '') {
                    if (d.ticker === '$') {
                        fiatCounter = +d.lost;
                        d.value += d.lost;
                    } else if (d.ticker === 'BTC') {
                        btcCounter = +d.lost;
                        d.value = +(d.lost * BTC_2_FIAT) / 1000000;
                    } else if (d.ticker === 'ETH') {
                        ethCounter = +d.lost;
                        d.value = +(d.lost * ETH_2_FIAT) / 1000000;
                    } else if (d.ticker === 'ETC') {
                        etcCounter = +d.lost;
                        d.value = +(d.lost * ETC_2_FIAT) / 1000000;
                    } else if (d.ticker === 'LTC') {
                        ltcCounter = +d.lost;
                        d.value = +(d.lost * LTC_2_FIAT) / 1000000;
                    } else if (d.ticker === 'XLM') {
                        xlmCounter = +d.lost;
                        d.value = +(d.lost * XLM_2_FIAT) / 1000000;
                    } else if (d.ticker === 'EOS') {
                        eosCounter = +d.lost;
                        var value = (d.lost * EOS_2_FIAT) / 1000000;
                        d.value = +value;
                    } else if (d.ticker === 'NXT') {
                        nxtCounter = +d.lost;
                        d.value = +(d.lost * NXT_2_FIAT) / 1000000;
                    } else if (d.ticker === 'NEM') {
                        nemCounter = +d.lost;
                        d.value = +(d.lost * NEM_2_FIAT) / 1000000;
                    } else if (d.ticker === 'NANO') {
                        nanoCounter = +d.lost;
                        d.value = +(d.lost * NANO_2_FIAT) / 1000000;
                    }
                } else {
                    d.value = 1.0001; // set virtual value
                }
            } else {
                if (d.lost != '') {
                    if (d.ticker === '$') {
                        fiatCounter = +d.lost;
                        d.btc = d.lost;
                        d.value += d.lost;
                    } else if (d.ticker === 'BTC') {
                        btcCounter = +d.lost;
                        d.btc = d.lost;
                        d.value = +d.lost;
                    } else if (d.ticker === 'ETH') {
                        let btcValue = +d.lost * ETH_2_FIAT / BTC_2_FIAT;
                        d.btc = btcValue;
                        btcCounter = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'ETC') {
                        let btcValue = +d.lost * ETC_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'LTC') {
                        let btcValue = +d.lost * LTC_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'XLM') {
                        let btcValue = +d.lost * XLM_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'EOS') {
                        let btcValue = +d.lost * EOS_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'NXT') {
                        let btcValue = +d.lost * NXT_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'NEM') {
                        let btcValue = +d.lost * NEM_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    } else if (d.ticker === 'NANO') {
                        let btcValue = +d.lost * NANO_2_FIAT / BTC_2_FIAT;
                        btcCounter = btcValue;
                        d.btc = btcValue;
                        d.value = +btcValue;
                    }
                } else {
                    d.btc = 1;
                    d.value = 1.0001; // set virtual value
                }
            }

            return d;
        }
    }, function (error, classes) {
        if (error) throw error;

        var root = d3.hierarchy({children: classes})
            .sum(function (d) {
                return d.value;
            })
            .each(function (d) {
                if (id = d.data.id) {
                    d.id = d.name;
                    d.package = d.name;
                    d.class = d.name;
                }
            });

        var node = svg.selectAll(".node")
            .data(pack(root).leaves())
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("id", function (d) {
                return d.data.name;
            })
            .attr("r", function (d) {
                return d.r;
            })
            .style("fill", function (d) {
                var color1 = getColor(d.data.cat1);

                if (legends.indexOf(d.data.cat1) < 0) {
                    legends.push(d.data.cat1);
                    legendCounters[d.data.cat1] = 1;
                } else {
                    legendCounters[d.data.cat1] += 1;
                }

                if (colors.indexOf(color1) < 0)
                    colors.push(color1);

                if (d.value !== 1.0001) // do not count virtual value
                    totalLost = totalLost + d.value;

                lines++;

                return color1;
            })
            .attr("class", function (d) {
                return "tooltip";
            })
            .attr("title", function (d) {
                return formatTitle(d.data);
            });

        node.append("clipPath")
            .attr("id", function (d) {
                return "clip-" + d.data.name;
            })
            .append("use")
            .attr("xlink:href", function (d) {
                return "#" + d.data.name;
            });

        node.append("text")
            .attr("clip-path", function (d) {
                return "url(#clip-" + d.data.name + ")";
            })
            .text(function (d) {
                var s = d.data.name;
                //s = s + ": $" + d.data.lost + "M";
                return s ? s.substring(0, d.r / 3) : "";
            }).style("font-size", function (d) {
            return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 24) + "px";
        })
            .attr("dy", ".35em")
            .attr("class", function (d) {
                return "tooltip";
            })
            .attr("title", function (d) {
                return formatTitle(d.data);
            });

        var width = $(window).width();
        if (width > 767) {
            addTooltip();
        } else {
            addMobileTooltip();
        }

        addLegend(displayLegend, divClass, lines, country, totalLost, legendNumber, fileType);
    });
    //addCountryLegend(divClass, country);
};

// Charge function that is called for each node.
// As part of the ManyBody force.
// This is what creates the repulsion between nodes.
//
// Charge is proportional to the diameter of the
// circle (which is stored in the radius attribute
// of the circle's associated data.
//
// This is done to allow for accurate collision
// detection with nodes of different sizes.
//
// Charge is negative because we want nodes to repel.
// @v4 Before the charge was a stand-alone attribute
//  of the force layout. Now we can use it as a separate force!
function charge(d) {
    return -Math.pow(d.radius, 2.0) * forceStrength;
}

function ticked() {
    node
        .attr('cx', function (d) {
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        });
}

function formatTitle(d) {
    var desc = d.desc !== undefined ? d.desc : "";

    var cat1, cat2 = "";
    if (d.cat1) {
        cat1 = d.cat1;
    }
    if (d.cat2) {
        cat2 = d.cat2;
    }
    var category = cat1 + (cat2 !== "" ? " - " + cat2 : "");

    var ticker = d.ticker !== undefined ? '<h4><i class="fas fa-coins fa-2x" style="color: #ffd700"></i> ' + d.ticker + '</h4>' : '';
    var date = d.date !== undefined ? '' + d.date : '';
    var www = '<h4><a href="' + d.www + '" target="_blank">read more...</a></h4>';


    let lost;
    if (mode === 'fiat') {
        lost = d.value !== 1.0001 ? '$' + numberWithCommas(d.value) + ' Million' : '???';
    } else {
        lost = numberWithCommas(d.btc) + ' BTC';
    }

    return '<h1>' + d.name + '</h1>' +
        '<h2>' + category + '</h2>' +
        '<h3>' + lost + ' </h3>' +
        '<h4>' + date + '<h4>' +

        ticker +
        '<p>' + desc + '</p>'+ www;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addTooltip() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk',
        position: 'right',
        'maxWidth': 200, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        trigger: 'custom', // add custom trigger
        interactive: true,
        triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
            click: true,
            tap: true,
            mouseenter: true
        },
        triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
            click: true,
            scroll: false, // ensuring that scrolling mobile is not tapping!
            tap: true,
            mouseleave: true
        }
    });
};

function addMobileTooltip() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk',
        position: 'bottom',
        'maxWidth': 200, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        trigger: 'custom', // add custom trigger
        interactive: true,
        triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
            click: true,
            tap: true,
            mouseenter: true
        },
        triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
            click: true,
            scroll: false, // ensuring that scrolling mobile is not tapping!
            tap: true,
            mouseleave: true
        }
    });
};

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addCountryLegend(divClass, country) {
    $(divClass + '-country').replaceWith(capitalizeFirstLetter(country.replace("%20", " ")));
}

function addLegend(displayLegend, divClass, lines, country, totalLost, displayLegendNumber, fileType) {
    var text = "";
    var itsLegendNumber = "";
    legends.sort();
    var arrayLength = legends.length;
    for (var i = 0; i < arrayLength; i++) {
        var legend = legends[i] ? legends[i].trim() : "";

        if (!legends[i]) {
            //console.log("in country " + country + " i " + i + " legends " + legends);
        }

        var legendCounterText = legendCounters[legend];
        var color = getColor(legend);

        if (displayLegendNumber === 'true') {
            itsLegendNumber = "(" + legendCounterText + ") ";
        }

        // HACK kind of
        var selector = "category";
        if (country === '2016' || country === '2017' || country === '2018') {
            selector = "country";
        }

        text = text + "<a href='" + fileType + "?" + selector + "=" + legend + "&mode="+ mode+ "' class='tooltip' title='Click to display all ICO in category \""
            + legend + "\" only.'><b style='color: " + color + "'><i class=\"fas fa-square\"></i> " + itsLegendNumber + legend + "</b></a>&nbsp; ";
    }
    text = text + "";

    var filterIsActive = arrayLength === 1;
    if (filterIsActive) {
        text = text + " <a href='" + fileType + "'><i class=\"fas fa-arrow-circle-left\"></i> Back</a>";
    }

    if (displayLegend === "true") {
        $(divClass + '-legend').replaceWith(text);
    }
    $(divClass + '-number').replaceWith(lines);

    let numberWithCommas1 = numberWithCommas(Number(totalLost).toFixed(2));
    if (mode === 'fiat') {
        $(divClass + '-raised').replaceWith("$" + numberWithCommas1 + " M");
    } else {
        $(divClass + '-raised').replaceWith(numberWithCommas1 + " BTC");
    }

    $('.btc').replaceWith(numberWithCommas(btcCounter));
    $('.eth').replaceWith(numberWithCommas(ethCounter));
    $('.etc').replaceWith(numberWithCommas(etcCounter));
    $('.ltc').replaceWith(numberWithCommas(ltcCounter));
    $('.xlm').replaceWith(numberWithCommas(xlmCounter));
    $('.eos').replaceWith(numberWithCommas(eosCounter));
    $('.nxt').replaceWith(numberWithCommas(nxtCounter));
    $('.nem').replaceWith(numberWithCommas(nemCounter));
    $('.nano').replaceWith(numberWithCommas(nanoCounter));
    $('.fiat').replaceWith(numberWithCommas(fiatCounter));

    $('.btc-fx').replaceWith(numberWithCommas(BTC_2_FIAT));
    $('.eth-fx').replaceWith(numberWithCommas(ETH_2_FIAT));
    $('.etc-fx').replaceWith(numberWithCommas(ETC_2_FIAT));
    $('.ltc-fx').replaceWith(numberWithCommas(LTC_2_FIAT));
    $('.xlm-fx').replaceWith(numberWithCommas(XLM_2_FIAT));
    $('.eos-fx').replaceWith(numberWithCommas(EOS_2_FIAT));
    $('.nxt-fx').replaceWith(numberWithCommas(NXT_2_FIAT));
    $('.nem-fx').replaceWith(numberWithCommas(NEM_2_FIAT));
    $('.nano-fx').replaceWith(numberWithCommas(NANO_2_FIAT));
};
