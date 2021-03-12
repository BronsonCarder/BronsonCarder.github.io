// Scrollable Sticky Header
window.onscroll = function() {
  myFunction()
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Automatically stop when starting new track
document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);

// Stop carousel from autosliding

// $('.carousel').carousel({interval: false});
// $(document).on('mouseleave', '.carousel', function() {
//     $(this).carousel('pause');
// });

// $.fn.carousel.defaults = {
//   interval: false
// , pause: 'hover'
// }

// $(function() {
//     $('.carousel').each(function(){
//         $(this).carousel({
//             interval: false
//         });
//     });
// });​

// $(document).ready(function() {
//     $('.gallery-carousel').each(function(){
//         $(this).carousel({
//             interval: false
//         });
//     });
// });

// Four different solutions tried and failed... I cannot figure this out
