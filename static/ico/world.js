google.charts.load('current', {'packages':['geochart'], 'mapsApiKey': 'AIzaSyDoFsHMLWFiShgjiZZqrhuoieyr3yHH08g'});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
    $(document).ready(function(){
        // hack
        if (region == "39") {
            region ="039";
        }
        if (region == "35") {
            region ="035";
        }
        if (region == "9") {
            region ="009";
        }
        if (region == "2") {
            region ="002";
        }
        if (region == "17") {
            region ="017";
        }
        if (region == "15") {
            region ="015";
        }
        if (region == "18") {
            region ="018";
        }

        //create trigger to resizeEnd event
        $(window).resize(function() {
            if(this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function() {
                $(this).trigger('resizeEnd');
            }, 500);
        });

        // tooltip: { isHtml: true, shadow: false,positioner: function(labelWidth, labelHeight, point) {
        //     return {
        //         x: point.plotX - labelWidth/2,
        //         y: point.plotY - labelHeight/2
        //     };},trigger: 'selection' }};

        function draw(){
            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            var options = {
                width: $(window).width(),
                height: $(window).height(),
                textStyle: {color: '#FF0000'},
                colorAxis: {colors: ['#aaaaaa','red', '#00cc33', '#04a12b', '#0bf446']},
                backgroundColor: '#81d4fa',
                datalessRegionColor: 'white',
                defaultColor: 'gray',
                showColorCode: true,
                tooltip: { isHtml: true, trigger: 'selection' }};

            if (region != "") {
                options.region = region;
            }

            chart.draw(google.visualization.arrayToDataTable(data), options);
        }

        draw();

        //redraw graph when window resize is completed
        $(window).on('resizeEnd', function() {
            console.log('resize');
            draw();
        });

    });
}
