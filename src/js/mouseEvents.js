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
