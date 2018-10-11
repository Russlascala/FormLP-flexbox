//delay animation of check on form
var bar = document.getElementById("startCheck");

bar.addEventListener("animationend", wait)

function wait() {
    var oldclass = bar.className;
    bar.className = "fa fa-check-circle fa-fw";
    setTimeout(function() {
        bar.className = oldclass;
    }, 1500);
}