// URL: https://observablehq.com/@drkane/bar-chart-race-the-largest-charities-in-england-and-wales
// Title: Bar chart race — the largest charities in England and Wales
// Author: David Kane (@drkane)
// Version: 1236
// Runtime version: 1


const m0 = {
    id: "da2a2b6689028ae1@1236",
    variables: [
        {
            inputs: ["md"],
            value: (function (md) {
                return (
                    md``
                )
            })
        },
        {
            inputs: ["html"],
            value: (function (html) {
                return (
                    html`<style>
text{
  font-size: 16px;
  font-family: Open Sans, sans-serif;
}
text.title{
  font-size: 28px;
  font-weight: 600;
}
text.subTitle{
  font-weight: 500;
  fill: #777777;
}
text.label{
  font-size: 18px;
}
.map-legend text{
  font-size: 14px;
  fill: #777777;
}
text.caption{
  font-weight: 400;
  font-size: 14px;
  fill: #999999;
}
text.yearText{
  font-size: 96px;
  font-weight: 700;
  fill: #cccccc;
}
text.yearIntro{
  font-size: 48px;
  font-weight: 700;
  fill: #cccccc;
}
.tick text {
  fill: #777777;
}
.xAxis .tick:nth-child(2) text {
  text-anchor: start;
}
.tick line {
  shape-rendering: CrispEdges;
  stroke: #dddddd;
}
.tick line.origin{
  stroke: #aaaaaa;
}
path.domain{
  display: none;
}
.observablehq--inspect {
    display: none;
}
</style>`
                )
            })
        },
        {
            name: "tickDuration",
            value: (function () {
                return (
                    2800
                )
            })
        },
        {
            name: "top_n",
            value: (function () {
                return (
                    30
                )
            })
        },
        {
            name: "startYear",
            value: (function () {
                return (
                    2013
                )
            })
        },
        {
            name: "endYear",
            value: (function () {
                return (
                    2019
                )
            })
        },
        {
            name: "chart",
            inputs: ["d3", "DOM", "width", "height", "top_n", "haloHighlight", "startYear", "dataset", "halo", "tickDuration", "endYear"],
            //inputs: [],
            value: (function (d3, DOM, width, height, top_n, haloHighlight, startYear, dataset, halo, tickDuration, endYear) {
                    const svg = d3.select(DOM.svg(width, height));

                    const margin = {
                        top: 80,
                        right: 0,
                        bottom: 5,
                        left: 0
                    };

                    let barPadding = (height - (margin.bottom + margin.top)) / (top_n * 5);

                    let title = svg.append('text')
                        .attrs({
                            class: 'title',
                            y: 24
                        })
                        .html('');

                    haloHighlight(title, 250, 2, 1, '#000000');

                    let subTitle = svg.append('text')
                        .attrs({
                            class: 'subTitle',
                            y: 55
                        })
                        .html('Volume');

                    haloHighlight(subTitle, 1750, 1, 1, '#777777');

                    let year = startYear;

                    dataset.forEach(d => {
                        d.value = +d.value,
                            d.lastValue = +d.lastValue,
                            d.value = isNaN(d.value) ? 0 : d.value,
                            d.year = +d.year,
                            d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
                        //d.colour = "#e6194b"
                    });

                    let yearSlice = dataset.filter(d => d.year == year && !isNaN(d.value))
                        .sort((a, b) => b.value - a.value)
                        .slice(0, top_n);

                    yearSlice.forEach((d, i) => d.rank = i);

                    let x = d3.scaleLinear()
                        .domain([0, d3.max(yearSlice, d => d.value)])
                        .range([margin.left, width - margin.right - 65]);

                    let y = d3.scaleLinear()
                        .domain([top_n, 0])
                        .range([height - margin.bottom, margin.top]);

                    let groups = dataset.map(d => d.group);
                    groups = [...new Set(groups)];

                    let colorRange = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
                    // ["#adb0ff", "#ffb3ff", "#90d595", "#e48381", "#aafbff", "#f7bb5f", "#eafb50"];

                    let colourScale = d3.scaleOrdinal()
                        .range(colorRange)
                        .domain(groups);

                    let xAxis = d3.axisTop()
                        .scale(x)
                        .ticks(width > 500 ? 5 : 2)
                        .tickSize(-(height - margin.top - margin.bottom))
                        .tickFormat(d => "m" + d3.format(',.0f')(d) + " ");

                    svg.append('g')
                        .attrs({
                            class: 'axis xAxis',
                            transform: `translate(0, ${margin.top})`
                        })
                        .call(xAxis)
                        .selectAll('.tick line')
                        .classed('origin', d => d == 0);

                    svg.selectAll('rect.bar')
                        .data(yearSlice, d => d.name)
                        .enter()
                        .append('rect')
                        .attrs({
                            class: 'bar',
                            x: x(0) + 1,
                            width: d => x(d.value) - x(0) - 1,
                            y: d => y(d.rank) + 5,
                            height: y(1) - y(0) - barPadding
                        })
                        .styles({
                            // fill: d => colourScale(d.group)
                            fill: d => d.colour
                        });

                    svg.selectAll('text.label')
                        .data(yearSlice, d => d.name)
                        .enter()
                        .append('text')
                        .attrs({
                            class: 'label',
                            transform: d => `translate(${x(d.value) - 5}, ${y(d.rank) + 15 + ((y(1) - y(0)) / 2) - 8})`,
                            'text-anchor': 'end'
                        })
                        .selectAll('tspan')
                        .data(d => [{text: d.name, opacity: 1, weight: 600}])
                        .enter()
                        .append('tspan')
                        .attrs({
                            x: 0,
                            dy: (d, i) => i * 16
                        })
                        .styles({
                            // opacity: d => d.opacity,
                            fill: d => d.weight == 400 ? '#444444' : '',
                            'font-weight': d => d.weight,
                            'font-size': d => d.weight == 400 ? '12px' : ''
                        })
                        .html(d => d.text);

                    svg.selectAll('text.valueLabel')
                        .data(yearSlice, d => d.name)
                        .enter()
                        .append('text')
                        .attrs({
                            class: 'valueLabel',
                            x: d => x(d.value) + 5,
                            y: d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1,
                        })
                        .text(d => "m" + d3.format(',.0f')(d.lastValue) + " " + d.name);

                    let credit = svg.append('text')
                        .attrs({
                            class: 'caption',
                            x: width,
                            y: height - 28
                        })
                        .styles({
                            'text-anchor': 'end'
                        })
                        .html('copyright (c) 2019 tokens-economy.com / cédric walter')
                        .call(halo, 10);

                    let sources = svg.append('text')
                        .attrs({
                            class: 'caption',
                            x: width,
                            y: height - 6
                        })
                        .styles({
                            'text-anchor': 'end'
                        })
                        .html('Sources: CoinmarketCap')
                        .call(halo, 10);

                    let yearIntro = svg.append('text')
                        .attrs({
                            class: 'yearIntro',
                            x: width - 225,
                            y: height - 195
                        })
                        .styles({
                            'text-anchor': 'end'
                        })
                        .html('Year: ');

                    haloHighlight(yearIntro, 3000, 3, 1, '#cccccc');

                    let yearText = svg.append('text')
                        .attrs({
                            class: 'yearText',
                            x: width - 225,
                            y: height - 195
                        })
                        // .styles({
                        //   'text-anchor': 'end'
                        // })
                        .html(~~year);

                    yearText.call(halo, 10);

                    haloHighlight(yearText, 3000, 8, 1, '#cccccc');

                    d3.timeout(_ => {

                        svg.selectAll('.yearIntro')
                            .transition()
                            .duration(1000)
                            .ease(d3.easeLinear)
                            .styles({
                                opacity: 0
                            });

                        let ticker = d3.interval(e => {

                            yearSlice = dataset.filter(d => d.year == year && !isNaN(d.value))
                                .sort((a, b) => b.value - a.value)
                                .slice(0, top_n);

                            yearSlice.forEach((d, i) => d.rank = i);

                            x.domain([0, d3.max(yearSlice, d => d.value)]);

                            svg.select('.xAxis')
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .call(xAxis);

                            let bars = svg.selectAll('.bar').data(yearSlice, d => d.name);

                            bars
                                .enter()
                                .append('rect')
                                .attrs({
                                    class: d => `bar ${d.name.replace(/\s/g, '_')}`,
                                    x: x(0) + 1,
                                    width: d => x(d.value) - x(0) - 1,
                                    y: d => y(top_n + 1) + 5,
                                    height: y(1) - y(0) - barPadding
                                })
                                .styles({
                                    fill: d => colourScale(d.group)
                                })
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    y: d => y(d.rank) + 5
                                });

                            bars
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    width: d => x(d.value) - x(0) - 1,
                                    y: d => y(d.rank) + 5
                                });

                            bars
                                .exit()
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    width: d => x(d.value) - x(0) - 1,
                                    y: d => y(top_n + 1) + 5
                                })
                                .remove();

                            let labels = svg.selectAll('.label').data(yearSlice, d => d.name);

                            labels
                                .enter()
                                .append('text')
                                .attrs({
                                    class: 'label',
                                    transform: d => `translate(${x(d.value) - 5}, ${y(top_n + 1) + 15 + ((y(1) - y(0)) / 2) - 8})`,
                                    'text-anchor': 'end'
                                })
                                .html('')
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    transform: d => `translate(${x(d.value) - 5}, ${y(d.rank) + 15 + ((y(1) - y(0)) / 2) - 8})`
                                });

                            let tspans = labels
                                .selectAll('tspan')
                                .data(d => [{text: d.name, opacity: 1, weight: 600}]);

                            tspans.enter()
                                .append('tspan')
                                .html(d => d.text)
                                .attrs({
                                    x: 0,
                                    dy: (d, i) => i * 16
                                })
                                .styles({
                                    // opacity: d => d.opacity,
                                    fill: d => d.weight == 400 ? '#444444' : '',
                                    'font-weight': d => d.weight,
                                    'font-size': d => d.weight == 400 ? '12px' : ''
                                });

                            tspans
                                .html(d => d.text)
                                .attrs({
                                    x: 0,
                                    dy: (d, i) => i * 16
                                })
                                .styles({
                                    // opacity: d => d.opacity,
                                    fill: d => d.weight == 400 ? '#444444' : '',
                                    'font-weight': d => d.weight,
                                    'font-size': d => d.weight == 400 ? '12px' : ''
                                });

                            tspans.exit()
                                .remove();

                            labels
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    transform: d => `translate(${x(d.value) - 5}, ${y(d.rank) + 15 + ((y(1) - y(0)) / 2) - 8})`
                                });

                            labels
                                .exit()
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    transform: d => `translate(${x(d.value) - 8}, ${y(top_n + 1) + 15})`
                                })
                                .remove();

                            let valueLabels = svg.selectAll('.valueLabel').data(yearSlice, d => d.name);

                            valueLabels
                                .enter()
                                .append('text')
                                .attrs({
                                    class: 'valueLabel',
                                    x: d => x(d.value) + 5,
                                    y: d => y(top_n + 1) + 5,
                                })
                                .text(d => "m" + d3.format(',.0f')(d.lastValue) + " " + d.name)
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    y: d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1
                                });

                            valueLabels
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    x: d => x(d.value) + 5,
                                    y: d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1
                                })
                                .tween("text", function (d) {
                                    let i = d3.interpolateRound(d.lastValue, d.value);
                                    return function (t) {
                                        this.textContent = "m" + d3.format(',.0f')(i(t)) + " " + d.name;
                                    };
                                });

                            valueLabels
                                .exit()
                                .transition()
                                .duration(tickDuration)
                                .ease(d3.easeLinear)
                                .attrs({
                                    x: d => x(d.value) + 5,
                                    y: d => y(top_n + 1) + 5
                                })
                                .remove();

                            yearText.html(~~year);

                            if (year == endYear) ticker.stop();
                            year = year + 1;
                        }, tickDuration);

                    }, 6000);

                    return svg.node();
                }
            )
        },
        {
            name: "height",
            value: (function () {
                return (
                    800
                )
            })
        },
        {
            name: "dataset",
            value: (function () {
                return cryptoDataset;
            })
        },
        {
            name: "haloHighlight",
            inputs: ["d3"],
            value: (function (d3) {
                return (
                    function (text, delay, strokeWidth = 1, opacity = 1, color = '#000000') {
                        let textObject = text.select(function () {
                            return this.parentNode.insertBefore(this.cloneNode(true), this);
                        })
                            .styles({
                                fill: '#ffffff',
                                stroke: color,
                                'stroke-width': 0,
                                'stroke-linejoin': 'round',
                                opacity: opacity
                            });
                        textObject
                            .transition()
                            .ease(d3.easeLinear)
                            .delay(delay)
                            .duration(250)
                            .styles({
                                'stroke-width': strokeWidth
                            })
                            .transition()
                            .ease(d3.easeLinear)
                            .delay(500)
                            .duration(250)
                            .styles({
                                'stroke-width': 0
                            });
                    }
                )
            })
        },
        {
            name: "halo",
            value: (function () {
                return (
                    function (text, strokeWidth, color = '#ffffff') {
                        text.select(function () {
                            return this.parentNode.insertBefore(this.cloneNode(true), this);
                        })
                            .styles({
                                fill: color,
                                stroke: color,
                                'stroke-width': strokeWidth,
                                'stroke-linejoin': 'round',
                                opacity: 1
                            });
                    }
                )
            })
        },
        {
            name: "d3",
            inputs: ["require"],
            value: (function (require) {
                return (
                    require('d3-scale', 'd3-array', 'd3-fetch', 'd3-selection', 'd3-timer', 'd3-color', 'd3-format', 'd3-ease', 'd3-interpolate', 'd3-axis', 'd3-geo', 'd3-selection-multi')
                )
            })
        }
    ]
};

const notebook = {
    id: "da2a2b6689028ae1@1236",
    modules: [m0]
};

export default notebook;
