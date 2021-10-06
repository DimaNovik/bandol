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
