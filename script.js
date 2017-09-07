// // soon
// var maxElements = 210;
// var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99'];
//
// var createElements = (function() {
//   var sectionEl = document.createElement('section');
//   for (var i = 0; i < maxElements; i++) {
//     var el = document.createElement('div');
//     el.style.background = colors[anime.random(0, 3)];
//     sectionEl.appendChild(el);
//   }
//   document.body.appendChild(sectionEl);
// })();
var state = 0;
var direct = 0;
$('#button').click(function() {
  if(state == 0) {
    $('#main').css({'background-color': 'rgb(106, 255, 151)'});
    state = 1;
    anime({
      targets: '.w',
      translateX: function() { return anime.random(-30, 30) + 'rem'; },
      translateY: function() { return anime.random(-30, 30) + 'rem'; },
      scale: function() { return anime.random(10, 20) / 10; },
      rotate: function() { return anime.random(-360, 360); },
      delay: function() { return 000 + anime.random(0, 000); },
      duration: function() { return anime.random(1000, 2000); },
      direction: 'forwards',
      loop: false
    });
  } else {
    $('#main').css({'background': '#6b8cff'});
    state = 0;
    anime({
      targets: '.w',
      translateX: function() { return 0 + 'rem'; },
      translateY: function() { return 0 + 'rem'; },
      scale: function() { return 1; },
      rotate: function() { return anime.random(-00, 00); },
      delay: function() { return 000 + anime.random(0, 000); },
      duration: function() { return anime.random(1000, 2000); },
      direction: 'forwards',
      loop: false
    });
  }

  console.log(state)
});
