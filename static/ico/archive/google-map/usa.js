var generated = 'Thu Jul 05 12:00:03 CEST 2018';
google.charts.load('current', {'packages':['geochart'], 'mapsApiKey': 'AIzaSyDoFsHMLWFiShgjiZZqrhuoieyr3yHH08g'});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
 $(document).ready(function(){

     //create trigger to resizeEnd event
     $(window).resize(function() {
         if(this.resizeTO) clearTimeout(this.resizeTO);
         this.resizeTO = setTimeout(function() {
             $(this).trigger('resizeEnd');
         }, 500);
     });

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
         region: 'US',
         displayMode: 'regions',
         resolution: 'provinces',
         tooltip: { isHtml: true, trigger: 'selection' }};
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
