var format = d3.format(".2f");

var totalRaised = 0;
var legends = [];
var colors = [];
var lines = 1;

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

function redraw() {
    var countryParam = GetUrlValue('country');
    if (typeof countryParam !== 'undefined') {
        country = countryParam;
    }

    main("https://ico.tokens-economy.com/generated/" + country + ".csv");
}

//window.addEventListener("resize", redraw);

var country = "switzerland";
$(document).ready(function () {
    redraw();
});


function main(file) {
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

    var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var pack = d3.pack()
        .size([width, height])
        .padding(1.5);

    d3.csv(file, function (d) {
        if (d.raised != undefined) {
            var value = d.raised;

            lines++;

            d.value = +value;
            if (d.value) return d;
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

        let nodes = pack(root).leaves();
        var node = svg.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            }).call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        simulation
            .nodes(nodes)
            .on("tick", ticked);

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        function ticked() {
            node
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
        }


        node.append("circle")
            .attr("id", function (d) {
                return d.data.name;
            })
            .attr("r", function (d) {
                return d.r;
            })
            .style("fill", function (d) {
                var color1 = getColor(d.data.cat1);

                if (legends.indexOf(d.data.cat1) < 0)
                    legends.push(d.data.cat1);

                if (colors.indexOf(color1) < 0)
                    colors.push(color1);

                return color1;
            })
            .attr("class", function (d) {
                return "tooltip";
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
            // .selectAll("tspan")
            // .data(function (d) {
            //     return d.data.name;
            // })
            // .enter().append("tspan")
            // .attr("x", 0)
            // .attr("y", function (d, i, nodes) {
            //     return 13 + (i - nodes.length / 2 - 0.5) * 10;
            // })
            .text(function (d) {
                var s = d.data.name;
                //s = s + ": $" + d.data.raised + "M";
                return s.substring(0, d.r / 3);
            })
            .attr("class", function (d) {
                return "tooltip";
            })
            .attr("title", function (d) {
                return formatTitle(d.data);
            })
        ;

        // node.append("title")
        //     .text(function (d) {
        //         return formatTitle(d.data);
        //     });
        // @v4 strength to apply to the position forces
        var forceStrength = 0.03;

        // Locations to move bubbles towards, depending
        // on which view mode is selected.
        var center = {x: width / 2, y: height / 2};


        // var simulation = d3.forceSimulation()
        //     .velocityDecay(0.2)
        //     .force('x', d3.forceX().strength(forceStrength).x(center.x))
        //     .force('y', d3.forceY().strength(forceStrength).y(center.y))
        //     .force('charge', d3.forceManyBody().strength(charge))
        //     .on('tick', ticked);
        //
        // simulation.force('center', d3.forceCenter(width / 2, height / 2));


        var width = $(window).width();
        if (width > 767) {
            addTooltip();
        } else {
            addMobileTooltip();
        }

        addLegend();

    });
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

function formatTitle(d) {
    var desc = d.desc != undefined ? d.desc : "";

    var cat1, cat2 = "";
    if (d.cat1) {
        cat1 = d.cat1;
    }
    if (d.cat2) {
        cat2 = d.cat2;
    }
    var category = cat1 + (cat2 != "" ? " - " + cat2 : "");

    var ticker = d.ticker != undefined ? '<h4><i class="fas fa-coins fa-2x" style="color: #ffd700"></i> ' + d.ticker + '</h4>' : '';
    var start = d.start != undefined ? '' + d.start + ' - ' : '';
    var end = d.end != undefined ? '' + d.end + '' : '';

    totalRaised = totalRaised + d.value;

    // click do not work
    //var www = d.www != undefined ? '<h1><a href="' + d.www + '" target="_blank">' + d.name + '</a></h1>' : '<h1>' + d.name + '</h1>';

    return '<h1>' + d.name + '</h1>' +
        '<h2>' + category + '</h2>' +
        '<h3>' + format(d.value) + ' Million</h3>' +
        '<h4>' + start + end + '<h4>' +
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addLegend() {
    var text = "";
    var arrayLength = legends.length;
    for (var i = 0; i < arrayLength; i++) {
        text = text + "<b style='color: " + colors[i] + "'><i class=\"fas fa-square\"></i> " + legends[i] + "</b>&nbsp; ";
    }
    text = text + "";

    $('.legend').replaceWith(text);
    $('.numberOfIco').replaceWith(lines);
    $('.country').replaceWith(capitalizeFirstLetter(country));
    $('.totalRaised').replaceWith(format(totalRaised));
};