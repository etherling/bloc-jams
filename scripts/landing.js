var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransfrom = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
    forEach(points, revealPoint);
};

window.onload = function() {
    // Automatically animates the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
             animatePoints(pointsArray);
    }

    window.addEventListener("scroll", function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
             animatePoints(pointsArray);
        }
    });
}
