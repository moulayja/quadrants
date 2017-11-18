var topLeft = document.getElementById('topLeft');
var topRight = document.getElementById('topRight');
var bottomLeft = document.getElementById('bottomLeft');
var bottomRight = document.getElementById('bottomRight');
var corners = [topLeft, topRight, bottomLeft, bottomRight];

for (var i = 0; i < corners.length; i++) {
    corners[i].addEventListener('click', function (element) {
        let inputColor = window.prompt("Please choose your color");
        element.target.style.backgroundColor = inputColor;
    });

}
