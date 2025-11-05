var format = d3.format(".2f");

var consensusLegend = [];
var algorithmLegend = [];
var consensusLegendCounter = new Object();
var algorithmLegendCounter = new Object();

var colors = [];
var lines = 0;

var type = "consensus";

var filter = "";
var filterAlgorithm = "";

var displayAll = false;
var displayDead = false;
var mode = "";

var algoColor = d3.scaleOrdinal(d3.schemeCategory20);

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

function GetUrlValueWithDefault(VarSearch, defaultValue) {
    var filterParam = GetUrlValue(VarSearch);
    if (typeof filterParam !== 'undefined') {
        return filterParam;
    }

    return defaultValue;
}

function redraw() {
    type = GetUrlValueWithDefault('type', "consensus");

    filter = GetUrlValueWithDefault('filter', "");
    filterAlgorithm = GetUrlValueWithDefault('filterAlgorithm', "");

    displayAll = GetUrlValueWithDefault('displayAll', false);
    displayDead = GetUrlValueWithDefault('displayDead', false);
    mode = GetUrlValueWithDefault('mode', 'consensus');

    main("https://www.tokens-economy.com/consensus/generated/" + type + ".csv", filter, filterAlgorithm);
}

// window.addEventListener("resize", redraw);


$(document).ready(function () {
    redraw();
});


function main(file, filter, filterAlgorithm) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = (x - margin.right - margin.left),
        height = .8 * (y - margin.top - margin.bottom);

    var svg = d3.select("svg").attr("width", width + margin.right + margin.left)
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
        if (filter !== "") {
            var filterCleaned = filter.replace(/%20/g, ' ');

            if (d.proofType === filterCleaned) {
                lines++;
                return d;
            }
        } else if (filterAlgorithm !== "") {
            var filterCleaned = filterAlgorithm.replace(/%20/g, ' ');

            if (d.algorithm === filterCleaned) {
                lines++;
                return d;
            }
        } else if (filter === "" || filterAlgorithm === "") {
            if (displayAll) {
                lines++;
                return d;
            }
            else if (displayDead && d.summary != '') {
                lines++;
                return d;
            }
            else if (d.proofType !== "N/A") {
                lines++;
                return d;
            }
        }

    }, function (error, classes) {
        if (error) throw error;

        var root = d3.hierarchy({children: classes})
            .sum(function (d) {
                return 1;
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
                var color1;
                if (mode === "consensus") {
                    color1 = algoColor(d.data.proofType);
                } else {
                    color1 = algoColor(d.data.algorithm);
                }

                if (consensusLegend.indexOf(d.data.proofType) < 0) {
                    consensusLegend.push(d.data.proofType);
                    consensusLegendCounter[d.data.proofType] = 1;
                } else {
                    consensusLegendCounter[d.data.proofType] += 1;
                }

                if (algorithmLegend.indexOf(d.data.algorithm) < 0) {
                    algorithmLegend.push(d.data.algorithm);
                    algorithmLegendCounter[d.data.algorithm] = 1;
                } else {
                    algorithmLegendCounter[d.data.algorithm] += 1;
                }


                if (colors.indexOf(color1) < 0)
                    colors.push(color1);

                return color1;
            })
            .attr("class", function (d) {
//                 console.log(d.data);
                if (d.data.summary != '') {
                    return "tooltip1 dead"
                } else {
                    return "tooltip1"
                }
            })
            .attr("title", function (d) {
                return formatTitle(d.data);
            })
        ;


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
                return s.substring(0, d.r / 3);
            }).style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 24) + "px"; })
            .attr("dy", ".35em")
            .attr("class", function (d) {
                return "tooltip1";
            })
            .attr("title", function (d) {
                return formatTitle(d.data);
            })
        ;

        // dont move down, need to be in dom before tooltipster
        addLegend();

        var width = $(window).width();
        if (width > 767) {
            addTooltip();
        } else {
            addMobileTooltip();
        }

    });
};

function formatTitle(d) {
    var desc = d.desc != undefined ? d.desc : "";
    var ticker = d.ticker != undefined ? '<h4><i class="fas fa-coins fa-2x" style="color: #ffd700"></i> ' + d.symbol + '</h4>' : '';

    var isDead = '';
    if (d.summary != '') {

     isDead = '<h2><i class="fas fa-skull fa-3x"></i></h2>' +
               '<h2><a href="'+ d.durl + '" target="new">' + d.summary + '</a></h2>' +
               '<h2>'+d.lifespan+'</h2>';
    }

    return '<h1>' + d.coinName + '</h1>' +
        '<h2><i class="fas fa-coins"></i> ' + d.name + '</h2>' +
        isDead +
        '<h2>Algorithm: ' + d.algorithm + '</h2>' +
        '<h3>Proof Type: ' + d.proofType + '</h3>' +
        ticker +
        '<p>' + desc + '</p>';
}

function addTooltip() {
    $('.tooltip1').tooltipster({
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
    $('.tooltip1').tooltipster({
        theme: 'tooltipster-punk',
        position: 'bottom',
        'maxWidth': 200, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        interactive: true,
        trigger: 'custom', // add custom trigger
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

function escapeDoubleQuotes(str) {
    return str.replace(/\\([\s\S])|(")/g, "'"); //.replace(/\\([\s\S])|(')/g,"\\$1$2");
}

function getProofTypeTooltip(proof, legend) {
    if (proof == undefined)
        console.log("legend " + legend + ", add manualy  missing entry in js/proofType.js");

    var usedIn = proof[2] !== "" ? "Used in: " + proof[2] : "";

    var more = proof[3] !== "" ? "More: " + proof[3] : "";

    var s = "<h1>" + proof[0] + "</h1>" +
        "<p>" + proof[1] + "</p>" +
        "<p>" + usedIn + "</p>" +
        "<p>" + more + "</p>";
    // console.log(s);
    return s;
}

function getAlgorithmTooltip(proof, legend) {
    // console.log("legend " + legend + " got proof " + proof)
    //var usedIn = proof[2] !== "" ? "Used in: " + proof[2] : "";

    return ""; //"<h1>" + proof[0] + "</h1>" +
    // "<p>" + proof[1] + "</p>" +
    // "<p>" + usedIn + "</p>";
    //+"<p>More: " + proof[3] + "</p>";
}

function addLegend() {

    console.log("mode " + mode);

    if (mode === "algorithm") {
        var algorithmLegendText = "";
        var algorithmLegendLength = algorithmLegend.length;
        algorithmLegend.sort();

        for (var i = 0; i < algorithmLegendLength; i++) {
            var legend = algorithmLegend[i].trim();
            var legendCounter = algorithmLegendCounter[legend];
            var color = algoColor(legend);
            var algorithmEntry = getAlgorithm(legend);

            algorithmLegendText += "<a " +
                " class=\"tooltip1\" title=\"" + getAlgorithmTooltip(algorithmEntry, legend) + "\" " +
                " href=\"index.html?mode=algorithm&filterAlgorithm=" + legend + "\">" +
                " <b style='color: " + color + "'><i class=\"fas fa-square\"></i> (" + legendCounter + ") " + legend + "</b></a>&nbsp; ";
        }
        algorithmLegendText = algorithmLegendText + "    \n ";

        var filterIsActive = algorithmLegendLength === 1;
        if (filterIsActive) {
            algorithmLegendText = algorithmLegendText + " <a href='index.html?mode=algorithm'><i class=\"fas fa-arrow-circle-left\"></i> Back</a>";
        }

        var selected;
        if (algorithmLegendLength == 1) {
            selected = legend;
        } else {
            selected = algorithmLegendLength;
        }

        $('.title1').replaceWith("Blockchain Cryptographic Map");
        $('.title2').replaceWith("" + selected + " algorithms in all " + lines + " coins");
        $('.legend').replaceWith(algorithmLegendText);
        $('.subtitle').replaceWith("Click on a Algorithm to filter.");

    } else {
        var consensusLegendText = "";
        var consensusLegendLength = consensusLegend.length;
        consensusLegend.sort();

        for (var i = 0; i < consensusLegendLength; i++) {
            var legend = consensusLegend[i].trim();
            var legendCounter = consensusLegendCounter[legend];

            var color = algoColor(legend);
            var proofEntry = getProof(legend);
            //console.log(proof);

            var proofTypeTooltip = escapeDoubleQuotes(getProofTypeTooltip(proofEntry, legend));
            consensusLegendText += "<a class=\"tooltip1\" title=\"" + proofTypeTooltip + "\" " +
                " href=\"index.html?mode=consensus&filter=" + legend + "\">" +
                " <b style='color: " + color + "'><i class=\"fas fa-square\"></i> (" + legendCounter + ") " + legend + "</b></a>&nbsp; ";
        }
        consensusLegendText = consensusLegendText + "    \n ";

        var filterIsActive = consensusLegendLength === 1;
        if (filterIsActive) {
            consensusLegendText = consensusLegendText + " <a href='index.html?mode=consensus'><i class=\"fas fa-arrow-circle-left\"></i> Back</a>";
        }

        var selected;
        if (consensusLegendLength == 1) {
            selected = legend;
        } else {
            selected = consensusLegendLength;
        }

        $('.title1').replaceWith("Blockchain Consensus Map");
        $('.title2').replaceWith("" + selected + " Blockchain Consensus in all " + lines + " coins");
        $('.legend').replaceWith(consensusLegendText);
        $('.subtitle').replaceWith("Click on a Consensus to filter. All coins including unknown consensus <a href=\"index.html?mode=consensus&displayAll=true\" target=\"_blank\">click here</a>");
        // $('.subtitle').replaceWith("Click on a Consensus to filter. All coins including unknown consensus <a href=\"index.html?mode=consensus&displayAll=true\" target=\"_blank\">click here</a>, to display only dead coins <a href=\"index.html?mode=consensus&displayDead=true\" target=\"_blank\">click here</a> ");
    }


    $('.numberOfCoins').replaceWith(lines);
    $('.generated').replaceWith(generated);
    $('.deadcoin').replaceWith(deadCount);

};
