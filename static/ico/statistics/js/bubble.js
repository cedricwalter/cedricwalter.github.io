var format = d3.format(".2f");

var legends = [];
var legendCounters = new Object();

var colors = [];

var country = "";

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
    country = getParamWithDefault('country', 'switzerland');
    const divClass = getParamWithDefault('divClass', '.svg');
    const autoscale = getParamWithDefault('autoscale', 'true');
    const width = getParamWithDefault('width', '1024');
    const height = getParamWithDefault('height', '768');
    const legendNumber = getParamWithDefault('legendNumber', 'true');
    const year = getParamWithDefault('year', '');
    const category = getParamWithDefault('category', '');
    const fileType = getParamWithDefault('fileType', 'country.html');

    main(country, divClass, withLegend, autoscale, width, height, legendNumber, year, category, fileType);
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

function main(country, divClass, displayLegend, autoscale, width = 1024, height = 768, legendNumber, year = '', category = '', fileType = 'country.html') {
    var lines = 0;
    var totalRaised = 0;
    var margin = {top: 0, right: 0, bottom: 0, left: 0};

    category = category.replace("%20", " ");
    country = country.replace("%20", " ");

    const doNotFilter = year === '' && category === '';
    const filterByYear = year !== '';
    const filterByCategory = category !== '';
    const filterByYearAndCategory = filterByYear && filterByCategory;

    const file = "https://www.tokens-economy.com/ico/statistics/generated/" + country + ".csv";

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

            if (d.raised != '') {
                d.value = +d.raised;
            } else {
                d.value = 1.0001; // set virtual value
            }

            //var value = d.raised != '' ? d.raised : 0.1;

            //d.value = +value;
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
                    totalRaised = totalRaised + d.value;

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
                //s = s + ": $" + d.data.raised + "M";
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

        addLegend(displayLegend, divClass, lines, country, totalRaised, legendNumber, fileType);
    });
    addCountryLegend(divClass, country);
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
    var start = d.start !== undefined ? '' + d.start + ' - ' : '';
    var end = d.end !== undefined ? '' + d.end + '' : '';
    var www = '<h4><a href="' + d.www + '?utm_source=ico.tokens-economy.com' +  '" target="_blank">' + d.www + '</a></h4>';

    let raised = d.value !== 1.0001 ? '$' + format(d.value) + ' Million' : '???';

    return '<h1>' + d.name + '</h1>' +
        '<h2>' + category + '</h2>' +
        '<h3>' + raised + ' </h3>' +
        '<h4>' + start + end + '<h4>' +
        www +
        ticker +
        '<p>' + desc + '</p>';
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

function addLegend(displayLegend, divClass, lines, country, totalRaised, displayLegendNumber, fileType) {

    // hide year selector when in year mode
    var displayYear = true;
    var text = "";
    var itsLegendNumber = "";
    legends.sort();
    var arrayLength = legends.length;
    for (var i = 0; i < arrayLength; i++) {
        var legend = legends[i] ? legends[i].trim() : "";

        if (!legends[i]) {
            console.log("in country " + country + " i " + i + " legends " + legends);
        }

        var legendCounterText = legendCounters[legend];
        var color = getColor(legend);

        if (displayLegendNumber === 'true') {
            itsLegendNumber = "(" + legendCounterText + ") ";
        }

        // HACK kind of
        var selectorType = "category";
        if (country === '2016' || country === '2017' || country === '2018' || country === '2019') {
            selectorType = "country";
            displayYear = false;
        }

        text = text + "<a onclick=\"goto(location.href, 'category','" + legend + "')\" class='tooltip' title='Click to display all ICO in category \"" + legend + "\" only.'><b style='color: " + color + "'><i class=\"fas fa-square\"></i> " + itsLegendNumber + legend + "</b></a>&nbsp; ";
    }
    text = text + "";

    var filterIsActive = arrayLength === 1;
    if (filterIsActive) {
        text = text + " <a href='" + fileType + "'><i class=\"fas fa-arrow-circle-left\"></i> Back</a>";
    }

    if (displayLegend === "true") {
        $(divClass + '-legend').replaceWith(text);
    }
    if (displayYear == false) {
        $('.years-legend').html("");
    }

    $(divClass + '-number').replaceWith(lines);
    $(divClass + '-raised').replaceWith("$" + format(totalRaised) + " M");
};
