
// Low-detail map
let chart = am4core.create("map", am4maps.MapChart);
console.log(am4geodata_lang_RU);
chart.geodataNames = am4geodata_lang_RU;
chart.geodata = am4geodata_franceHigh;

chart.projection = new am4maps.projections.Miller();
chart.seriesContainer.resizable = false;

let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#477A6C");
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FED3C3");
polygonSeries.mapPolygons.template.events.on("hit", function(ev) {

});
