// Импортируем другие js-файлы
// Low-detail map
let chart = am4core.create("map", am4maps.MapChart);
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
polygonTemplate.events.on("over", function(ev) {
  setDescriptionOnHover(ev.target.dataItem.dataContext.name);
});
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FED3C3");

const MAP_AREA_INFO = [
  {
    name: 'Nouvelle-Aquitaine',
    text: 'Ирландец Гэвин Крисфилд пересек Ирландское море, затем Ла-Манш после 10 лет работы в лучших ресторанах Лондона, в качестве сомелье. Представляя символ возрождения Лангедока, он обеспечивает очень точное мастерство, чтобы передать свое видение терруара: "Цель - достичь гармонии и элегантности”'
  },
  {
    name: 'Occitanie',
    text: '2Ирландец Гэвин Крисфилд пересек Ирландское море, затем Ла-Манш после 10 лет работы в лучших ресторанах Лондона, в качестве сомелье. Представляя символ возрождения Лангедока, он обеспечивает очень точное мастерство, чтобы передать свое видение терруара: "Цель - достичь гармонии и элегантности”'
  },
  {
    name: 'Pays de la Loire',
    text: '3Ирландец Гэвин Крисфилд пересек Ирландское море, затем Ла-Манш после 10 лет работы в лучших ресторанах Лондона, в качестве сомелье. Представляя символ возрождения Лангедока, он обеспечивает очень точное мастерство, чтобы передать свое видение терруара: "Цель - достичь гармонии и элегантности”'
  }
]




function setDescriptionOnHover(name) {
  let descField = document.querySelector('.section-map__info');
  let descFieldText = document.querySelector('.section-map__info p');
  let currentDescription = MAP_AREA_INFO.filter(item => item.name === name)[0];
  
  descField.classList.remove('section-map__info--animate');
  
  if(currentDescription) {
    setTimeout(() => {
      descField.classList.add('section-map__info--animate');
      descFieldText.innerHTML = currentDescription.text;
    }, 1000);
  }
}
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
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      direction = 2;
    }
    else if (curScroll < prevScroll) {
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

(function playVideo () {
  let videoTag = document.getElementById('video');
  let playBtn = document.getElementById('play');
  
  playBtn.addEventListener('click', function (){
    videoTag.play();
    playBtn.style.visibility = 'hidden';
  });
  
  videoTag.addEventListener('click', function () {
    videoTag.pause();
    playBtn.style.visibility = 'visible';
  });
})();