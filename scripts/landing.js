var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

// var animatePoints = function() {
    // var points = document.getElementsByClassName('point');
    function revealPoint() {
        for (var i = 0; i < 3; i++) {
            points[i].style.opacity = 1;
            points[i].style.transform = "scaleX(1) translateY(0)";
            points[i].style.msTransfrom = "scaleX(1) translateY(0)";
            points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
    };

    revealPoint();

};

window.onload = function() {
    // alert("The window has loaded!");
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener('scroll', function(event) {
        // console.log(event);
        // console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
        }
    });
}

animatePoints();
