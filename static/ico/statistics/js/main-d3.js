var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = (x - margin.right - margin.left),
    height = .8 * (y - margin.top - margin.bottom);

var root;
var names;
var rows;

var diameter = Math.max(Math.min(height, width), 100);
var format = d3.format("$,.0f");

var TITLE = "ICO in Switzerland";

var galaxy = d3.layout.galaxy()
    .size([width, height])
    .spread(4)
    //    .initialAngle(0) // radians from down
    .value(function (d) {
        return d.size;
    });

function main(file) {

    d3.text(file,
        function (error, txtdata) {
            rows = d3.csv.parseRows(txtdata,
                function (d, i) {
                    if (i == 0) {
                        names = d;
                        return null;
                    }
                    else {
                        d[d.length - 3] = +d[d.length - 3];
                        return d;
                    }
                });

            rows.forEach(function (row, i, a) {
                var rnames = {};
                for (var j = 0; j < row.length - 3; j++) {
                    if (rnames[row[j].toLowerCase()]) {
                        row[j] = '';
                    }
                    rnames[row[j].toLowerCase()] = true;
                }
            });

            root = unflatten(rows, TITLE);

            var lines = d3.svg.line(); // unused !
            var nodes = galaxy.nodes(root);
            var links = galaxy.links(nodes);

            var link = svg.selectAll(".link")
                .data(links)
                .enter().append("line")
                .attr("class", "link")
                .style("stroke-width", function (d) {
                    return Math.sqrt(d.value);
                })
                .call(truncated_line)
            ;

            function truncated_line(l) {
                function len(d) {
                    return Math.sqrt(Math.pow((d.target.y - d.source.y), 2) +
                        Math.pow((d.target.x - d.source.x), 2));
                }

                l.attr('x1', function (d) {
                    return d.source.x +
                        (d.target.x - d.source.x) * d.source.r / len(d);
                });
                l.attr('y1', function (d) {
                    return d.source.y +
                        (d.target.y - d.source.y) * d.source.r / len(d);
                });
                l.attr('x2', function (d) {
                    return d.target.x +
                        (d.source.x - d.target.x) * d.target.r / len(d);
                });
                l.attr('y2', function (d) {
                    return d.target.y +
                        (d.source.y - d.target.y) * d.target.r / len(d);
                });
            }

            var node = svg.datum(root).selectAll(".node")
                .data(nodes)
                .enter().append("g")
                .attr("class", function (d) {
                    return d.children ? "node" : "leaf node";
                })
                .attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
            ;

            /*
            node.append("title")
                .text(function(d) { 
                    return d.name + ": " + format(d.value)+"M"; 
                })
            ;*/
            node.append("circle")
                .attr("r", function (d) {
                    return d.r;
                })
                .attr("class", function (d) {
                    return "tooltip";
                })
                .attr("title", function (d) {
                    return formatTitle(d);
                }).transition()
            ;
            node.append("text")
                .attr("dy", ".3em")
                .attr("class", function (d) {
                    return "tooltip";
                })
                .attr("title", function (d) {
                    return formatTitle(d);
                })
                .style("text-anchor", "middle")
                .text(function (d) {
                    //return d.name.substring(0, d.r / 3);

                    var itsText = "";
                    var displayAmount = d.children;
                    var displayAmount = true;
                    if (displayAmount) {
                        itsText = d.name + ": " + (format(d.value) + "M")
                    } else {
                        itsText =  d.name;
                    }
                    return itsText.substring(0, d.r / 3);
                    /*
                    var text = '<tspan x="0" dy="1.2em">'+d.name.substring(0, d.r / 3)+'</tspan>'
                    text = text+'<tspan x="0" dy="1.2em">'+(format(d.value)+"M").substring(0, d.r / 3)+'</tspan>';
                    return text;*/

                })
            // .append("tspan")
            // .attr("x", "10")
            // .attr("y", ".9em")
            // .text(function (d) {
            //     //return d.name.substring(0, d.r / 3);
            //     return (format(d.value) + "M").substring(0, d.r / 3);
            //     /*
            //     var text = '<tspan x="0" dy="1.2em">'+d.name.substring(0, d.r / 3)+'</tspan>'
            //     text = text+'<tspan x="0" dy="1.2em">'+(format(d.value)+"M").substring(0, d.r / 3)+'</tspan>';
            //     return text;*/
            //
            // })
            ;

            addTooltip();
        });
}//main

//d3v4
/*.call(d3.zoom().on("zoom", function () {
   svg.attr("transform", d3.event.transform)
}))*/

var svg = d3.select(".chart")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .call(d3.behavior.zoom().on("zoom", function () {
        svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
    }))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
;

function formatTitle(d) {
    var desc = d.desc != undefined ? d.desc : "";

    var cat1, cat2 = "";
    if (d.parent) {
        cat1 = d.parent.name;
        if (cat1 === TITLE || cat2 === undefined) {
            cat1 = "";
        }
        cat2 = "";
        if (d.parent.parent) {
            cat2 = d.parent.parent.name;
        }
        if (cat2 === TITLE || cat2 === undefined) {
            cat2 = "";
        }
    }
    var category = cat1 + (cat2 != "" ? " - " + cat2 : "");

    var ticker =   d.ticker != undefined ?  '<h4>(' + d.ticker + ')</h4>' : '';

    return '<h1>' + d.name + '</h1>' +
        '<h2>' + category + '</h2>' +
        '<h3>' + format(d.value) + ' Million</h3>' +
         ticker +
        '<p>' + desc + '</p>';
}


function addTooltip() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk',
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

function unflatten(rows, rootName) {
//    console.log("foo:", rows);
    var root = {name: rootName, children: [], childmap: {}, value: 0, depth: 0};
    var allnodes = [];
    for (var i = 0; i < rows.length; i++) { // rows
        var row = rows[i];

        for (var c = 0, parent = root; c < names.length - 3; c++) { //cols
            var node, label = row[c];

            if (!parent.childmap[label]) {
                node = {
                    name: label, children: [],
                    childmap: {}, parent: parent,
                    value: 0, depth: parent.depth + 1
                };
                allnodes.push(node);
                if (!!label) {
                    parent.childmap[label] = node;
                    parent.children.push(node);
                }
            }
            if (c == names.length - 4) { // amount raised
                node.value = row[row.length - 3];

                node.desc = row[row.length - 2];
                node.ticker = row[row.length - 1];

                // console.log(row.length - 2);

                // add value to all parents value;
                for (var p = parent; p; p = p.parent) {
                    p.value += node.value;
                }
            }


            if (!!label) {
                parent = parent.childmap[label];
            }
        }
    }
    // remove the children of leaf nodes
    allnodes.forEach(function (n, i, a) {
        if (n.children.length === 0) {
            n.size = n.value;
            delete n.children;
        }
    });
    return root;
};
