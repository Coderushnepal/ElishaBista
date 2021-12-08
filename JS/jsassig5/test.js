var btn = document.getElementById("btn");
var i = 0;

btn.addEventListener("click", function () {
  var ball = document.createElement("div");
  var box = document.getElementById("box1");

  ball.id = i;
  ball.style.height = "25px";
  ball.style.width = "25px";
  ball.style.backgroundColor = "red";
  ball.style.borderRadius = "50%";

//   box.style.position = "absolute";

  ball.style.position = "absolute";
  ball.style.top = Math.random() * (box.clientHeight - 25) + "px";
  ball.style.left = Math.random() * (box.clientWidth - 25) + "px";
  box.appendChild(ball);
}
);