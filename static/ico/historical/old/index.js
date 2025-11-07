'use strict';

const margin = {top: 20, right: 30, bottom: 40, left: 260};
const width = 1024 - margin.left - margin.right;
const height = 768 - margin.top - margin.bottom;

const leftPadding = 5;

// Contains string version of date
const yearsLegend = [];

const delay = function (d, i) {
    return i * 40;
};

function sortData(data) {
    return data.sort((a, b) => b.value - a.value);
}

function removeGeoAreasWithNoData(data) {
    return data.filter(d => d.value);
}

function prepareData(data) {
    return data.reduce((accumulator, d) => {
        //console.log("accumulator "+ i++ +" "  + JSON.stringify(accumulator));

        var column = 2; // Name, ticker, >2<
        Object.keys(d).forEach((k) => {
            if (!Number.isInteger(+k)) {
                return;
            }

            yearsLegend.push(k);

            //console.log("d[k] " + k + "=" + d[k]);
            let value;
            if (d[k] === '..') {
                value = 0;
            } else {
                value = +d[k];
            }
            const newEntry = {
                value,
                ticker: d.Ticker,
                name: d.Name,
            };
            if (accumulator[column]) {
                accumulator[column].push(newEntry);
            } else {
                accumulator[column] = [newEntry];
            }

            column++;

        });
        return accumulator;
    }, {});
}

function xAccessor(d) {
    return d.value;
}

function yAccessor(d) {
    return d.name;
}

var xScale = d3.scaleLinear()
        .range([0, width])
    //.domain([0, 1])
;

const yScale = d3.scaleBand()
    .rangeRound([0, height], 0.1)
    .padding(0.1);

function drawXAxis(el, data, t) {
    let axis = el.select('.axis--x');
    if (axis.empty()) {
        axis = el.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(${leftPadding},${height})`);
    }

    axis.transition(t)
        .call(d3.axisBottom(xScale))
        .selectAll('g')
        .delay(delay);
}

function drawYAxis(el, data, t) {
    let axis = el.select('.axis--y');
    if (axis.empty()) {
        axis = el.append('g')
            .attr('class', 'axis axis--y');
    }

    axis.transition(t)
        .call(d3.axisLeft(yScale))
        .selectAll('g')
        .delay(delay);
}

function drawBars(el, data, t) {
    let barsG = el.select('.bars-g');
    if (barsG.empty()) {
        barsG = el.append('g')
            .attr('class', 'bars-g');
    }

    const bars = barsG
        .selectAll('.bar')
        .data(data, yAccessor);
    bars.exit()
        .remove();

    var oneBar = bars.enter();

    var g = oneBar.append('g');

    var rect = oneBar.append('rect')
        .attr('class', d => 'bar ' + d.ticker)
        .attr('x', leftPadding)
        .merge(bars).transition(t)
        .attr('y', d => yScale(yAccessor(d)))
        .attr('width', d => xScale(xAccessor(d)))
        .attr('height', yScale.bandwidth());

    // g.append("text").text("sample!!!");
    rect.delay(delay);
}


function run() {
    const svg = d3.select('.chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const file = "./data.csv";

    fetch(file)
        .then((res) => res.text())
        .then((res) => {
            var timeSlotCounter = 0;

            var data = prepareData(d3.csvParse(res));
            var dataMap = Object.keys(data).map(d => +d);

            //console.log("years are " + dataMap);

            var lastYear = dataMap[dataMap.length - 1];
            var dataSlot = dataMap[timeSlotCounter];


            var selectedData = removeGeoAreasWithNoData(data[dataSlot]);
            var geoAreas = selectedData.map(yAccessor);

            d3.select('.year').text(dataSlot);

            yScale.domain(geoAreas);
            drawXAxis(svg, selectedData);
            drawYAxis(svg, selectedData);
            drawBars(svg, selectedData);

            const interval = d3.interval(() => {
                const t = d3.transition().duration(200);

                dataSlot = dataMap[timeSlotCounter];

                selectedData = removeGeoAreasWithNoData(data[dataSlot]);

                console.log("currentTimeSlot " + dataSlot + " " + JSON.stringify(selectedData));

                var max = d3.max(selectedData, function (d) {
                    return d.value;
                });

                var realYear = yearsLegend[timeSlotCounter].toString();
                var formatted = realYear.substring(0, 2) + "." + realYear.substring(2, 4) + "." + realYear.substring(4, 8);
                d3.select('.year').text(formatted);


                yScale.domain(selectedData.map(yAccessor));
                drawYAxis(svg, selectedData, t);

                xScale.domain(selectedData.map(xAccessor));
                //drawXAxis(svg, selectedData, t);

                drawBars(svg, selectedData, t);

                if (dataSlot === lastYear) {
                    interval.stop();
                }

                timeSlotCounter++;
            }, 1000);
        });
}