function startgame(){
  
  var dot = document.getElementById("dot")
  var circle = document.getElementById("circle")
  var circle2 = document.getElementById("circle2")
  circle.style.animationName = "close-in";
  circle.style.animationDuration = "5s";
  circle.style.animationFillMode = "forwards";
  circle2.style.animationName = "close-in2";
  circle2.style.animationDuration = "5s";
  circle2.style.animationFillMode = "forwards";
  dot.style.animationName = "shake2";
  dot.style.animationDuration = "5s";
  dot.style.animationFillMode = "forwards";
  dot.style.animationIterationCount = "1";
}
