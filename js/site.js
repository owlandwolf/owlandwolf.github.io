var lineNum = 0;
function init() {
  var lines = document.getElementsByClassName('underline');
  flashLines(lines, lineNum);
  lineTimer = setInterval(function(){
    flashLines(lines, lineNum);
  }, 2500);
}

function flashLines(l, n) {
  console.log(l, n);
  var prev = (n==0 ? 3 : n-1);
  $('.underline').animate({
    opacity: 0.5
  }, 1000);
  $('.underline:eq('+n+')').animate({
    opacity: 1
  }, 1000);
  if(lineNum==l.length-1) {
    lineNum = 0;
  } else {
    lineNum++;
  }
}

// function 

window.onload = init();