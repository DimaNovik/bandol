document.addEventListener('mousemove', function(ev){
  document.getElementsByClassName('section-video__preview').style.transform = 'translateY('+(ev.clientY-80)+'px)';
  document.getElementsByClassName('section-video__preview').style.transform += 'translateX('+(ev.clientX-100)+'px)';
},false);
