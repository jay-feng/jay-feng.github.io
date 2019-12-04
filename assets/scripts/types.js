function appear(typeNum) {
  var id = setInterval(frame, 50);
  var type = document.getElementById(typeNum);
  var opacity = 0;
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      type.style.opacity = opacity + 0.015;
      opacity += 0.1;
    }
  }
}

window.onload = setTimeout(function(){
  appear("type1");}, 200);

window.onload = setTimeout(function(){
  appear("type2");}, 300);

window.onload = setTimeout(function(){
  appear("type3");}, 400);

window.onload = setTimeout(function(){
  appear("type4");}, 500);

window.onload = setTimeout(function(){
  appear("type5");}, 600);

window.onload = setTimeout(function(){
  appear("type6");}, 700);

window.onload = setTimeout(function(){
  appear("type7");}, 800);
