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
polygonSeries.events.on("hover", function (ev) {
  console.log(ev);
})
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#477A6C");

let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FED3C3");
const swiper = new Swiper(".slider", {

});
(function(){
  
  var doc = document.documentElement;
  var w = window;
  
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  
  var header = document.getElementById('header');
  
  var checkScroll = function() {
    
    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */
    
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }
    
    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };
  
  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      
      //replace 52 with the height of your header in px
      
      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);
  
})();