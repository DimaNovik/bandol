// Импортируем другие js-файлы

// Low-detail map
let chart = am4core.create("map", am4maps.MapChart);
chart.geodataNames = am4geodata_lang_RU;
chart.geodata = am4geodata_franceHigh;

chart.projection = new am4maps.projections.Miller();
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.seriesContainer.wheelable = false;
chart.maxZoomLevel = 1;

let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#477A6C");

let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FED3C3");
polygonSeries.mapPolygons.template.events.on("hit", function(ev) {

});
let videoPreview = document.querySelector('.section-video__preview');
let videoPreviewBtn = document.querySelector('.section-video__play');

videoPreview.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;
  videoPreviewBtn.style.left += `${x}px`;
  videoPreviewBtn.style.top += `${y}px`;
}, false);

videoPreview.addEventListener('mouseout', function (event) {
  videoPreviewBtn.classList.remove('focused');
}, false);

// document.addEventListener('mousemove', function(ev){
//   document.getElementsByClassName('section-video__preview').style.transform = 'translateY('+(ev.clientY-80)+'px)';
//   document.getElementsByClassName('section-video__preview').style.transform += 'translateX('+(ev.clientX-100)+'px)';
// },false);